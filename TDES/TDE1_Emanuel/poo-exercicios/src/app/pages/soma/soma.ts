import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-soma',
  imports: [],
  template: `
    <h2>Soma</h2>
    <form (submit)="onSomar($event)">
      <input type="number" [value]="a()" (input)="a.set(+$any($event.target).value)" placeholder="A" />
      <input type="number" [value]="b()" (input)="b.set(+$any($event.target).value)" placeholder="B" />
      <button type="submit">Somar</button>
    </form>
    <p>Resultado (TS): {{ resultadoTS() }}</p>
    <p>Resultado (JS módulo): {{ resultadoJS() }}</p>
  `,
  styles: ``
})
export class Soma {
  a = signal(0);
  b = signal(0);
  resultadoTS = signal(0);
  resultadoJS = signal(0);

  async onSomar(event: Event) {
    event.preventDefault();
    const somaTS = this.a() + this.b();
    this.resultadoTS.set(somaTS);

    const { Calculadora } = await import(/* @vite-ignore */ `../../../assets/modules/calculadora.js`);
    const calc = new Calculadora();
    this.resultadoJS.set(calc.somar(this.a(), this.b()));
  }
}
