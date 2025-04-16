'use client';

import { useState, memo } from 'react';
import { TabBar, TabButton } from '@/components/Tabs';
import { SkillTab } from './SkillTab';
import { MetaTab } from './MetaTab';

interface ITab {
	title: string;
	index: number;
}

const TABS: ITab[] = [
	{
		title: 'Skill',
		index: 0,
	},
	{
		title: 'Meta',
		index: 1,
	},
];

export const TreeSidebar = memo(() => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	return (
		<div>
			<TabBar>
				{TABS.map((tab) => (
					<TabButton
						key={`sidebar-tab-${tab.index}`}
						isActive={tab.index === currentTabIndex}
						onClick={() => setCurrentTabIndex(tab.index)}>
						{tab.title}
					</TabButton>
				))}
			</TabBar>
			{currentTabIndex === 0 && <SkillTab />}
			{currentTabIndex === 1 && <MetaTab />}
		</div>
	);
});

TreeSidebar.displayName = 'TreeSidebar';
