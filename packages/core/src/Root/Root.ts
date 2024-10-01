import { ITree, ITreeSerialized } from '../Tree';
import { INITIAL_POINTS_COUNT } from '../shared/constants';
import { ISkill } from '../Skill';
import { ISubtree } from '../Subtree';
import { PubSub, Changes, SubscriberType } from './PubSub';
import { IRootSerialized } from './interfaces';
import { IEntityParent } from '../shared/interfaces';

export class Root implements IEntityParent {
    public trees: Map<string, ITree> = new Map();
    public points: number = INITIAL_POINTS_COUNT;
    public isInfamyBonus: boolean = false;
    private pubSub = new PubSub();

    constructor() {}

    private operatePoints(acc: number) {
        this.points += acc;
    }

    public setTree(tree: ITree) {
        this.trees.set(tree.id, tree.setParent(this));

        return this;
    }

    public toggleInfamyBonus(infamyState: boolean) {
        this.isInfamyBonus = infamyState;
        this.notifySubscribers()
    }

    public serialize(): IRootSerialized {
        const trees = {} as Record<string, ITreeSerialized>;

        this.trees.forEach((tree, id) => {
            trees[id] = tree.serialize();
        })

        return {
            points: this.points,
            isInfamyBonus: this.isInfamyBonus,
            trees,
        }
    }

    public onChange(callback: SubscriberType) {
        return this.pubSub.onChange(callback);
    }

    public verifySkillPurchase(price: number) {
      return this.points - price >= 0;
    }

    public onBuySkill(price: number) {
      this.operatePoints(price);
    }

    public onRemoveSkill(price: number) {
      this.operatePoints(price * -1);
    }

    public notifySubscribers(
      skill: ISkill | null = null, 
      subtree: ISubtree | null = null,
      treeId: string | null = null,
   ) {
        this.pubSub.notifySubscribers(new Changes(
            this.points,
            this.isInfamyBonus,
            treeId,
            skill,
            subtree,
        ))
    }

    public query(skillId: string) {
        const treeIterator = this.trees[Symbol.iterator]();

        for (const [, treeEntity] of treeIterator) {
            const result = treeEntity.query(skillId);

            if (result) {
                return result
            }
        }

        return null;
    }

    public buySkill(skillId: string) {
        const result = this.query(skillId);

        if (!result) {
            return;
        }

        const { skill, subtree, tree } = result;
        const points = skill.buySkill(this.isInfamyBonus);

        if (typeof points === 'number') {
            this.notifySubscribers(skill, subtree, tree.id);
        }
    }

    public removeSkill(skillId: string) {
        const result = this.query(skillId);

        if (!result) {
            return;
        }

        const { skill, subtree, tree } = result;
        const points = skill.removeSkill();

        if (typeof points === 'number') {
            this.notifySubscribers(skill, subtree, tree.id);
        }
    }
}