import { SkillIdsEnum, SubtreeIdsEnum, TreeIdsEnum } from '../shared/enums';
import { ITree, ITreeSerialized, MastermindTree } from '../Tree';
import { INITIAL_POINTS_COUNT } from '../shared/constants';
import { ISkill } from '../Skill';
import { ISubtree } from '../Subtree';
import { PubSub, Changes, SubscriberType } from './PubSub';

export interface IRootSerialized {
    points: number,
    isInfamyBonus: boolean,
    trees: Record<TreeIdsEnum, ITreeSerialized>,
}

export class Root {
    public trees: Map<TreeIdsEnum, ITree> = new Map();
    public points: number = INITIAL_POINTS_COUNT;
    public isInfamyBonus: boolean = false;
    private pubSub = new PubSub();

    constructor() {
        const mastermind = new MastermindTree();

        this.trees.set(mastermind.id, mastermind);
    }

    public operatePoints(acc: number) {
        this.points += acc;
    }

    public toggleInfamyBonus(infamyState: boolean) {
        this.isInfamyBonus = infamyState;
    }

    public serialize(): IRootSerialized {
        const trees = {};

        this.trees.forEach((tree, id) => {
            trees[id] = tree.serialize();
        })

        return {
            points: this.points,
            isInfamyBonus: this.isInfamyBonus,
            trees: trees as Record<TreeIdsEnum, ITreeSerialized>,
        }
    }

    public onChange(callback: SubscriberType) {
        return this.pubSub.onChange(callback);
    }

    public notifySubscribers(skill: ISkill, subtree: ISubtree) {
        this.pubSub.notifySubscribers(new Changes(
            this.points,
            this.isInfamyBonus,
            skill,
            subtree,
        ))
    }

    public query(skillId: SkillIdsEnum) {
        const treeIterator = this.trees[Symbol.iterator]();

        for (const [, treeEntity] of treeIterator) {
            const result = treeEntity.query(skillId);

            if (result) {
                return result
            }
        }

        return null;
    }

    public buySkill(skillId: SkillIdsEnum) {
        const result = this.query(skillId);

        if (!result) {
            return;
        }

        const { skill, subtree } = result;

        const points = skill.buySkill();

        subtree.wastePoints(points);
        this.operatePoints(points * -1);
        this.notifySubscribers(skill, subtree);
    }

    public removeSkill(skillId: SkillIdsEnum) {
        const result = this.query(skillId);

        if (!result) {
            return;
        }

        const { skill, subtree } = result;

        const points = skill.removeSkill();

        subtree.restorePoints(points);
        this.operatePoints(points);
        this.notifySubscribers(skill, subtree);
    }
}