import { IModifier, Tree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { GunslingerSubtree, RevenantSubtree, BrawlerSubtree } from '../Subtrees';

export class FugitiveTree extends Tree {
	constructor(modifier: IModifier) {
		super(TREE_IDS_ENUM.FUGITIVE, 'Fugitive', modifier);

		this.addChild(new GunslingerSubtree(modifier));
		this.addChild(new RevenantSubtree(modifier));
		this.addChild(new BrawlerSubtree(modifier));
	}
}
