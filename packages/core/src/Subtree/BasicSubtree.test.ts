import { expect, test, describe, beforeEach } from 'vitest'
import { BasicSubtree, ISubtree, ISubtreeSerialized } from './BasicSubtree';
import { MOCKED_SKILL, MOCKED_SKILL_2, IMockedSkill } from '../__tests__/mocks';

let subtree: ISubtree;

const addSkill = (subtree: ISubtree, mock: IMockedSkill) => {
    return subtree.addSkill(
        mock.id,
        mock.name,
        mock.price,
        mock.description,
        mock.pointsToAccess,
    );
}

beforeEach(() => {
    subtree = new BasicSubtree(
        'TESTING_SUBTREE',
        'Testing Subtree',
    )
})

describe('Testing meta methods for interaction with skills', () => {
    beforeEach(() => {
        addSkill(subtree, MOCKED_SKILL);
        addSkill(subtree, MOCKED_SKILL_2);
    })

    test('Should be able to add new skills', () => {
        expect(subtree.skills.has(MOCKED_SKILL.id)).toBe(true);
        expect(subtree.skills.has(MOCKED_SKILL_2.id)).toBe(true);
    });

    test('Should be able to query skills', () => {
        expect(subtree.query(MOCKED_SKILL.id)).not.toBeFalsy();
        expect(subtree.query(MOCKED_SKILL.id)).not.toBeFalsy()
        expect(subtree.query('TESTING_SKILL_3')).toBeNull()
    });
});

describe('Testing skills purchasing', () => {
    test('Should be able to buy skills', () => {
        const skill = addSkill(subtree, MOCKED_SKILL);

        const pointsWastedForSkill = skill.buySkill(false);

        expect(skill.getStatus()).toBe(0);
        expect(subtree.getWastedPoints()).toBe(pointsWastedForSkill);
    });
    test('Should be able to remove skills', () => {
        const skill = addSkill(subtree, MOCKED_SKILL);

        skill.buySkill(false);
        skill.removeSkill();

        expect(skill.getStatus()).toBe(-1);
        expect(subtree.getWastedPoints()).toBe(0);
    });
    test('Should not be able to buy skill without required points to access', () => {
        const MODIFIED_SKILL: IMockedSkill = { 
            ...MOCKED_SKILL_2, 
            pointsToAccess: [2, 3],
        };

        const skill = addSkill(subtree, MODIFIED_SKILL);

        skill.buySkill(false);

        expect(skill.getStatus()).toBe(-1);
        expect(subtree.getWastedPoints()).toBe(0);
    });
    test('Should be able to buy skill by acing already bought skill', () => {
        const CHEAP_SKILL: IMockedSkill = { 
            ...MOCKED_SKILL, 
            price: [1, 1],
            pointsToAccess: [0, 0],
        };
        const EXPENSIVE_SKILL: IMockedSkill = { 
            ...MOCKED_SKILL_2,
            price: [2, 2],
            pointsToAccess: [2, 2],
        };

        const cheapSkill = addSkill(subtree, CHEAP_SKILL);
        const expensiveSkill = addSkill(subtree, EXPENSIVE_SKILL);
        
        cheapSkill.buySkill(false);
        cheapSkill.buySkill(false); // acing same skill
        expensiveSkill.buySkill(false);

        expect(cheapSkill.getStatus()).toBe(1);
        expect(expensiveSkill.getStatus()).toBe(0);
        expect(subtree.getWastedPoints()).toBe(4);
    });
    test('Should be able to handle infamy bonus for skill purchases', () => {
        const CHEAP_SKILL: IMockedSkill = { 
            ...MOCKED_SKILL, 
            price: [1, 1],
            pointsToAccess: [0, 0],
        };
        const EXPENSIVE_SKILL: IMockedSkill = { 
            ...MOCKED_SKILL_2,
            price: [2, 2],
            pointsToAccess: [2, 3],
        };

        const cheapSkill = addSkill(subtree, CHEAP_SKILL);
        const expensiveSkill = addSkill(subtree, EXPENSIVE_SKILL);
        
        cheapSkill.buySkill(false);
        cheapSkill.buySkill(false);
    
        expensiveSkill.buySkill(false);

        // Expensive skill requires 3 points without infamy bonus. Currently, 
        // only 2 skill points were gained by subtree. Expensive must not be bought
        expect(expensiveSkill.getStatus()).toBe(-1);

        expensiveSkill.buySkill(true);

        // Now, expensive skill has been bought with infamy bonus, which requires 2 points to access.
        expect(expensiveSkill.getStatus()).toBe(0);
    });
})

describe('Testing serializing', () => {
    test('Should be able to serialize properly', () => {
        addSkill(subtree, MOCKED_SKILL);
        addSkill(subtree, MOCKED_SKILL_2);

        expect(subtree.serialize()).toMatchObject<ISubtreeSerialized>({
            id: 'TESTING_SUBTREE',
            name: 'Testing Subtree',
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
                [MOCKED_SKILL_2.id]: {
                    id: MOCKED_SKILL_2.id,
                    status: -1,
                    pointsToAccess: MOCKED_SKILL_2.pointsToAccess,
                    name: MOCKED_SKILL_2.name,
                    description: MOCKED_SKILL_2.description,
                    price: MOCKED_SKILL_2.price,
                },
            }
        })
    });
});