import { IStructuredEntity } from 'src/shared/interfaces';

export interface ITree extends IStructuredEntity {
	name: string;
	addSubtree: (subtree: any) => any;
}
