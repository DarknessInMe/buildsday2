import { IStructuredEntity } from './interfaces';

export abstract class AbstractStructure implements IStructuredEntity {
	public abstract parent: IStructuredEntity['parent'];
	public abstract children: IStructuredEntity['children'];
	public abstract id: IStructuredEntity['id'];

	public query(id: string) {
		if (!this.children) {
			return null;
		}

		return Array.from(this.children.values()).find((entity) => {
			if (entity.id === id) {
				return entity;
			}

			return entity.query(id);
		});
	}

	public setParent(parent: IStructuredEntity) {
		this.parent = parent;

		return this;
	}

	public addChild(child: IStructuredEntity) {
		if (this.children) {
			this.children.set(child.id, child);
		}
		return this;
	}
}
