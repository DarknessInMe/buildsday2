import { IModifier, SkillBuilder, Subtree } from '@buildsday2/core';
import { SUBTREE_IDS_ENUM, SKILL_IDS_ENUM, TIERS_ENUM } from '../shared/enums';
import { SKILL_PRICE_BY_TIER, SKILL_POINTS_TO_ACCESS_BY_TIER } from '../shared/constants';

export class ControllerSubtree extends Subtree {
	constructor(modifier: IModifier) {
		super(SUBTREE_IDS_ENUM.CONTROLLER, 'Controller', modifier);

		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.HOSTAGE_TAKER, modifier)
				.setName('Hostage Taker')
				.setTier(TIERS_ENUM.FOURTH)
				.setDescription([
					'Having at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.',
					'Having at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FOURTH])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FOURTH])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.STOCKHOLM_SYNDROME, modifier)
				.setName('Stockholm Syndrome')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Civilians are intimidated by the noise you make and remain intimidated 50% longer.',
					'Your hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.PARTNERS_IN_CRIME, modifier)
				.setName('Partners In Crime')
				.setTier(TIERS_ENUM.THIRD)
				.setDescription([
					'Having a converted enemy increases your movement speed by 10%. Your converted enemy takes 45% less damage.',
					'Having a converted enemy increases your health by 30%. Your converted enemy takes an additional 54% less damage.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.THIRD])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.THIRD])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.CONFIDENT, modifier)
				.setName('Confident')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'The power and range of your intimidation is increased by 50%.',
					'You can now have 2 converted enemies at the same time.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.JOKER, modifier)
				.setName('Joker')
				.setTier(TIERS_ENUM.SECOND)
				.setDescription([
					'You can convert a non-special enemy to fight on your side. This cannot be done during stealth and the enemy must have surrendered in order for you to convert them. You can only convert one non-special enemy at a time.',
					'Your converted enemy deal 35% more damage. The time taken to convert an enemy is reduced by 65%.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.SECOND])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.SECOND])
				.build(),
		);
		this.addChild(
			new SkillBuilder(SKILL_IDS_ENUM.FORCED_FRIENDSHIP, modifier)
				.setName('Forced Friendship')
				.setTier(TIERS_ENUM.FIRST)
				.setDescription([
					'Increases your supply of cable ties by 4. You can cable tie hostages 75% faster.',
					'You and your crew gain 0.5 damage absorption for each hostage you have. This effect stacks with up to a maximum of 8 hostages. Note: This skill does not stack with other players Forced Friendship skills.',
				])
				.setPrice(SKILL_PRICE_BY_TIER[TIERS_ENUM.FIRST])
				.setUnlockPoints(SKILL_POINTS_TO_ACCESS_BY_TIER[TIERS_ENUM.FIRST])
				.build(),
		);
	}
}
