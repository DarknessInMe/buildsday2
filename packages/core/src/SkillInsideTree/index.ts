import { ISkillEntity } from '../SkillEntity';
import { SkillStatusType } from '../shared/types';

export interface ISkillInsideTree {
    skill: ISkillEntity,
    pointsToAccess: [number, number],
    status: SkillStatusType,
    changeStatus: (status: SkillStatusType) => void,
}

export class SkillInsideTree implements ISkillInsideTree {
    public status: SkillStatusType = -1;

    constructor(
        public skill: ISkillEntity,
        public pointsToAccess: [number, number],
    ) {}

    public changeStatus(status: SkillStatusType) {
        this.status = status
    }
}