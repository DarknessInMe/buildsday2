import { IModifier, Tree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { MedicSubtree, ControllerSubtree, SharpshooterSubtree } from '../Subtrees';

export class MastermindTree extends Tree {
	constructor(modifier: IModifier) {
		super(TREE_IDS_ENUM.MASTERMIND, 'Mastermind', modifier);

		this.addChild(new MedicSubtree(modifier));
		this.addChild(new ControllerSubtree(modifier));
		this.addChild(new SharpshooterSubtree(modifier));
	}
}
