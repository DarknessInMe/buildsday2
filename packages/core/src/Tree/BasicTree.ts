import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { ITree, ITreeSerialized, ITreeQueryPayload } from './interfaces';
import { IEntityParent } from '../shared/interfaces';
import { IGlobalContext } from "../shared/interfaces";

export class BasicTree implements ITree {
    public subtrees = new Map<string, ISubtree>;
    public parent: IEntityParent | null = null;
    public context: IGlobalContext | null = null;

    constructor(
        public readonly id: string,
        public readonly name: string,
    ) {}

    public setParent(parent: IEntityParent | null) {
      this.parent = parent;
      return this;
    }

    public setContext(context: IGlobalContext | null) {
      this.context = context;
      return this;
    };

    public verifySkillPurchase(price: number, pointsToAccess: number) {
      return this.parent ? this.parent.verifySkillPurchase(price, pointsToAccess) : true;
    }

    public verifySKillDeletion(price: number, skillId: string) {
      return this.parent ? this.parent.verifySKillDeletion(price, skillId) : true;
    };

    public onBuySkill(price: number) {
      this.parent?.onBuySkill?.(price);
    }

    public onRemoveSkill(price: number) {
      this.parent?.onRemoveSkill?.(price);
    }

    public serialize(): ITreeSerialized {
        const subtrees = {} as Record<string, ISubtreeSerialized>;

        this.subtrees.forEach((subtree, id) => {
            subtrees[id] = subtree.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            subtrees,
        };
    }

    public addSubtree(subtreeEntity: ISubtree) {
      this.subtrees.set(subtreeEntity.id, subtreeEntity
         .setParent(this)
         .setContext(this.context)
      );

      return subtreeEntity;
    }

    public query(skillId: string): ITreeQueryPayload | null {
        const subtreeIterator = this.subtrees[Symbol.iterator]();

        for (const [, subtreeEntity] of subtreeIterator) {
            const requiredSkill = subtreeEntity.query(skillId);

            if (requiredSkill) {
                return {
                    skill: requiredSkill,
                    subtree: subtreeEntity,
                    tree: this,
                }
            }
        }

        return null;
    }
}