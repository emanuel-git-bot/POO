from rest_framework import viewsets, permissions
from .models import Produto
from .serializers import ProdutoSerializer

from drf_spectacular.utils import extend_schema

@extend_schema(tags=['Gestão de Produtos'])
class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

    def get_permissions(self):
        """
        Instancia e retorna a lista de permissões que esta view requer.
        """
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]
    
