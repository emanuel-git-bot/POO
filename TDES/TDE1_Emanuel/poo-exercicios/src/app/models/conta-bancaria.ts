export class ContaBancaria {
	constructor(
		public titular: string,
		private _saldo: number
	) {
		if (_saldo < 0) this._saldo = 0; else this._saldo = _saldo;
	}

	get saldo(): number {
		return this._saldo;
	}

	set saldo(valor: number) {
		this._saldo = Math.max(0, valor);
	}

	depositar(valor: number): void {
		if (valor > 0) this._saldo += valor;
	}

	sacar(valor: number): boolean {
		if (valor > 0 && this._saldo - valor >= 0) {
			this._saldo -= valor;
			return true;
		}
		return false;
	}
} 