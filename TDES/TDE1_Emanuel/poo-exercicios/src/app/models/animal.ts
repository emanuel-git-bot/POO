export class Animal {
	constructor(
		public nome: string,
		public tipo: string
	) {}

	emitirSom(): string {
		return `${this.nome} fez um som.`;
	}
}

export class Gato extends Animal {
	constructor(nome: string) {
		super(nome, 'Gato');
	}

	override emitirSom(): string {
		return 'Miau!';
	}
} 