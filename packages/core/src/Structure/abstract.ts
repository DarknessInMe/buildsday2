import { IStructuredEntity } from './interfaces';

export abstract class AbstractStructure implements IStructuredEntity {
	public abstract parent: IStructuredEntity['parent'];
	public abstract children: IStructuredEntity['children'];
	public abstract id: IStructuredEntity['id'];

	public query(id: string) {
		if (!this.children) {
			return null;
		}

		return Array.from(this.children.entries()).find(([entityId, entity]) => {
			if (entityId === id) {
				return entity;
			}

			return entity.query(id);
		})[1];
	}

	public setParent(parent: IStructuredEntity) {
		this.parent = parent;

		return this;
	}
}
