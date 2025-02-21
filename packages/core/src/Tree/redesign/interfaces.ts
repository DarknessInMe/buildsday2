import { IStructuredEntity } from 'src/Structure';
import { ISubtree } from 'src/Subtree/redesign';

export interface ITree extends IStructuredEntity {
	name: string;
	addSubtree: (subtree: ISubtree) => ITree;
}
