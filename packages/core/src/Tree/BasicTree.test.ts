import { expect, test, describe, beforeEach } from 'vitest';
import { BasicSubtree, ISubtree } from '../Subtree';
import { MOCKED_SUBTREE, MOCKED_TREE, MOCKED_SKILL, addSkill, IMockedSkill } from '../__tests__';
import { BasicTree, ITree, ITreeSerialized } from './BasicTree';
import { ISkill } from '../Skill';

const MOCKED_SKILL_2: IMockedSkill = {
    ...MOCKED_SKILL,
    id: 'SKILL_ID_2',
    name: 'Testing Skill 2',
};

const MOCKED_SKILL_3: IMockedSkill = {
    ...MOCKED_SKILL,
    id: 'SKILL_ID_3',
    name: 'Testing Skill 3',
};

let tree: ITree;
let subtree: ISubtree;
let skill: ISkill;

beforeEach(() => {
    tree = new BasicTree(MOCKED_TREE.id, MOCKED_TREE.name);
    subtree = new BasicSubtree(MOCKED_SUBTREE.id, MOCKED_SUBTREE.name);
    skill = addSkill(subtree, MOCKED_SKILL);

    tree.addSubtree(subtree.id, subtree);
})

describe('Testing Tree query', () => {
    test('Should be able to query skill', () => {
        const result = tree.query(MOCKED_SKILL.id);

        expect(result).not.toBeNull();
        expect(result?.skill?.id).toBe(MOCKED_SKILL.id);
        expect(result?.subtree?.id).toBe(MOCKED_SUBTREE.id);
        expect(result?.tree?.id).toBe(MOCKED_TREE.id);
    });
    test('Should return null for nonexistent skill', () => {
        const result = tree.query('SOME_NONEXISTENT_SKILL');

        expect(result).toBeNull();
    });
    test('Should be able to query deep nested hierarchy', () => {
        const subtree2 = new BasicSubtree('SUBTREE_2', MOCKED_SUBTREE.name);
        const subtree3 = new BasicSubtree('SUBTREE_3', MOCKED_SUBTREE.name);

        addSkill(subtree2, MOCKED_SKILL_2);
        addSkill(subtree3, MOCKED_SKILL_3);

        tree.addSubtree(subtree2.id, subtree2);
        tree.addSubtree(subtree3.id, subtree3);

        const result = tree.query(MOCKED_SKILL_3.id);

        expect(result).not.toBeNull();
        expect(result?.skill?.id).toBe(MOCKED_SKILL_3.id);
        expect(result?.subtree?.id).toBe(subtree3.id);
    })
});

describe('Testing serializing', () => {
    test('Should be able to serialize properly', () => {
        expect(tree.serialize()).toMatchObject<ITreeSerialized>({
            id: MOCKED_TREE.id,
            name: MOCKED_TREE.name,
            subtrees: {
                [MOCKED_SUBTREE.id]: {
                    id: MOCKED_SUBTREE.id,
                    name: MOCKED_SUBTREE.name,
                    pointsWasted: 0,
                    skills: {
                        [MOCKED_SKILL.id]: {
                            id: MOCKED_SKILL.id,
                            status: -1,
                            pointsToAccess: MOCKED_SKILL.pointsToAccess,
                            name: MOCKED_SKILL.name,
                            description: MOCKED_SKILL.description,
                            price: MOCKED_SKILL.price,
                        },
                    }
                }
            }
        })
    });
})