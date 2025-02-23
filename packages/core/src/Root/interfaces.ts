export interface IModifier {
	getUnlockPoints: (unlockPoints: [number, number]) => number;
	getDiscountStatus: () => boolean;
	setDiscountStatus: (status: boolean) => void;
}
