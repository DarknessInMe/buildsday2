'use client';

import { useMemo } from 'react';
import { useBuilderContext } from '@/context/BuilderContext';
import { ISkill, SkillStatusEnum } from '@buildsday2/core';

export const TreeSidebar = () => {
	const { builderState, rootRef } = useBuilderContext();

	const skillData = useMemo(() => {
		if (!builderState.selectedSkillId) {
			return null;
		}

		const skill = rootRef.current.query(builderState.selectedSkillId) as unknown as ISkill;

		return skill
			? {
					id: skill.id,
					name: skill.name,
					description: skill.description,
					basicPrice: skill.getPrice(SkillStatusEnum.BASIC),
					acedPrice: skill.getPrice(SkillStatusEnum.ACED),
					status: skill.getStatus(),
			  }
			: null;
	}, [builderState.selectedSkillId]);

	return (
		<div>
			<h2 className="mb-8">Points remaining: {builderState.totalPoints}</h2>
			<div className="mb-8">
				Tip: use Mouse Double Click to buy skill, Mouse Right Button Click to remove skill
			</div>
			{skillData ? (
				<div>
					<h3>Basic {skillData.basicPrice}</h3>
					<p>{skillData.description[0]}</p>
					<h3>Aced {skillData.acedPrice}</h3>
					<p>{skillData.description[1]}</p>
				</div>
			) : null}
		</div>
	);
};
