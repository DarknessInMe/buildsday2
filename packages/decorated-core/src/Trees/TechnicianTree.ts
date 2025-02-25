import { IModifier, Tree } from '@buildsday2/core';
import { TREE_IDS_ENUM } from '../shared/enums';
import { EngineerSubtree, BreacherSubtree, OppressorSubtree } from '../Subtrees';

export class TechnicianTree extends Tree {
	constructor(modifier: IModifier) {
		super(TREE_IDS_ENUM.TECHNICIAN, 'Technician', modifier);

		this.addChild(new EngineerSubtree(modifier));
		this.addChild(new BreacherSubtree(modifier));
		this.addChild(new OppressorSubtree(modifier));
	}
}
