from rest_framework import viewsets
from .models import Servico
from .serializers import ServicoSerializer
from drf_spectacular.utils import extend_schema

@extend_schema(tags=['Gestão de Serviços'])
class ServicoViewSet(viewsets.ModelViewSet):
    queryset = Servico.objects.all()
    serializer_class = ServicoSerializer