import { Root, MainStructure, Modifier } from '@buildsday2/core';
import { MastermindTree, EnforcerTree, TechnicianTree, GhostTree, FugitiveTree } from '../Trees';
import { INITIAL_POINTS_COUNT } from '../shared/constants';

export class RootFactory {
	public getRoot() {
		const modifier = new Modifier();
		const structure = new MainStructure(INITIAL_POINTS_COUNT, modifier);

		return new Root(structure, modifier)
			.addTree(new MastermindTree(modifier))
			.addTree(new EnforcerTree(modifier))
			.addTree(new TechnicianTree(modifier))
			.addTree(new GhostTree(modifier))
			.addTree(new FugitiveTree(modifier));
	}
}
