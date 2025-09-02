from rest_framework import viewsets, permissions
from .models import Categoria
from .serializers import CategoriaSerializer
from drf_spectacular.utils import extend_schema

@extend_schema(tags=['Gestão de Categorias'])
class CategoriaViewSet(viewsets.ModelViewSet):

    queryset = Categoria.objects.all().order_by('nome')
    serializer_class = CategoriaSerializer

    # def get_permissions(self):
    #     """
    #     Instancia e retorna a lista de permissões que esta view requer.
    #     """
    #     if self.action == 'list' or self.action == 'retrieve':
    #         permission_classes = [permissions.AllowAny]
    #     else:
    #         permission_classes = [permissions.IsAdminUser]
    #     return [permission() for permission in permission_classes]