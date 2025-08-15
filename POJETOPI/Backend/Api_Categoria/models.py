from django.db import models

class Categoria(models.Model):
    nome = models.CharField(
        max_length=100, 
        unique=True,      
    )
    descricao = models.TextField(
        blank=True,      
    )
    
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nome
    
