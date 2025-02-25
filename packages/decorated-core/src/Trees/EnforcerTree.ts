import { IModifier, Tree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { ShotgunnerSubtree, TankSubtree, AmmoSpecialistSubtree } from '../Subtrees';

export class EnforcerTree extends Tree {
	constructor(modifier: IModifier) {
		super(TREE_IDS_ENUM.ENFORCER, 'Enforcer', modifier);

		this.addChild(new ShotgunnerSubtree(modifier));
		this.addChild(new TankSubtree(modifier));
		this.addChild(new AmmoSpecialistSubtree(modifier));
	}
}
