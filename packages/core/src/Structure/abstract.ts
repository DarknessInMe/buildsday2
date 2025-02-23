import { IStructuredEntity } from './interfaces';

export abstract class AbstractStructure<Parent, Children>
	implements IStructuredEntity<Parent, Children>
{
	public abstract parent: Parent;
	public abstract children: Children extends null ? null : Map<string, Children>;
	public abstract id: string;

	public query(id: string): IStructuredEntity {
		if (!this.children) {
			return null;
		}

		return (
			([...this.children.values()] as IStructuredEntity[]).find((entity) => {
				if (entity.id === id) {
					return entity as IStructuredEntity;
				}

				return entity.query(id) as IStructuredEntity;
			}) ?? null
		);
	}

	public setParent(parent: Parent) {
		this.parent = parent;

		return this;
	}

	public addChild(child: Children) {
		if (this.children) {
			this.children.set((child as IStructuredEntity).id, child);
		}
		return this;
	}
}
