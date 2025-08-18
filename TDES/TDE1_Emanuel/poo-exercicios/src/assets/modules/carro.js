export default class Carro {
	constructor(marca, modelo, ano) {
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
	}

	detalhes() {
		return `${this.marca} ${this.modelo} (${this.ano})`;
	}
} 