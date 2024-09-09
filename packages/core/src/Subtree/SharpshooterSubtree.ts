import { SKILL_PRICE_TUPLE } from '../shared/constants';
import { SkillIdsEnum, SubtreeIdsEnum } from '../shared/enums';
import { BasicSubtree } from './BasicSubtree';

export class SharpshooterSubtree extends BasicSubtree {
    constructor() {
        super(SubtreeIdsEnum.SHARPSHOOTER);

        this.addSkill(
            SkillIdsEnum.GRAZE,
            SKILL_PRICE_TUPLE.FOURTH_LEVEL,
            [
                'Snipers that hit their target deal 20% of the damage dealt in a 100cm radius around the bullet trajectory.',
                'If a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon\'s damage instead of 20%.'
            ],
            [16, 18],
        );
        this.addSkill(
            SkillIdsEnum.AMMO_EFFICIENCY,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Getting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot mode.',
                'The amount of headshots required is reduced to 2.',
            ],
            [3, 3],
        );
        this.addSkill(
            SkillIdsEnum.AGGRESSIVE_RELOAD,
            SKILL_PRICE_TUPLE.THIRD_LEVEL,
            [
                'Increases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.',
                'Any killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
            ],
            [3, 3],
        )
        this.addSkill(
            SkillIdsEnum.RIFLEMAN,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'Your snap to zoom is 100% faster with all weapons. Your movement speed is unhindered while using steel sight.', 
                'Your weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.MARKSMAN,
            SKILL_PRICE_TUPLE.SECOND_LEVEL,
            [
                'You gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.', 
                'You gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
            ],
            [1, 1],
        )
        this.addSkill(
            SkillIdsEnum.STABLE_SHOT,
            SKILL_PRICE_TUPLE.FIRST_LEVEL,
            [
                'You gain 8 weapon stability.', 
                'You gain 16 weapon accuracy while standing still.'
            ],
            [0, 0],
        )
    }
}