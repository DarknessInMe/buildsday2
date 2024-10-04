export interface IEntityParent {
   verifySkillPurchase: (price: number, pointsToAccess: number) => boolean;
   verifySkillDeletion: (tier: number, price: number, skillId: string) => boolean;
   onBuySkill: (price: number) => void;
   onRemoveSkill: (price: number) => void;
}

export interface IGlobalContext {
   getIsInfamyBonusActive: () => boolean;
}

export interface IComponentWithContext {
   context: IGlobalContext | null,
   setContext: (context: IGlobalContext | null) => this,
}

export interface IComponentWithParent {
   parent: IEntityParent | null,
   setParent: (parent: IEntityParent | null) => this,
}