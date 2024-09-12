import { ISubtree, ISubtreeSerialized } from '../Subtree';
import { ITree, ITreeSerialized, ITreeQueryPayload } from './interfaces';

export class BasicTree implements ITree {
    public subtrees = new Map<string, ISubtree>;

    constructor(
        public readonly id: string,
        public readonly name: string
    ) {}

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
        this.subtrees.set(subtreeEntity.id, subtreeEntity);

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