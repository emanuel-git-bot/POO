export interface DatabasePort<T> {
	findById(id: string): Promise<T | null>;
	save(entity: T): Promise<void>;
}

export class InMemoryDatabase<T extends { id: string }> implements DatabasePort<T> {
	private store = new Map<string, T>();

	async findById(id: string): Promise<T | null> {
		return this.store.get(id) ?? null;
	}

	async save(entity: T): Promise<void> {
		this.store.set(entity.id, entity);
	}
}

export class Repository<T extends { id: string }> {
	constructor(private readonly db: DatabasePort<T>) {}

	get(id: string): Promise<T | null> {
		return this.db.findById(id);
	}

	save(entity: T): Promise<void> {
		return this.db.save(entity);
	}
} 