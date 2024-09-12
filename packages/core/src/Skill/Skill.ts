import { ISkill, ISkillSerialized, ISkillParent } from './interfaces';
import { SkillPriceType, SkillDescriptionType, SkillPointsToAccessType } from './types';
import { SkillStatusEnum } from './enums';

const STATUS_WEIGHT_MAP = {
    [SkillStatusEnum.NULL]: -1,
    [SkillStatusEnum.BASIC]: 0,
    [SkillStatusEnum.ACED]: 1,
};

/**
 * TODO: 
 * 1. Add JSDoc
 */
export class Skill implements ISkill {
    private status: SkillStatusEnum = SkillStatusEnum.NULL;

    constructor(
        public id: string,
        public name: string,
        public price: SkillPriceType,
        public description: SkillDescriptionType,
        private pointsToAccess: SkillPointsToAccessType,
        public parent: ISkillParent,
    ) {}

    private changeStatus(status: SkillStatusEnum) {
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

    public getPriceByStatus(status: SkillStatusEnum) {
        if (status === SkillStatusEnum.NULL) {
            return 0;
        };

        return this.price[SkillStatusEnum.BASIC === status ? 0 : 1];
    }

    private getStatusByWeight(weight: number): SkillStatusEnum {
        for (const statusKey in STATUS_WEIGHT_MAP) {
            if (STATUS_WEIGHT_MAP[statusKey] === weight) {
                return statusKey as SkillStatusEnum;
            }
        }
        console.error(`Could not get Skill status by weight for ${this.id}`);
        return SkillStatusEnum.NULL;
    }

    public buySkill(isInfamyBonus: boolean) {
        if (this.status === SkillStatusEnum.ACED) {
            console.error('Unexpected error happened. Cannot buy already aced skill')
            return null;
        }

        if (!this.parent.validateSkillPoints(this.getPointsToAccess(isInfamyBonus))) {
            return null;
        }

        const newStatus = this.getStatusByWeight(STATUS_WEIGHT_MAP[this.status] + 1);
        const skillPrice = this.getPriceByStatus(newStatus)

        this.changeStatus(newStatus);
        this.parent.onBuySkill(skillPrice);

        return skillPrice;
    }

    public removeSkill() {
        if (this.status === SkillStatusEnum.NULL) {
            console.error('Unexpected error happened. Cannot remove unbought skill')
            return null;
        }

        const skillPrice = this.getPriceByStatus(this.status)
        const newStatus = this.getStatusByWeight(STATUS_WEIGHT_MAP[this.status] - 1);

        this.changeStatus(newStatus);
        this.parent.onRemoveSkill(skillPrice);

        return skillPrice;
    }
}