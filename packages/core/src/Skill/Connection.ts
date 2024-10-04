import { SkillPointsToAccessType } from './types';

export class Connection {
   constructor(
      protected tier: number,
      protected pointsToAccess: SkillPointsToAccessType,
   ) {}

   public getPointsToAccess(isInfamyBonus: boolean = false) {
      return this.pointsToAccess[isInfamyBonus ? 0 : 1]
   }

   public getTier() {
      return this.tier;
   }
}