export class Produto {
	private _preco: number;

	constructor(
		public nome: string,
		preco: number
	) {
		this._preco = Math.max(0, preco);
	}

	get preco(): number {
		return this._preco;
	}

	set preco(valor: number) {
		this._preco = Math.max(0, valor);
	}

	aplicarDesconto(percentual: number): void {
		if (percentual <= 0) return;
		this._preco = Math.max(0, this._preco * (1 - percentual / 100));
	}
} 