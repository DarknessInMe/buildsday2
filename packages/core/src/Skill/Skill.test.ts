import { Connection, ISkill, Skill, SkillStatusEnum } from './index';
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { MOCKED_SKILL } from '../__tests__/mocks';
import { IEntityParent } from '../shared/interfaces';

const MOCKED_PARENT: IEntityParent = {
   verifySkillPurchase: vi.fn(() => true),
   verifySkillDeletion: vi.fn(() => true),
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
            new Connection(MOCKED_SKILL.tier, MOCKED_SKILL.pointsToAccess),
        ).setParent(MOCKED_PARENT)
    });

    test('Correct Skill buying behavior', () => {
        expect(skill.getStatus()).toBe(SkillStatusEnum.NULL);
        skill.buySkill();
        expect(skill.getStatus()).toBe(SkillStatusEnum.BASIC);
        skill.buySkill();
        expect(skill.getStatus()).toBe(SkillStatusEnum.ACED);
    });

    test('Should not get higher status than aced version on skill purchase', () => {
        skill.buySkill();
        skill.buySkill();
        
        expect(skill.getStatus()).toBe(SkillStatusEnum.ACED); // get Aced version

        skill.buySkill();

        expect(skill.getStatus()).toBe(SkillStatusEnum.ACED); // must remain with aced status
    })

    test('Should not get lower status value than unbought skill status', () => {
        expect(skill.getStatus()).toBe(SkillStatusEnum.NULL); // must be -1 by default
        skill.removeSkill();

        expect(skill.getStatus()).toBe(SkillStatusEnum.NULL);
    })
});