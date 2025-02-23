import { ITree } from 'src/Tree/redesign';
import { IModifier } from './interfaces';
import { IMainStructure, IStructureSerialized } from 'src/Structure';

export class Root {
	constructor(protected structure: IMainStructure, protected modifier: IModifier) {}

	public addTree(tree: ITree) {
		this.structure.addChild(tree);

		return this;
	}

	public serialize() {
		return this.structure.serialize();
	}

	public deserialize(deserialized: IStructureSerialized) {
		return this.structure.deserialize(deserialized);
	}

	public getPoints() {
		return this.structure.getTotalPoints();
	}

	public toggleDiscountStatus() {
		return this.modifier.setDiscountStatus(!this.modifier.getDiscountStatus());
	}

	public getDiscountStatus() {
		return this.modifier.getDiscountStatus();
	}

	public buySkill(id: string) {
		return this.structure.buy(id);
	}

	public removeSkill(id: string) {
		return this.structure.remove(id);
	}
}
