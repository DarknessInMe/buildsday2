import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ArtfulDodgerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.ARTFUL_DODGER, 'Artful Dodger', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SNEAKY_BASTARD, modifier)
				.setName('Sneaky Bastard')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'You gain a 1% dodge chance for every 3 points of concealment under 35 up to 10%.',
					'You gain a 1% dodge chance for every 1 point of concealment under 35 up to 10%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.DIRE_NEED, modifier)
				.setName('Dire Need')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'When your armor breaks, the first shot on every enemy will cause that enemy to stagger. This effect ends when your armor recovers.',
					'The effect persists for 6 seconds after your armor has recovered.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SHOCKPROOF, modifier)
				.setName('Shockproof')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'When tased, the shock effect has a 30% chance to backfire on the Taser, knocking them back.',
					'When tased, you are able to free yourself from the taser interacting with it within 2 seconds of getting tased.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.PARKOUR, modifier)
				.setName('Parkour')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain 10% additional movement speed and 20% increased speed while climbing ladders.',
					'You gain the ability to sprint in any direction. Run and reload - you can reload your weapons while sprinting.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.INNER_POCKETS, modifier)
				.setName('Inner Pockets')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Increases the concealment of melee weapons by 2.',
					'Increases the concealment of all ballistic vests by 4.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.DUCK_AND_COVER, modifier)
				.setName('Duck And Cover')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Your stamina starts regenerating 25% earlier and 25% faster. You also sprint 25% faster.',
					'You have a 10% increased chance to dodge while sprinting. You gain 15% chance to dodge while ziplining.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
