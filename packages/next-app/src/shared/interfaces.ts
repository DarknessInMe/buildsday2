import { RootFactory } from '@buildsday2/decorated-core';

export interface IBuildCard {
	id: string;
	name: string;
	description: string;
}

export interface NextPageProps<T extends object> {
	params: T;
}

export type BuilderType = ReturnType<RootFactory['getRoot']>;
