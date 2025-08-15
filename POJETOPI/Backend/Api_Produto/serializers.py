from rest_framework import serializers
from .models import Produto, EspecificacaoTecnica

class EspecificacaoTecnicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EspecificacaoTecnica
        fields = ['id', 'nome', 'valor']

class ProdutoSerializer(serializers.ModelSerializer):
    especificacoes = EspecificacaoTecnicaSerializer(many=True, required=False)

    class Meta:
        model = Produto
        fields = [
            'id', 'nome', 'preco', 'categoria', 
            'descricao', 'url_imagem', 'em_estoque', 
            'especificacoes'
        ]

    def create(self, validated_data):
        especificacoes_data = validated_data.pop('especificacoes', [])
        produto = Produto.objects.create(**validated_data)
        for especificacao_data in especificacoes_data:
            EspecificacaoTecnica.objects.create(produto=produto, **especificacao_data)
        return produto

    def update(self, instance, validated_data):
        especificacoes_data = validated_data.pop('especificacoes', [])

        instance.nome = validated_data.get('nome', instance.nome)
        instance.preco = validated_data.get('preco', instance.preco)
        instance.categoria = validated_data.get('categoria', instance.categoria)
        instance.descricao = validated_data.get('descricao', instance.descricao)
        instance.url_imagem = validated_data.get('url_imagem', instance.url_imagem)
        instance.em_estoque = validated_data.get('em_estoque', instance.em_estoque)
        instance.save()

        instance.especificacoes.all().delete()
        for especificacao_data in especificacoes_data:
            EspecificacaoTecnica.objects.create(produto=instance, **especificacao_data)

        return instance