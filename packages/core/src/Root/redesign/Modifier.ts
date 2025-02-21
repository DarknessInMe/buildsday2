import { IModifier } from './interfaces';

export class Modifier implements IModifier {
	private isActivePointsDiscount: boolean = false;

	public setDiscountStatus(status: boolean) {
		this.isActivePointsDiscount = status;
	}

	public getDiscountStatus() {
		return this.isActivePointsDiscount;
	}

	public getRequiredSkillPrice(price: [number, number]) {
		return this.isActivePointsDiscount ? price[0] : price[1];
	}
}
