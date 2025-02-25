import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ShinobiSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.SHINOBI, 'Shinobi', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.ECM_SPECIALIST, modifier)
				.setName('ECM Specialist')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'You can now place 2 ECM jammers instead of just one.',
					'The ECM jammer duration is increased by an additional 25% and the ECM feedback duration lasts 25% longer. Pagers are delayed by the ECM jammer.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.NIMBLE, modifier)
				.setName('Nimble')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'You gain the ability to disable 1 camera from detecting you and your crew. Effect lasts for 25 seconds.',
					'You lockpick 100% faster. You also gain the ability to lockpick safes.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.ECM_OVERDRIVE, modifier)
				.setName('ECM Overdrive')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Your ECM jammer and feedback duration is increased by 25%.',
					'Your ECM jammer can now also be used to open certain electronic doors.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.CLEANER, modifier)
				.setName('Cleaner')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain 1 additional body bag in your inventory. Also increases the body bag inventory space to 3 from 2.',
					'You gain the ability to place 2 body bag cases.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.SIXTH_SENSE, modifier)
				.setName('Sixth Sense')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You gain the ability to automatically mark enemies within a 10 meter radius around you after standing still for 3.5 seconds while in stealth.',
					'You gain access to all insider assets. Cleaning costs after killing a civilian is reduced by 75%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.CHAMELEON, modifier)
				.setName('Chameleon')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Increases the time before you start getting detected by 25% while in casing mode. You can also mark enemies while in casing mode.',
					'You can pick up items while in casing mode. You also gain 30% more value to items and cash that you pick up.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
