import { Modifier } from 'src/Root';
import { ISkill, SkillBuilder, SkillStatusEnum } from 'src/Skill';
import { ISubtree, Subtree } from 'src/Subtree';
import { ITree, Tree } from 'src/Tree';
import { expect, test, describe, beforeEach } from 'vitest';
import { IMainStructure } from './interfaces';
import { MainStructure } from './MainStructure';

let structure: IMainStructure;
let tree: ITree;
let subtree: ISubtree;
let skill: ISkill;
const modifier = new Modifier();

beforeEach(() => {
	structure = new MainStructure(100, modifier);
	tree = new Tree('TREE_ID', '', modifier);
	subtree = new Subtree('SUBTREE_ID', '', modifier);
	skill = new SkillBuilder('SKILL_ID', modifier).setPrice([1, 2]).setUnlockPoints([0, 0]).build();

	subtree.addChild(skill);
	tree.addChild(subtree);
	structure.addChild(tree);
});

describe('Testing skill purchase/removing', () => {
	test('Proper skill purchase', () => {
		const skill = structure.query('SKILL_ID') as ISkill;

		structure.buy('SKILL_ID');

		expect(skill).not.toBeNull();
		expect(skill.getStatus()).toBe(SkillStatusEnum.BASIC);
	});
	test('Proper skill removing', () => {
		const skill = structure.query('SKILL_ID') as ISkill;

		structure.buy('SKILL_ID');
		structure.remove('SKILL_ID');

		expect(skill).not.toBeNull();
		expect(skill.getStatus()).toBe(null);
	});
	test('Skill should not be able to buy if there are no free points', () => {
		const skill = structure.query('SKILL_ID') as ISkill;
		const skill2 = new SkillBuilder('SKILL_ID_2', modifier).setPrice([2, 2]).build();
		const subtree = structure.query('SUBTREE_ID') as ISubtree;

		subtree.addChild(skill2);

		structure.setTotalPoints(2);
		structure.buy('SKILL_ID_2');
		structure.buy('SKILL_ID');

		expect(skill2.getStatus()).toBe(SkillStatusEnum.BASIC);
		expect(skill.getStatus()).toBe(null);
	});
});
