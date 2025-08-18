export class Pessoa {
	constructor(
		public nome: string,
		public idade: number
	) {}

	cumprimentar(): string {
		return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
	}
} 