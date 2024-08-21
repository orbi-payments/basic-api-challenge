# API REST con Autenticación JWT en NestJS

Esta API permite gestionar usuarios y proteger los endpoints utilizando JWT para la autenticación. El token de autenticación tiene una duración de 10 segundos.

## Requisitos

- Node.js v14 o superior
- npm v6 o superior
- Docker (opcional, para ejecutar la base de datos en un contenedor)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el entorno:
   Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:
   ```env
   JWT_SECRET=yourSecretKey
   JWT_EXPIRATION=10s
   ```

## Levantar la API

1. **Desarrollo sin Docker:**

   Ejecuta el siguiente comando para levantar el servidor de desarrollo:
   ```bash
   npm run start:dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

2. **Desarrollo con Docker (opcional):**

   Si estás utilizando Docker, puedes levantar la API con Docker Compose:
   ```bash
   docker-compose up --build
   ```

   La API estará disponible en `http://localhost:3000`.

## Uso de la API

### Autenticación

Para obtener un token JWT, realiza una solicitud `POST` al endpoint `/auth/login` con las credenciales:

```bash
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"admin","password":"password"}'
```

Esto te devolverá un token JWT que deberás usar en los encabezados de las solicitudes siguientes.

### Endpoints Disponibles

- `POST /auth/login`: Autenticación de usuario.
- `GET /user`: Obtener todos los usuarios.
- `GET /user/:id`: Obtener un usuario por ID.
- `POST /user`: Crear un nuevo usuario.
- `PUT /user/:id`: Actualizar un usuario existente.
- `DELETE /user/:id`: Eliminar un usuario.

### Ejemplo de Solicitud Autenticada

Para acceder a cualquier endpoint protegido, añade el token JWT en el encabezado `Authorization`:

```bash
curl -X GET http://localhost:3000/user -H "Authorization: Bearer <tu_token>"
```

## Notas

- El token JWT expira en 10 segundos. Esto está configurado para propósitos de demostración y pruebas;