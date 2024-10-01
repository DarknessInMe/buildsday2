export interface IEntityParent {
   verifySkillPurchase: (price: number, pointsToAccess: number) => boolean;
   onBuySkill: (price: number) => void;
   onRemoveSkill: (price: number) => void;
}