import { ISkill, Skill, ISkillParent } from './index';
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { MOCKED_SKILL } from '../__tests__/mocks';

const MOCKED_PARENT: ISkillParent = {
    validateSkillPoints: vi.fn(() => true),
    onBuySkill: vi.fn(),
    onRemoveSkill: vi.fn(),
}

describe('Testing Skill purchase methods', () => {
    let skill: ISkill;

    beforeEach(() => {
        skill = new Skill(
            MOCKED_SKILL.id,
            MOCKED_SKILL.name,
            MOCKED_SKILL.price,
            MOCKED_SKILL.description,
            MOCKED_SKILL.pointsToAccess,
            MOCKED_PARENT,
        )
    });

    test('Correct Skill buying behavior', () => {
        expect(skill.getStatus()).toBe(-1);
        skill.buySkill(false);
        expect(skill.getStatus()).toBe(0);
        skill.buySkill(false);
        expect(skill.getStatus()).toBe(1);
    });

    test('Should not get higher status than aced version on skill purchase', () => {
        skill.buySkill(false);
        skill.buySkill(false);
        
        expect(skill.getStatus()).toBe(1); // get Aced version

        skill.buySkill(false);

        expect(skill.getStatus()).toBe(1); // must remain with aced status
    })

    test('Should not get lower status value than unbought skill status', () => {
        expect(skill.getStatus()).toBe(-1); // must be -1 by default
        skill.removeSkill();

        expect(skill.getStatus()).toBe(-1);
    })
});