export interface IStructuredEntity {
	children: Map<string, IStructuredEntity> | null;
	parent: IStructuredEntity | null;
	setParent: (parent: IStructuredEntity) => IStructuredEntity;
	query: (id: string) => IStructuredEntity | null;
	id: string;
}
