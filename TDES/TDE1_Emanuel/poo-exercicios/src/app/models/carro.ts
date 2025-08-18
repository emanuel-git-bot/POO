export class Carro {
	constructor(
		public marca: string,
		public modelo: string,
		public ano: number
	) {}

	detalhes(): string {
		return `${this.marca} ${this.modelo} (${this.ano})`;
	}
} 