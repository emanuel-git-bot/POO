import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carro } from '../../models/carro';
import { Pessoa } from '../../models/pessoa';
import { Animal, Gato } from '../../models/animal';
import { Funcionario, Gerente } from '../../models/funcionario';
import { ContaBancaria } from '../../models/conta-bancaria';
import { Produto } from '../../models/produto';
import { Veiculo, CarroVeiculo, Bicicleta } from '../../models/veiculo';
import { Instrumento, Violao, Piano } from '../../models/instrumento';
import { Quadrado, Circulo } from '../../models/formas';
import { ImpostoRenda, ImpostoServico } from '../../models/imposto';
import { Aluno, Turma } from '../../models/turma';
import { Livro, Biblioteca } from '../../models/biblioteca';
import { SalarioCalculator } from '../../solid/srp';
import { InMemoryDatabase, Repository } from '../../solid/dip';

@Component({
  selector: 'app-exercicios',
  imports: [CommonModule],
  template: `
    <h2>Exercícios POO</h2>
    <section>
      <h3>1. Classes</h3>
      <div>Carro: {{ carroTexto() }}</div>
      <div>Pessoa: {{ pessoaTexto() }}</div>
    </section>

    <section>
      <h3>2. Herança</h3>
      <div>Animal: {{ animalSom() }}</div>
      <div>Gato: {{ gatoSom() }}</div>
      <div>Gerente: {{ gerenteDados() }}</div>
    </section>

    <section>
      <h3>3. Encapsulamento</h3>
      <div>Saldo após operações: {{ saldoFinal() }}</div>
      <div>Produto com desconto: {{ produtoPreco() }}</div>
    </section>

    <section>
      <h3>4. Polimorfismo</h3>
      <div>Veículos: {{ movimentosVeiculos().join(' | ') }}</div>
      <div>Instrumentos: {{ sonsInstrumentos().join(' | ') }}</div>
    </section>

    <section>
      <h3>5. Abstração</h3>
      <div>Quadrado área (lado=4): {{ areaQuadrado() }}</div>
      <div>Círculo área (raio=3): {{ areaCirculo() | number:'1.0-2' }}</div>
    </section>

    <section>
      <h3>6. Módulos JS (assets)</h3>
      <button (click)="demoModulosJs()">Carregar módulos JS</button>
      <div>{{ modulosMensagem() }}</div>
    </section>

    <section>
      <h3>7. Classes e Arrays</h3>
      <div>Turma: {{ nomesAlunos().join(', ') }}</div>
      <div>Biblioteca: {{ titulosLivros().join(', ') }}</div>
    </section>

    <section>
      <h3>8. SOLID</h3>
      <div>SRP - Salário com bônus: {{ salarioComBonus() }}</div>
      <div>DIP - Repo InMemory funcionando: {{ repoMensagem() }}</div>
    </section>
  `,
  styles: ``
})
export class Exercicios implements OnInit {
  carroTexto = signal('');
  pessoaTexto = signal('');
  animalSom = signal('');
  gatoSom = signal('');
  gerenteDados = signal('');
  saldoFinal = signal(0);
  produtoPreco = signal(0);
  movimentos = signal<string[]>([]);
  sons = signal<string[]>([]);
  areaQuadrado = signal(0);
  areaCirculo = signal(0);
  modulosMensagem = signal('');
  nomesAlunos = signal<string[]>([]);
  titulosLivros = signal<string[]>([]);
  salarioComBonus = signal(0);
  repoMensagem = signal('');

  ngOnInit(): void {
    // 1. Classes
    const carro = new Carro('Fiat', 'Strada', 2020);
    this.carroTexto.set(carro.detalhes());
    const pessoa = new Pessoa('Emanuel', 19);
    this.pessoaTexto.set(pessoa.cumprimentar());

    // 2. Herança
    const animal = new Animal('Gatinho Feio', 'Genérico');
    this.animalSom.set(animal.emitirSom());
    const gato = new Gato('Mimi');
    this.gatoSom.set(gato.emitirSom());
    const gerente = new Gerente('Carlos', 5000, 'TI');
    gerente.aumentarSalario(10);
    this.gerenteDados.set(`${gerente.nome} - ${gerente.departamento} - R$ ${gerente.salario.toFixed(2)}`);

    // 3. Encapsulamento
    const conta = new ContaBancaria('João', 100);
    conta.depositar(50);
    conta.sacar(20);
    this.saldoFinal.set(conta.saldo);

    const produto = new Produto('Teclado', 200);
    produto.aplicarDesconto(25);
    this.produtoPreco.set(produto.preco);

    // 4. Polimorfismo
    const veiculos: Veiculo[] = [new CarroVeiculo(), new Bicicleta()];
    this.movimentos.set(veiculos.map(v => v.mover()));

    const instrumentos: Instrumento[] = [new Violao(), new Piano()];
    this.sons.set(instrumentos.map(i => i.tocar()));

    // 5. Abstração
    this.areaQuadrado.set(new Quadrado(4).calcularArea());
    this.areaCirculo.set(new Circulo(3).calcularArea());

    // 7. Arrays
    const turma = new Turma();
    turma.adicionarAluno(new Aluno('Iris', 'A1'));
    turma.adicionarAluno(new Aluno('Bruno', 'B2'));
    this.nomesAlunos.set(turma.listarAlunos().map(a => a.nome));

    const biblioteca = new Biblioteca();
    biblioteca.adicionarLivro(new Livro('Angular na Prática', 'Fulano'));
    biblioteca.adicionarLivro(new Livro('POO com TS', 'Ciclano'));
    this.titulosLivros.set(biblioteca.buscarPorAutor('ano').map(l => l.titulo));

    // 8. SOLID
    const salarioCalc = new SalarioCalculator();
    const func = new Funcionario('Debora', 4000);
    this.salarioComBonus.set(salarioCalc.calcularSalarioComBonus(func, 12));

    const repo = new Repository(new InMemoryDatabase<{ id: string; nome: string }>());
    repo.save({ id: '1', nome: 'Registro' }).then(async () => {
      const encontrado = await repo.get('1');
      this.repoMensagem.set(encontrado ? `Encontrado: ${encontrado.nome}` : 'Não encontrado');
    });
  }

  movimentosVeiculos() { return this.movimentos(); }
  sonsInstrumentos() { return this.sons(); }

  async demoModulosJs() {

    const { default: CarroJs } = await import(/* @vite-ignore */ `../../../assets/modules/carro.js`);
    const carro = new CarroJs('Fiat', 'Argo', 2022);
    const { Calculadora } = await import(/* @vite-ignore */ `../../../assets/modules/calculadora.js`);
    const calc = new Calculadora();
    this.modulosMensagem.set(`${carro.detalhes()} | 2 + 3 = ${calc.somar(2, 3)}`);
  }
}
