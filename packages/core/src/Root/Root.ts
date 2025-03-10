import { ITree } from 'src/Tree';
import { IModifier } from './interfaces';
import { IMainStructure, IStructuredEntity, IStructureSerialized } from 'src/Structure';

export class Root {
	constructor(protected structure: IMainStructure, protected modifier: IModifier) {}

	public addTree(tree: ITree) {
		this.structure.addChild(tree);

		return this;
	}

	public getTrees() {
		return this.structure.children;
	}

	public cleanUp() {
		return this.structure.cleanUp();
	}

	public query(entityId: string): IStructuredEntity {
		return this.structure.query(entityId);
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
		const prevStatus = this.modifier.getDiscountStatus();

		if (prevStatus) {
			this.cleanUp();
		}
		return this.modifier.setDiscountStatus(!prevStatus);
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
