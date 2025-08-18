export class Livro {
	constructor(
		public titulo: string,
		public autor: string
	) {}
}

export class Biblioteca {
	private livros: Livro[] = [];

	adicionarLivro(livro: Livro): void {
		this.livros.push(livro);
	}

	buscarPorTitulo(titulo: string): Livro[] {
		const t = titulo.toLowerCase();
		return this.livros.filter(l => l.titulo.toLowerCase().includes(t));
	}

	buscarPorAutor(autor: string): Livro[] {
		const a = autor.toLowerCase();
		return this.livros.filter(l => l.autor.toLowerCase().includes(a));
	}
} 