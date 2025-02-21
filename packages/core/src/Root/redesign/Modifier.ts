import { IModifier } from './interfaces';

export class Modifier implements IModifier {
	private isActivePointsDiscount: boolean = false;

	public setDiscountStatus(status: boolean) {
		this.isActivePointsDiscount = status;
	}

	public getDiscountStatus() {
		return this.isActivePointsDiscount;
	}

	public getUnlockPoints(pointsToAccess: [number, number]) {
		return this.isActivePointsDiscount ? pointsToAccess[0] : pointsToAccess[1];
	}
}
