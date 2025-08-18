export abstract class Veiculo {
	abstract mover(): string;
}

export class CarroVeiculo extends Veiculo {
	mover(): string {
		return 'O carro se move com motor e rodas.';
	}
}

export class Bicicleta extends Veiculo {
	mover(): string {
		return 'A bicicleta se move com pedaladas.';
	}
} 