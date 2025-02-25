import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class BrawlerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.BRAWLER, 'Brawler', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FRENZY, modifier)
				.setName('Frenzy')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'You only get 30% of your maximum health and cannot heal above it but you take 10% less damage and healing received is reduced by 75%.',
					'Damage taken is now reduced by 25% and healing received is reduced by 0%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.COUNTERSTRIKE, modifier)
				.setName('Counterstrike')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'When charging your melee weapon you will counterattack enemies that try to strike you, knocking them down. The knockdown does not deal any damage.',
					'You gain the ability to counter attack cloakers and their kicks.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.BERSERKER, modifier)
				.setName('Berserker')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'The lower your health, the more damage you do. When your health is below 50%, you will do up to 250% more melee and saw damage.',
					'The lower your health, the more damage you do. When your health is below 50%, you will do up to 100% more damage with ranged weapons as well.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.BLOODTHIRST, modifier)
				.setName('Bloodthirst')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Every kill you get will increase your next melee attack damage by 100%, up to a maximum of 1600%. This effect gets reset when you kill an enemy with a melee attack.',
					'Whenever you kill an enemy with a melee attack, you will gain a 50% increase in reload speed for 10 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.PUMPING_IRON, modifier)
				.setName('Pumping Iron')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your melee attacks against non-special enemies do 100% more damage.',
					'Your melee attacks against special enemies do 100% more damage.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.MARTIAL_ARTS, modifier)
				.setName('Martial Arts')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'You take 50% less damage from all melee attacks. Because of training.',
					'You are 50% more likely to knock down enemies with a melee strike.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
