from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        try:
            # Buscamos al usuario por email
            user = Usuario.objects.get(email=email)
            
            # Verificamos la contraseña (aquí comparamos con tu campo password_hash)
            if user.password_hash == password: # Nota: Luego usaremos hashing real
                return Response({
                    "mensaje": "Login exitoso",
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