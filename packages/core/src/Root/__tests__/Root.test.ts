import { expect, test, beforeEach, describe } from 'vitest';
import { IRootSerialized, Root } from '../index';
import { BasicTree } from '../../Tree';
import { 
   MOCKED_TREE, 
   MOCKED_SUBTREE, 
   MOCKED_SKILL, 
   addSkill,
   IMockedSkill,
} from '../../__tests__';
import { BasicSubtree } from '../../Subtree';
import { SkillStatusEnum } from '../../Skill';
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
      .setTree(tree1)
      .setTree(tree2);
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
      expect(result?.skill?.getStatus?.()).toBe(SkillStatusEnum.BASIC);
   });
   test('Should be able to remove skill', () => {
      root.buySkill(MOCKED_SKILL.id);
      root.removeSkill(MOCKED_SKILL.id);

      const result = root.query(MOCKED_SKILL.id);
      expect(result?.skill?.getStatus?.()).toBe(SkillStatusEnum.NULL);
   });
   test('Root points should be decreased on skill purchase', () => {
      const initialPoints = root.points;

      root.buySkill(MOCKED_SKILL.id);

      const result = root.query(MOCKED_SKILL.id);
      const skill = result!.skill;
      const price = skill.getPriceByStatus(skill.getStatus());

      expect(root.points).toBe(initialPoints - price);
   });
   test('Root points should be returned to initial state on skill remove', () => {
      const initialPoints = root.points;

      root.buySkill(MOCKED_SKILL.id);
      root.removeSkill(MOCKED_SKILL.id);

      expect(root.points).toBe(initialPoints);
   });
   test('Root must fail purchasing skill if there are no available points', () => {
      // Re-assert ========================================
      const INITIAL_POINTS = 8;
      const COMMON_SKILL_PRICE = 5;

      const MOCKED_SKILL_3: IMockedSkill = {
         ...MOCKED_SKILL_2,
         price: [COMMON_SKILL_PRICE, 10],
      }

      const tree = new BasicTree(MOCKED_TREE.id, MOCKED_TREE.name);   
      const subtree = new BasicSubtree(MOCKED_SUBTREE.id, MOCKED_SUBTREE.name);
      const skill = addSkill(subtree, MOCKED_SKILL_3);
   
      tree.addSubtree(subtree);
      
      // Assert 8 initial points for Root
      root = new Root(INITIAL_POINTS)
         .setTree(tree)
      // ==================================================

      root.buySkill(skill.id); // Must be successfully bought as skills price is 5, while we have 8 points
      root.buySkill(skill.id); // Now, Root has only 3 points (8 - 5), so we can't afford to buy it
      
      expect(root.points).toBe(INITIAL_POINTS - COMMON_SKILL_PRICE);
      expect(skill.getStatus()).toBe(SkillStatusEnum.BASIC);
   })
})