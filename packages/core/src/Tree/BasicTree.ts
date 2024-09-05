import { TREE_NAMES_MAP } from '../shared/constants';
import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { SkillIdsEnum, SubtreeIdsEnum, TreeIdsEnum } from '../shared/enums';
import { ITreeQueryPayload } from '../shared/interfaces';

export interface ITree {
    subtrees: Map<SubtreeIdsEnum, ISubtree>,
    id: TreeIdsEnum,
    name: string;
    query: (skillId: SkillIdsEnum) => ITreeQueryPayload | null,
    serialize: () => ITreeSerialized,
}

export interface ITreeSerialized {
    id: TreeIdsEnum,
    name: string,
    subtrees: Record<SubtreeIdsEnum, ISubtreeSerialized>
}

export abstract class BasicTree implements ITree {
    public subtrees = new Map<SubtreeIdsEnum, ISubtree>;
    public name: string;

    constructor(
        public id: TreeIdsEnum
    ) {
        this.name = TREE_NAMES_MAP[id];
    }

    public serialize(): ITreeSerialized {
        const subtrees = {};

        this.subtrees.forEach((subtree, id) => {
            subtrees[id] = subtree.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            subtrees: subtrees as Record<SubtreeIdsEnum, ISubtreeSerialized>,
        };
    }

    public addSubtree(subtreeId: SubtreeIdsEnum, subtreeEntity: ISubtree) {
        this.subtrees.set(subtreeId, subtreeEntity);
    }

    public query(skillId: SkillIdsEnum): ITreeQueryPayload | null {
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