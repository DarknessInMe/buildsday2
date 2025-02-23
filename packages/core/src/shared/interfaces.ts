export interface ISerializableEntity<T> {
	serialize: () => T;
	deserialize: (entity: T) => void;
}
