import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class SharpshooterSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.SHARPSHOOTER, 'Sharpshooter', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.GRAZE, modifier)
				.setName('Graze')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'Snipers that hit their target deal 20% of the damage dealt in a 100cm radius around the bullet trajectory.',
					"If a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon's damage instead of 20%.",
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.AMMO_EFFICIENCY, modifier)
				.setName('Ammo Efficiency')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Getting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot mode.',
					'The amount of headshots required is reduced to 2.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.AGGRESSIVE_RELOAD, modifier)
				.setName('Aggressive Reload')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Increases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.',
					'Any killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.RIFLEMAN, modifier)
				.setName('Rifleman')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your snap to zoom is 100% faster with all weapons. Your movement speed is unhindered while using steel sight.',
					'Your weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.MARKSMAN, modifier)
				.setName('Marksman')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
					'You gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.STABLE_SHOT, modifier)
				.setName('Stable Shot')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'You gain 8 weapon stability.',
					'You gain 16 weapon accuracy while standing still.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
