import { SkillIdsEnum, TreeIdsEnum } from '../shared/enums';
import { ITree, ITreeSerialized, MastermindTree } from '../Tree';

export type RootSerializedType = {
    [key in TreeIdsEnum]: ITreeSerialized
}

export class Root {
    public trees: Map<TreeIdsEnum, ITree> = new Map();

    constructor() {
        const mastermind = new MastermindTree();

        this.trees.set(mastermind.id, mastermind);
    }

    public serialize(): RootSerializedType {
        const trees = {};

        this.trees.forEach((tree, id) => {
            trees[id] = tree.serialize();
        })

        return trees as RootSerializedType;
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
    }

    public removeSkill(skillId: SkillIdsEnum) {
        const result = this.query(skillId);

        if (!result) {
            return;
        }

        const { skill, subtree } = result;

        const points = skill.removeSkill();
        subtree.restorePoints(points);
    }
}