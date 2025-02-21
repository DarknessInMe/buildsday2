import { ITree } from 'src/Tree/redesign';
import { IModifier } from './interfaces';
import { IMainStructure } from 'src/Structure';

export class Root {
	constructor(protected structure: IMainStructure, protected modifier: IModifier) {}

	public addTree(tree: ITree) {
		this.structure.addTree(tree);

		return this;
	}
}
