from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from .models import Usuario, Bitacora

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = Usuario.objects.get(email=email)

            if not user.activo:
                return Response({"error": "Usuario inactivo"}, status=status.HTTP_403_FORBIDDEN)

            if check_password(password, user.password_hash):
                refresh = RefreshToken()
                refresh['user_id'] = user.id
                refresh['nombre'] = user.nombre
                refresh['email'] = user.email

                Bitacora.objects.create(
                    usuario=user,
                    accion='LOGIN',
                    tabla='usuarios',
                    ip=request.META.get('REMOTE_ADDR')
                )

                return Response({
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "usuario": {
                        "id": user.id,
                        "nombre": user.nombre,
                        "email": user.email
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Contraseña incorrecta"}, status=status.HTTP_401_UNAUTHORIZED)

        except Usuario.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)