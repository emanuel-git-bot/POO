from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Api_Categoria import views

# Importe os ViewSets de cada app
from Api_Categoria.views import CategoriaViewSet
from Api_Produto.views import ProdutoViewSet
from Api_Serviço.views import ServicoViewSet

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = DefaultRouter()

# Registre cada ViewSet com seu respectivo prefixo de URL
router.register(r'categorias', CategoriaViewSet, basename='categorias')
router.register(r'produtos', ProdutoViewSet, basename='produtos')
router.register(r'servicos', ServicoViewSet, basename='servicos')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('doc', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]