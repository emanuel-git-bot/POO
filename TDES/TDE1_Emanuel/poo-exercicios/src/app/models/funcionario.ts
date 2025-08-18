export class Funcionario {
	constructor(
		public nome: string,
		public salario: number
	) {}
}

export class Gerente extends Funcionario {
	constructor(
		nome: string,
		salario: number,
		public departamento: string
	) {
		super(nome, salario);
	}

	aumentarSalario(percentual: number): void {
		if (percentual <= 0) return;
		this.salario += this.salario * (percentual / 100);
	}
} 