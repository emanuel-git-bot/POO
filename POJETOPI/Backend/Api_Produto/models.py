from django.db import models
from Api_Categoria.models import Categoria

class Produto(models.Model):
    nome = models.CharField(
        max_length=200, 
        help_text="Nome do produto (ex: Intel Core i7-13700K)."
    )
    preco = models.DecimalField(
        max_digits=10, 
        decimal_places=2,
        help_text="Preço do produto em R$."
    )
    categoria = models.ForeignKey(
        Categoria, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='produtos',
        help_text="Categoria à qual o produto pertence."
    )
    descricao = models.TextField(
        help_text="Descrição detalhada do produto."
    )
    url_imagem = models.URLField(
        blank=True, 
        null=True,
        help_text="URL da imagem principal do produto."
    )
    em_estoque = models.BooleanField(
        default=True,
        help_text="Indica se o produto está disponível em estoque."
    )
    data_criacao = models.DateTimeField(
        auto_now_add=True,
        help_text="Data em que o produto foi cadastrado."
    )
    data_atualizacao = models.DateTimeField(
        auto_now=True,
        help_text="Data da última atualização do produto."
    )
    
    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"

    def __str__(self):
        return self.nome
    
class EspecificacaoTecnica(models.Model):
    produto = models.ForeignKey(
        Produto, 
        on_delete=models.CASCADE, 
        related_name='especificacoes'
    )
    nome = models.CharField(max_length=100)
    valor = models.CharField(max_length=200)

    class Meta:
        verbose_name = "Especificação Técnica"
        verbose_name_plural = "Especificações Técnicas"

    def __str__(self):
        return f"{self.produto.nome} - {self.nome}: {self.valor}"
