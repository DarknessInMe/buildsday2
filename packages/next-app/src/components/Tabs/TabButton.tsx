import React, { memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ITabButton {
	isActive: boolean;
	onClick: (event: React.MouseEvent) => void;
}

export const TabButton: React.FC<PropsWithChildren<ITabButton>> = memo(
	({ isActive, children, onClick }) => {
		return (
			<button
				onClick={onClick}
				className={clsx(
					'text-xl p-2',
					isActive ? 'bg-white text-black' : 'bg-transparent text-white',
				)}>
				{children}
			</button>
		);
	},
);

TabButton.displayName = 'TabButton';
