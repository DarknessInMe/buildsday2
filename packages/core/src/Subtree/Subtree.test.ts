import { expect, test, describe, beforeEach } from 'vitest';
import { ISubtreeSerialized, Subtree } from './index';
import { ISkill, Skill, SkillStatusEnum } from '../Skill';
import { Modifier } from '../Root';
import { ISubtree } from './interfaces';

let subtree: ISubtree;

beforeEach(() => {
	subtree = new Subtree('SUBTREE_ID', 'Subtree', 0, new Modifier())
		.addChild(new Skill('SKILL_1', 'Skill 1', ['', ''], 1, [1, 2], [0, 0], new Modifier()))
		.addChild(new Skill('SKILL_2', 'Skill 2', ['', ''], 1, [1, 2], [0, 0], new Modifier()));
});

describe('Testing meta methods for interaction with skills', () => {
	test('Should be able to add new skills', () => {
		expect(subtree.children.has('SKILL_1')).toBe(true);
		expect(subtree.children.has('SKILL_2')).toBe(true);
	});

	test('Should be able to query skills', () => {
		expect(subtree.query('SKILL_1')).not.toBeFalsy();
		expect(subtree.query('SKILL_1')).not.toBeFalsy();
		expect(subtree.query('SKILL_3')).toBeNull();
	});
});

describe('Testing skills purchasing', () => {
	test('Should be able to buy skills', () => {
		const skill = subtree.query('SKILL_1') as ISkill;

		subtree.buy(skill);

		expect(skill.getStatus()).toBe(SkillStatusEnum.BASIC);
		expect(subtree.getInvestedPoints()).toBe(skill.getPrice(skill.getStatus()));
	});
	test('Should be able to remove skills', () => {
		const skill = subtree.query('SKILL_1') as ISkill;

		subtree.buy(skill);
		subtree.remove(skill);

		expect(skill.getStatus()).toBe(null);
		expect(subtree.getInvestedPoints()).toBe(0);
	});
	test('Should not be able to buy skill without required points to access', () => {
		const skill = new Skill('SKILL_3', 'Skill 3', ['', ''], 1, [1, 2], [2, 3], new Modifier());

		subtree.addChild(skill);
		subtree.buy(skill);

		expect(skill.getStatus()).toBe(null);
		expect(subtree.getInvestedPoints()).toBe(0);
	});
	test('Should be able to buy skill by acing already bought skill', () => {
		const cheapSkill = new Skill(
			'CHEAP_SKILL',
			'Cheap',
			['', ''],
			1,
			[1, 1],
			[0, 0],
			new Modifier(),
		);
		const expensiveSkill = new Skill(
			'EXPENSIVE_SKILL',
			'Expensive',
			['', ''],
			1,
			[2, 2],
			[2, 2],
			new Modifier(),
		);

		subtree.addChild(cheapSkill).addChild(expensiveSkill);
		subtree.buy(cheapSkill);
		subtree.buy(cheapSkill); // acing same skill
		subtree.buy(expensiveSkill);

		expect(cheapSkill.getStatus()).toBe(SkillStatusEnum.ACED);
		expect(expensiveSkill.getStatus()).toBe(SkillStatusEnum.BASIC);
		expect(subtree.getInvestedPoints()).toBe(4);
	});
	test('Should be able to handle infamy bonus for skill purchases', () => {
		const modifier = new Modifier();
		const cheapSkill = new Skill('CHEAP_SKILL', 'Cheap', ['', ''], 1, [1, 1], [0, 0], modifier);
		const expensiveSkill = new Skill(
			'EXPENSIVE_SKILL',
			'Expensive',
			['', ''],
			1,
			[2, 2],
			[2, 3],
			modifier,
		);

		subtree.addChild(cheapSkill).addChild(expensiveSkill);

		// Get 2 wasted points for subtree (common and aced version of cheapSkill costs 1 point)
		subtree.buy(cheapSkill);
		subtree.buy(cheapSkill);

		subtree.buy(expensiveSkill);
		// Expensive skill requires 3 points without infamy bonus. Currently,
		// only 2 skill points were gained by subtree. Expensive must not be bought
		expect(expensiveSkill.getStatus()).toBe(null);

		modifier.setDiscountStatus(true);
		subtree.buy(expensiveSkill);

		// Now, expensive skill has been bought with infamy bonus, which requires 2 points to access.
		expect(expensiveSkill.getStatus()).toBe(SkillStatusEnum.BASIC);
	});
});

describe('Testing serializing', () => {
	test('Should be able to serialize properly empty subtree', () => {
		expect(subtree.serialize()).toMatchObject<ISubtreeSerialized>({
			id: 'SUBTREE_ID',
			points: 0,
			skills: [],
		});
	});
	test('Should be able to serialize non-empty subtree', () => {
		const skill1 = subtree.query('SKILL_1') as ISkill;
		const skill2 = subtree.query('SKILL_2') as ISkill;

		subtree.buy(skill1);
		subtree.buy(skill2);

		expect(subtree.serialize()).toMatchObject<ISubtreeSerialized>({
			id: 'SUBTREE_ID',
			points: 2,
			skills: [
				{
					id: 'SKILL_1',
					status: SkillStatusEnum.BASIC,
					tier: 1,
				},
				{
					id: 'SKILL_2',
					status: SkillStatusEnum.BASIC,
					tier: 1,
				},
			],
		});
	});
});
