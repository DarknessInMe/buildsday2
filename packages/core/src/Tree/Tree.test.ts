import { expect, test, describe, beforeEach } from 'vitest';
import { Subtree, ISubtree } from '../Subtree';
import { Tree } from './Tree';
import { ITree, ITreeSerialized } from './interfaces';
import { ISkill, SkillBuilder, SkillStatusEnum } from '../Skill';
import { Modifier } from 'src/Root';

let tree: ITree;
let subtree: ISubtree;
let skill: ISkill;
const modifier = new Modifier();

beforeEach(() => {
	tree = new Tree('TREE_ID', '', modifier);
	subtree = new Subtree('SUBTREE_ID', '', modifier);
	skill = new SkillBuilder('SKILL_ID', modifier).setPrice([1, 2]).setUnlockPoints([0, 0]).build();

	subtree.addChild(skill);
	tree.addChild(subtree);
});

describe('Testing Tree query', () => {
	test('Should be able to query skill', () => {
		const foundSkill = tree.query('SKILL_ID');

		expect(foundSkill).not.toBeNull();
		expect(foundSkill?.id).toBe('SKILL_ID');
	});
	test('Should be able to query subtree', () => {
		const foundSubtree = tree.query('SUBTREE_ID');

		expect(foundSubtree).not.toBeNull();
		expect(foundSubtree?.id).toBe('SUBTREE_ID');
	});
	test('Should return null for nonexistent skill', () => {
		const nonexistentSkill = tree.query('SOME_NONEXISTENT_SKILL');

		expect(nonexistentSkill).toBeNull();
	});
	test('Should be able to query deep nested hierarchy', () => {
		const subtree2 = new Subtree('SUBTREE_2', '', modifier);
		const subtree3 = new Subtree('SUBTREE_3', '', modifier);

		subtree2.addChild(new SkillBuilder('SKILL_ID_2', modifier).build());
		subtree3.addChild(new SkillBuilder('SKILL_ID_3', modifier).build());

		tree.addChild(subtree2);
		tree.addChild(subtree3);

		const foundSkill = tree.query('SKILL_ID_3') as ISkill;

		expect(foundSkill).not.toBeNull();
		expect(foundSkill?.id).toBe('SKILL_ID_3');
		expect(foundSkill.parent.id).toBe('SUBTREE_3');
	});
});

describe('Testing serializing', () => {
	test('Should be able to serialize empty tree properly', () => {
		expect(tree.serialize()).toMatchObject<ITreeSerialized>({
			id: 'TREE_ID',
			subtrees: [],
		});
	});
	test('Should be able to serialize tree properly', () => {
		const skill = tree.query('SKILL_ID') as ISkill;

		tree.buy(skill);

		expect(tree.serialize()).toMatchObject<ITreeSerialized>({
			id: 'TREE_ID',
			subtrees: [
				{
					id: 'SUBTREE_ID',
					points: 1,
					skills: [
						{
							id: 'SKILL_ID',
							status: SkillStatusEnum.BASIC,
							tier: 1,
						},
					],
				},
			],
		});
	});
});
