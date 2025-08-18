export class Aluno {
	constructor(
		public nome: string,
		public matricula: string
	) {}
}

export class Turma {
	private alunos: Aluno[] = [];

	adicionarAluno(aluno: Aluno): void {
		this.alunos.push(aluno);
	}

	removerAlunoPorMatricula(matricula: string): boolean {
		const tamanhoAntes = this.alunos.length;
		this.alunos = this.alunos.filter(a => a.matricula !== matricula);
		return this.alunos.length < tamanhoAntes;
	}

	listarAlunos(): Aluno[] {
		return [...this.alunos];
	}
} 