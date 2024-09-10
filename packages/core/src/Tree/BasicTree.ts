import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { ITreeQueryPayload } from '../shared/interfaces';

export interface ITree {
    subtrees: Map<string, ISubtree>,
    id: string,
    name: string;
    query: (skillId: string) => ITreeQueryPayload | null,
    serialize: () => ITreeSerialized,
}

export interface ITreeSerialized {
    id: string,
    name: string,
    subtrees: Record<string, ISubtreeSerialized>
}

export abstract class BasicTree implements ITree {
    public subtrees = new Map<string, ISubtree>;

    constructor(
        public readonly id: string,
        public readonly name: string
    ) {}

    public serialize(): ITreeSerialized {
        const subtrees = {};

        this.subtrees.forEach((subtree, id) => {
            subtrees[id] = subtree.serialize();
        })

        return {
            id: this.id,
            name: this.name,
            subtrees: subtrees as Record<string, ISubtreeSerialized>,
        };
    }

    public addSubtree(subtreeId: string, subtreeEntity: ISubtree) {
        this.subtrees.set(subtreeId, subtreeEntity);
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