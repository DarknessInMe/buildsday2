import { SkillIdsEnum } from '../shared/enums';

export interface ISkillEntity {
    name: string;
    id: string;
    price: [number, number];
    description: [string, string];
}

export class SkillEntity implements ISkillEntity {
    constructor(
        public name: string,
        public id: SkillIdsEnum,
        public price: [number, number],
        public description: [string, string]
    ) {}
}