import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class MedicSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.MEDIC, 'Medic', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.INSPIRE, modifier)
				.setName('Inspire')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'You revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.',
					'There is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than once every 20 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.UPPERS, modifier)
				.setName('Uppers')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Adds 7 more First Aid Kits to your inventory.',
					'Adds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.COMBAT_DOCTOR, modifier)
				.setName('Combat Doctor')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You can now deploy 2 Doctor Bags instead of just one.',
					'Your doctor bags have 2 more charges.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.QUICK_FIX, modifier)
				.setName('Quick Fix')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Decreases your First Aid Kit and Doctor Bag deploy time by 50%.',
					'Crew members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.PAINKILLERS, modifier)
				.setName('Painkillers')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'Crew members you revive take 30% less damage for 5 seconds.',
					'The damage reduction is increased by an additional 50%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.COMBAT_MEDIC, modifier)
				.setName('Combat Medic')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'You gain a 30% damage reduction for 5 seconds both after and during reviving another player.',
					'Reviving a crew member gives them 30% more health.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
