'use client';

import { useMemo } from 'react';
import { useBuilderContext } from '@/context/BuilderContext';
import { ISkill, SkillStatusEnum } from '@buildsday2/core';

export const TreeSidebar = () => {
	const { builderState, rootRef, toggleInfamyBonus } = useBuilderContext();

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
			<h2 className="mb-2">Points remaining: {builderState.totalPoints}</h2>
			<div className="flex items-center mb-8">
				<input
					id="default-checkbox"
					type="checkbox"
					value=""
					checked={builderState.isInfamyBonus}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					onChange={toggleInfamyBonus}
				/>
				<label
					htmlFor="default-checkbox"
					className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
					Infamy bonus
				</label>
			</div>
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
