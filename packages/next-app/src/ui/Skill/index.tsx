'use client';

import { FC } from 'react';
import clsx from 'clsx';
import { SkillStatusEnum } from '@buildsday2/core';

interface ISkillProps {
	name: string;
	className?: string;
	status: SkillStatusEnum | null;
}

const getStylesByStatus = (status: SkillStatusEnum | null) => {
	switch (status) {
		case SkillStatusEnum.BASIC: {
			return 'bg-blue-900';
		}
		case SkillStatusEnum.ACED: {
			return 'bg-blue-600';
		}
		default: {
			return 'bg-blue-950/20';
		}
	}
};

export const Skill: FC<ISkillProps> = ({ name, className = '', status = null }) => {
	return (
		<div className={clsx('flex flex-col items-center', className)}>
			<div
				className={clsx(
					'size-16 rounded flex justify-center items-center',
					getStylesByStatus(status),
				)}>
				<div className="size-8 bg-white rounded-full" />
			</div>
			<p className="mt-1 text-center">{name}</p>
		</div>
	);
};
