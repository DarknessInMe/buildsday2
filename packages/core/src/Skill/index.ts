import { ISkillParent } from 'src/shared/interfaces';
import { SkillIdsEnum } from '../shared/enums';
import { SkillStatusType } from '../shared/types';

interface ISkillStaticData {
    id: SkillIdsEnum,
    name: string,
    description: [string, string],
    price: [number, number],
}

export interface ISkill extends ISkillStaticData{
    buySkill: (isInfamyBonus: boolean) => number | null,
    removeSkill: () => number | null,
    getPointsToAccess: (isInfamyBonus: boolean) => number,
    getStatus: () => SkillStatusType,
    serialize: () => ISkillSerialized,
}

export interface ISkillSerialized extends ISkillStaticData{
    status: SkillStatusType,
    pointsToAccess: [number, number],
}

export class Skill implements ISkill {
    private status: SkillStatusType = -1;

    constructor(
        public id: SkillIdsEnum,
        public name: string,
        public price: [number, number],
        public description: [string, string],
        private pointsToAccess: [number, number],
        public parent: ISkillParent,
    ) {}

    private changeStatus(status: SkillStatusType) {
        this.status = status
    }

    public serialize(): ISkillSerialized {
        return {
            id: this.id,
            status: this.getStatus(),
            pointsToAccess: this.pointsToAccess,
            name: this.name,
            description: this.description,
            price: this.price,
        }
    }

    public getStatus() {
        return this.status;
    }

    public getPointsToAccess(isInfamyBonus: boolean) {
        return this.pointsToAccess[isInfamyBonus ? 0 : 1]
    }

    public buySkill(isInfamyBonus: boolean) {
        if (this.status === 1) {
            console.error('Unexpected error happened. Cannot buy already aced skill')
            return null;
        }

        if (!this.parent.validateSkillPoints(this.getPointsToAccess(isInfamyBonus))) {
            return null;
        }

        const newStatus = this.status + 1;
        const skillPrice = this.price[newStatus];

        this.changeStatus(newStatus as SkillStatusType);
        this.parent.onBuySkill(skillPrice);

        return skillPrice;
    }

    public removeSkill() {
        if (this.status === -1) {
            console.error('Unexpected error happened. Cannot remove unbought skill')
            return null;
        }

        const prevStatus = this.status;
        const skillPrice = this.price[prevStatus];

        this.changeStatus(prevStatus - 1 as SkillStatusType);
        this.parent.onRemoveSkill(skillPrice);

        return skillPrice;
    }
}