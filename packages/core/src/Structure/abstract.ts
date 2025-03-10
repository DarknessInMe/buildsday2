import { IStructuredEntity } from './interfaces';

export abstract class AbstractStructure<Parent, Children>
	implements IStructuredEntity<Parent, Children>
{
	public abstract parent: Parent | null;
	public abstract children: Children extends null ? null : Map<string, Children>;
	public abstract id: string;

	public abstract cleanUp(): void;

	public query(id: string): IStructuredEntity {
		if (this.id === id) {
			return this as IStructuredEntity;
		}

		if (!this.children) {
			return null;
		}

		for (const entity of [...this.children.values()] as IStructuredEntity[]) {
			const foundEntity = entity.query(id);

			if (foundEntity) {
				return foundEntity;
			}
		}

		return null;
	}

	public setParent(parent: Parent) {
		this.parent = parent;

		return this;
	}

	public addChild(child: Children) {
		if (this.children) {
			const typedChild = child as IStructuredEntity;
			this.children.set(typedChild.id, typedChild.setParent(this) as Children);
		}
		return this;
	}
}
