import { SkillIdsEnum } from '../shared/enums';
import { ISkillEntity } from '../SkillEntity';
import { SkillStatusType } from '../shared/types';

export interface ISkillInsideTree {
    data: ISkillEntity,
    pointsToAccess: [number, number],
    buySkill: () => number,
    removeSkill: () => number,
    getStatus: () => SkillStatusType,
    serialize: () => ISkillSerialized,
}

export interface ISkillSerialized {
    id: SkillIdsEnum,
    status: SkillStatusType,
    pointsToAccess: [number, number],
    name: string,
    description: [string, string],
    price: [number, number],
}

export class SkillInsideTree implements ISkillInsideTree {
    private status: SkillStatusType = -1;

    constructor(
        public data: ISkillEntity,
        public pointsToAccess: [number, number],
    ) {}

    private changeStatus(status: SkillStatusType) {
        this.status = status
    }

    public serialize(): ISkillSerialized {
        return {
            id: this.data.id,
            status: this.getStatus(),
            pointsToAccess: this.pointsToAccess,
            name: this.data.name,
            description: this.data.description,
            price: this.data.price,
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

        return this.data.price[0];
    }

    public removeSkill() {
        if (this.status === -1) {
            throw new Error('Unexpected error happened. Cannot remove unbought skill')
        }

        this.changeStatus(this.status - 1 as SkillStatusType);

        return this.data.price[0];
    }
}