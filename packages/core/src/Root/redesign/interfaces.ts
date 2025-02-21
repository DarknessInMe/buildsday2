export interface IModifier {
	getRequiredSkillPrice: (price: [number, number]) => number;
}

export interface ISerializer {}
