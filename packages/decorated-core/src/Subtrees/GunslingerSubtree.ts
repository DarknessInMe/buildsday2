import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class GunslingerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.GUNSLINGER, 'Gunslinger', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.TRIGGER_HAPPY, modifier)
				.setName('Trigger Happy')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'For every hit with a pistol you gain 120% damage boost that lasts for 2 seconds. Stacks up to 1 times.',
					'Increases the damage boost duration to 4 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.ONE_HANDED_TALENT, modifier)
				.setName('One Handed Talent')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'The base damage of all pistols is increased by 5.',
					'The base damage of all pistols is increased by an additional 10 damage.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.DESPERADO, modifier)
				.setName('Desperado')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Each successful pistol hit gives you a 10% increased accuracy bonus for 10 seconds and can stack 4 times.',
					'You reload all pistols 50% faster.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.GUN_NUT, modifier)
				.setName('Gun Nut')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Your pistol magazine sizes are increased by 5 bullets.',
					'You gain a 50% increased rate of fire with pistols.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.AKIMBO, modifier)
				.setName('Akimbo')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					"Your Akimbo weapons' stability penalty is reduced by 8.",
					"Your Akimbo weapons' stability penalty is reduced by an additional 8 and they also have a 50% increased ammo capacity.",
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.EQUILIBRIUM, modifier)
				.setName('Equilibrium')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Decreases the time it takes to draw and holster pistols by 33%.',
					'You gain a 8 weapon accuracy with pistols.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
