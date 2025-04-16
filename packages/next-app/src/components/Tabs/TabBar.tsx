import React, { memo, PropsWithChildren } from 'react';

export const TabBar: React.FC<PropsWithChildren> = memo(({ children }) => {
	return <div className="flex border-0 border-b-2 border-b-white ">{children}</div>;
});

TabBar.displayName = 'TabBar';
