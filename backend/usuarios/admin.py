from django.contrib import admin
from .models import Rol, Permiso, Usuario, Sesion, Bitacora

# Registramos tus modelos para que se vean en el panel azul
admin.site.register(Rol)
admin.site.register(Permiso)
admin.site.register(Usuario)
admin.site.register(Sesion)
admin.site.register(Bitacora)
