export class Calculadora {
	somar(a, b) { return a + b; }
	subtrair(a, b) { return a - b; }
	multiplicar(a, b) { return a * b; }
	dividir(a, b) { return b === 0 ? NaN : a / b; }
} 