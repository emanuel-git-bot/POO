declare module '*.js' {
	const value: any;
	export default value;
	export const Calculadora: any;
}

declare module '/assets/modules/calculadora.js' {
	export class Calculadora {
		somar(a: number, b: number): number;
		subtrair(a: number, b: number): number;
		multiplicar(a: number, b: number): number;
		dividir(a: number, b: number): number;
	}
}

declare module '/assets/modules/carro.js' {
	export default class Carro {
		constructor(marca: string, modelo: string, ano: number);
		detalhes(): string;
	}
} 