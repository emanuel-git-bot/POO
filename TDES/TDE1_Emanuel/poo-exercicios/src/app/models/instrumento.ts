export abstract class Instrumento {
	abstract tocar(): string;
}

export class Violao extends Instrumento {
	tocar(): string {
		return 'Som de violão: dedilhado suave.';
	}
}

export class Piano extends Instrumento {
	tocar(): string {
		return 'Som de piano: acordes harmônicos.';
	}
} 