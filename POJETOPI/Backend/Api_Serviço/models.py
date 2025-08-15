from django.db import models

class Servico(models.Model):
    """
    Representa um serviço oferecido.
    """
    nome = models.CharField(
        max_length=200, 
        help_text="Nome do serviço (ex: Montagem de PC)."
    )
    preco = models.DecimalField(
        max_digits=10, 
        decimal_places=2,
        help_text="Preço do serviço em R$."
    )
    duracao_estimada = models.CharField(
        max_length=100,
        blank=True,
        help_text="Duração estimada do serviço (ex: 2-3 horas)."
    )
    descricao = models.TextField(
        help_text="Descrição detalhada do que está incluído no serviço."
    )
    disponivel = models.BooleanField(
        default=True,
        help_text="Indica se o serviço está disponível para contratação."
    )
    data_criacao = models.DateTimeField(
        auto_now_add=True,
        help_text="Data em que o serviço foi cadastrado."
    )
    data_atualizacao = models.DateTimeField(
        auto_now=True,
        help_text="Data da última atualização do serviço."
    )

    class Meta:
        verbose_name = "Serviço"
        verbose_name_plural = "Serviços"

    def __str__(self):
        return self.nome
