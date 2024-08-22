### Documentación de la API REST

#### Modelos

**User**

### User Object

| Property  | Type    | Restrictions                                             | Updatable |
|-----------|---------|---------------------------------------------------------|-----------|
| id        | String  | Auto-generated, Unique                                   | No        |
| name      | String  | Required, Must be a string                               | Yes       |
| email     | String  | Required, Must be a valid email                          | Yes       |
| age       | Integer | Required, Must be an integer between 18 and 99           | Yes       |
| isActive  | Boolean | Optional, Must be a boolean                              | Yes       |


#### **Endpoint: Autenticación**

**Login**

- **URL:** `/auth/login`
- **Método:** `POST`
- **Descripción:** Autentica al usuario y devuelve un token JWT.
- **Cuerpo de la Solicitud:**
  ```json
  {
    "username": "admin",
    "password": "password"
  }
  ```
- **Respuesta Exitosa:**
  - **Código:** `200 OK`
  - **Cuerpo de la Respuesta:**
    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
- **Errores Comunes:**
  - **401 Unauthorized:** Credenciales incorrectas.

#### **Endpoint: Usuarios**

**Obtener Todos los Usuarios**

- **URL:** `/user`
- **Método:** `GET`
- **Descripción:** Retorna todos los usuarios. Requiere autenticación.
- **Encabezados:**
  - `Authorization: Bearer <token>`
- **Respuesta Exitosa:**
  - **Código:** `200 OK`
  - **Cuerpo de la Respuesta:**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "isActive": true
      }
    ]
    ```

**Obtener Usuario por ID**

- **URL:** `/user/:id`
- **Método:** `GET`
- **Descripción:** Retorna un usuario específico basado en su ID. Requiere autenticación.
- **Encabezados:**
  - `Authorization: Bearer <token>`
- **Respuesta Exitosa:**
  - **Código:** `200 OK`
  - **Cuerpo de la Respuesta:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "isActive": true
    }
    ```
- **Errores Comunes:**
  - **404 Not Found:** Usuario no encontrado.

**Crear Usuario**

- **URL:** `/user`
- **Método:** `POST`
- **Descripción:** Crea un nuevo usuario. Requiere autenticación.
- **Encabezados:**
  - `Authorization: Bearer <token>`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "age": 25
  }
  ```
- **Respuesta Exitosa:**
  - **Código:** `201 Created`
  - **Cuerpo de la Respuesta:**
    ```json
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "age": 25,
      "isActive": true
    }
    ```

**Actualizar Usuario**

- **URL:** `/user/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza los detalles de un usuario existente. Requiere autenticación.
- **Encabezados:**
  - `Authorization: Bearer <token>`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com",
    "age": 35
  }
  ```
- **Respuesta Exitosa:**
  - **Código:** `200 OK`
  - **Cuerpo de la Respuesta:**
    ```json
    {
      "id": 1,
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com",
      "age": 35,
      "isActive": true
    }
    ```

**Eliminar Usuario**

- **URL:** `/user/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un usuario específico basado en su ID. Requiere autenticación.
- **Encabezados:**
  - `Authorization: Bearer <token>`
- **Respuesta Exitosa:**
  - **Código:** `200 OK`
  - **Cuerpo de la Respuesta:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "isActive": false
    }
    ```
- **Errores Comunes:**
  - **404 Not Found:** Usuario no encontrado.
