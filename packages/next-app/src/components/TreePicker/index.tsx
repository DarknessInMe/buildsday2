'use client';

import { useMemo } from 'react';
import { useBuilderContext } from '@/context/BuilderContext';
import { TREE_IDS_ENUM } from '@buildsday2/decorated-core';
import { TabBar, TabButton } from '@/components/Tabs';

export const TreePicker = () => {
	const { rootRef, changeCurrentTree, builderState } = useBuilderContext();

	const treePicker = useMemo(() => {
		return [...rootRef.current.getTrees().values()].map((tree) => ({
			id: tree.id as TREE_IDS_ENUM,
			name: tree.name,
		}));
	}, []);

	return (
		<TabBar>
			{treePicker.map(({ id, name }) => (
				<TabButton
					key={id}
					onClick={() => changeCurrentTree(id)}
					isActive={builderState.currentTreeId === id}>
					{name}
				</TabButton>
			))}
		</TabBar>
	);
};
