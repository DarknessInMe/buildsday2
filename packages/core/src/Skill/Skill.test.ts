import { expect, test, describe, beforeEach } from 'vitest';
import { ISkill, SkillStatusEnum, SkillBuilder } from './index';
import { Modifier } from '../Root';

describe('Testing Skill purchase methods', () => {
	let skill: ISkill;

	beforeEach(() => {
		skill = new SkillBuilder('SKILL_ID', new Modifier()).setName('Skill').build();
	});

	test('Correct Skill buying behavior', () => {
		expect(skill.getStatus()).toBe(null);
		skill.buy();
		expect(skill.getStatus()).toBe(SkillStatusEnum.BASIC);
		skill.buy();
		expect(skill.getStatus()).toBe(SkillStatusEnum.ACED);
	});

	test('Should not get higher status than aced version on skill purchase', () => {
		skill.buy();
		skill.buy();

		expect(skill.getStatus()).toBe(SkillStatusEnum.ACED); // get Aced version

		skill.buy();

		expect(skill.getStatus()).toBe(SkillStatusEnum.ACED); // must remain with aced status
	});

	test('Should not get lower status value than unbought skill status', () => {
		expect(skill.getStatus()).toBe(null); // must be null by default
		skill.remove();

		expect(skill.getStatus()).toBe(null);
	});
});
