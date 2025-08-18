export abstract class FormaGeometrica {
	abstract calcularArea(): number;
}

export class Quadrado extends FormaGeometrica {
	constructor(public lado: number) { super(); }
	calcularArea(): number {
		return this.lado * this.lado;
	}
}

export class Circulo extends FormaGeometrica {
	constructor(public raio: number) { super(); }
	calcularArea(): number {
		return Math.PI * this.raio * this.raio;
	}
} 