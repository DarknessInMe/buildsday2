'use client';

import { useMemo } from 'react';
import { useBuilderContext } from '@/context/BuilderContext';
import clsx from 'clsx';
import { TREE_IDS_ENUM } from '@buildsday2/decorated-core';

export const TreePicker = () => {
	const { rootRef, changeCurrentTree, builderState } = useBuilderContext();

	const treePicker = useMemo(() => {
		return [...rootRef.current.getTrees().values()].map((tree) => ({
			id: tree.id as TREE_IDS_ENUM,
			name: tree.name,
		}));
	}, []);

	return (
		<div className="flex border-0 border-b-2 border-b-white ">
			{treePicker.map(({ id, name }) => (
				<button
					key={id}
					onClick={() => changeCurrentTree(id)}
					className={clsx(
						'text-xl p-2',
						builderState.currentTreeId === id
							? 'bg-white text-black'
							: 'bg-transparent text-white',
					)}>
					{name}
				</button>
			))}
		</div>
	);
};
