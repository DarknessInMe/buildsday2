import { expect, test, beforeEach, vi, describe } from 'vitest';
import { IRootSerialized, Root } from '../Root';
import { BasicTree } from '../../Tree';
import { 
    MOCKED_TREE, 
    MOCKED_SUBTREE, 
    MOCKED_SKILL, 
    addSkill,
} from '../../__tests__';
import { BasicSubtree } from '../../Subtree';
import { 
    MOCKED_ROOT_SERIALIZED,
    MOCKED_TREE_2,
    MOCKED_SUBTREE_2,
    MOCKED_SKILL_2,
} from './mocks';

let root: Root;

beforeEach(() => {
    const tree1 = new BasicTree(MOCKED_TREE.id, MOCKED_TREE.name);
    const tree2 = new BasicTree(MOCKED_TREE_2.id, MOCKED_TREE_2.name);

    const subtree1 = new BasicSubtree(MOCKED_SUBTREE.id, MOCKED_SUBTREE.name);
    const subtree2 = new BasicSubtree(MOCKED_SUBTREE_2.id, MOCKED_SUBTREE_2.name);

    addSkill(subtree1, MOCKED_SKILL);
    addSkill(subtree2, MOCKED_SKILL_2);

    tree1.addSubtree(subtree1);
    tree2.addSubtree(subtree2);

    root = new Root()
        .setTree(tree1.id, tree1)
        .setTree(tree2.id, tree2);
});

describe('Testing meta methods', () => {
    test('Should be able to serialize properly', () => {
        expect(root.serialize()).toMatchObject<IRootSerialized>(MOCKED_ROOT_SERIALIZED)
    });

    test('Should query properly', () => {
        const result = root.query(MOCKED_SKILL_2.id);

        expect(result).not.toBeNull();
        expect(result?.skill?.id).toBe(MOCKED_SKILL_2.id);
        expect(result?.subtree?.id).toBe(MOCKED_SUBTREE_2.id);
        expect(result?.tree?.id).toBe(MOCKED_TREE_2.id);
    })
});

describe('Testing skill purchasing', () => {
    test('Should be able to buy skill', () => {
        root.buySkill(MOCKED_SKILL.id);

        const result = root.query(MOCKED_SKILL.id);
        expect(result?.skill?.getStatus?.()).toBe(0);
    });
    test('Should be able to remove skill', () => {
        root.buySkill(MOCKED_SKILL.id);
        root.removeSkill(MOCKED_SKILL.id);

        const result = root.query(MOCKED_SKILL.id);
        expect(result?.skill?.getStatus?.()).toBe(-1);
    });
    test('Root points should be decreased on skill purchase', () => {
        const initialPoints = root.points;

        root.buySkill(MOCKED_SKILL.id);

        const result = root.query(MOCKED_SKILL.id);
        const skill = result!.skill;
        const price = skill.price[skill.getStatus() as number];

        expect(root.points).toBe(initialPoints - price);
    });
    test('Root points should be returned to initial state on skill remove', () => {
        const initialPoints = root.points;

        root.buySkill(MOCKED_SKILL.id);
        root.removeSkill(MOCKED_SKILL.id);

        expect(root.points).toBe(initialPoints);
    })
})