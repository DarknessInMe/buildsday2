import { ITree } from 'src/Tree/redesign';
import { IModifier } from './interfaces';
import { MainStructure } from './Structure';

export class Root {
	private structure = new MainStructure();

	constructor(private modifier: IModifier) {}

	public addTree(tree: ITree) {
		this.structure.addTree(tree);

		return this;
	}
}
