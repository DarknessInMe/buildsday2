import { BuilderType } from '@/shared/interfaces';
import { ITreeState } from './typing';
import { SKILL_IDS_ENUM, SUBTREE_IDS_ENUM, TREE_IDS_ENUM } from '@buildsday2/decorated-core';

export const buildTreeState = (root: BuilderType, currentTreeId: string): ITreeState => {
	const treeEntity = root.getTrees().get(currentTreeId)!;

	return {
		id: treeEntity.id as TREE_IDS_ENUM,
		name: treeEntity.name,
		subtrees: [...treeEntity.children.values()].map((subtree) => ({
			id: subtree.id as SUBTREE_IDS_ENUM,
			name: subtree.name,
			points: subtree.getInvestedPoints(),
			skills: [...subtree.children.values()].map((skill) => ({
				id: skill.id as SKILL_IDS_ENUM,
				name: skill.name,
				description: skill.description,
				price: skill.getPrice(skill.getHigherStatus()),
				status: skill.getStatus(),
			})),
		})),
	};
};
