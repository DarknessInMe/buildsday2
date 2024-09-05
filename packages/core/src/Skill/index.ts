import { SkillIdsEnum } from '../shared/enums';
import { SkillStatusType } from '../shared/types';

interface ISkillStaticData {
    id: SkillIdsEnum,
    pointsToAccess: [number, number],
    name: string,
    description: [string, string],
    price: [number, number],
}

export interface ISkill extends ISkillStaticData{
    buySkill: () => number,
    removeSkill: () => number,
    getStatus: () => SkillStatusType,
    serialize: () => ISkillSerialized,
}

export interface ISkillSerialized extends ISkillStaticData{
    status: SkillStatusType,
}

export class Skill implements ISkill {
    private status: SkillStatusType = -1;

    constructor(
        public id: SkillIdsEnum,
        public name: string,
        public price: [number, number],
        public description: [string, string],
        public pointsToAccess: [number, number],
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

    public buySkill() {
        if (this.status === 1) {
            throw new Error('Unexpected error happened. Cannot buy already aced skill')
        }

        this.changeStatus(this.status + 1 as SkillStatusType);

        return this.price[0];
    }

    public removeSkill() {
        if (this.status === -1) {
            throw new Error('Unexpected error happened. Cannot remove unbought skill')
        }

        this.changeStatus(this.status - 1 as SkillStatusType);

        return this.price[0];
    }
}