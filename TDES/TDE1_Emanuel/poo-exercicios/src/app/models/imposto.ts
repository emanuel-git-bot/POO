export abstract class Imposto {
	abstract calcularImposto(valor: number): number;
}

export class ImpostoRenda extends Imposto {
	calcularImposto(valor: number): number {
		// Exemplo simples: 15%
		return valor * 0.15;
	}
}

export class ImpostoServico extends Imposto {
	calcularImposto(valor: number): number {
		// Exemplo simples: 5%
		return valor * 0.05;
	}
} 