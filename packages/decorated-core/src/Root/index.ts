import { Root as CoreRoot, MainStructure, Modifier } from '@buildsday2/core';
import { MastermindTree, EnforcerTree, TechnicianTree, GhostTree, FugitiveTree } from '../Trees';
import { INITIAL_POINTS_COUNT } from '../shared/constants';

const modifier = new Modifier();
const structure = new MainStructure(INITIAL_POINTS_COUNT, modifier);

export class Root extends CoreRoot {
	constructor() {
		super(structure, modifier);

		this.addTree(new MastermindTree(this.modifier));
		this.addTree(new EnforcerTree(this.modifier));
		this.addTree(new TechnicianTree(this.modifier));
		this.addTree(new GhostTree(this.modifier));
		this.addTree(new FugitiveTree(this.modifier));
	}
}
