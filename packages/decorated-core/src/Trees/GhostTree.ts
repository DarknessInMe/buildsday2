import { IModifier, Tree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { ShinobiSubtree, ArtfulDodgerSubtree, SilentKillerSubtree } from '../Subtrees';

export class GhostTree extends Tree {
	constructor(modifier: IModifier) {
		super(TREE_IDS_ENUM.GHOST, 'Ghost', modifier);

		this.addChild(new ShinobiSubtree(modifier));
		this.addChild(new ArtfulDodgerSubtree(modifier));
		this.addChild(new SilentKillerSubtree(modifier));
	}
}
