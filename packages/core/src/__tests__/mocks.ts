import type { Connection } from '../Skill';
import { IMockedSkill, IMockedSubtree, IMockedTree } from './interfaces';

export const MOCKED_SKILL: IMockedSkill = {
   id: 'SKILL_ID',
   name: 'Testing Skill',
   price: [1, 2],
   tier: 1,
   description: ['Basic version', 'Aced version'],
   pointsToAccess: [0, 0],
};

export const MOCKED_SUBTREE: IMockedSubtree = {
   id: 'SUBTREE_ID',
   name: 'Testing Subtree',
}

export const MOCKED_TREE: IMockedTree = {
   id: 'TREE_ID',
   name: 'Testing Tree',
}