import { Funcionario } from '../models/funcionario';

export class SalarioCalculator {
	calcularSalarioComBonus(funcionario: Funcionario, percentualBonus: number): number {
		if (percentualBonus <= 0) return funcionario.salario;
		return funcionario.salario * (1 + percentualBonus / 100);
	}
} 