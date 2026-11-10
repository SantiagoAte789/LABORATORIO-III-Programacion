# Laboratorio II - CRUD Backend con Node.js, PostgreSQL y Docker


Integrantes: Samuel Alzate Correa, Santiago Atehortua Jaramillo


Backend desarrollado en Node.js con TypeScript, Express y PostgreSQL. Incluye los módulos de Estudiantes y Cursos (base del docente) y los módulos de Profesores y Aulas (laboratorio).

## Requisitos

- Node.js
- Docker y Docker Compose
- Git

## Ejecución

Desde la carpeta `Backend`:

```bash
docker compose up -d
npm install
npm run db:init
npm run db:seed
npm start
```

El servidor queda disponible en `http://localhost:3000`.

Ejecutar `npm run db:seed` una sola vez, porque repetirlo duplica los datos iniciales.

## Endpoints

| Módulo | Ruta base |
|---|---|
| Estudiantes | `/api/students` |
| Cursos | `/api/courses` |
| Profesores | `/api/teachers` |
| Aulas | `/api/classrooms` |

Operaciones de cada módulo:

| Operación | Método | Ruta |
|---|---|---|
| Obtener todos | GET | `/api/<modulo>` |
| Obtener por id | GET | `/api/<modulo>/:id` |
| Crear | POST | `/api/<modulo>` |
| Actualizar | PUT | `/api/<modulo>/:id` |
| Eliminar | DELETE | `/api/<modulo>/:id` |

## Ejemplos de cuerpo

Profesor:

```json
{
  "name": "Pedro Gomez",
  "email": "pedro.gomez@uceva.edu.co",
  "phone": "3201000011",
  "department": "Ingeniería de Sistemas",
  "experience_years": 3,
  "status": true
}
```

Aula:

```json
{
  "name": "Aula 401",
  "building": "Bloque A",
  "capacity": 40,
  "type": "Teórica",
  "floor": 4,
  "status": true
}
```

## Pruebas en Postman

Importar el archivo `postman/uceva-profesores-aulas.postman_collection.json`. La colección usa la variable `base_url` (`http://localhost:3000`).

## Estructura de cada módulo

- `domain/interfaces`: interfaz del modelo.
- `domain/dtos`: DTOs para crear y actualizar.
- `presentation/modules/<modulo>`: servicio, controlador y rutas.
- `database`: scripts `init.sql`, `seed.sql` y `consult.sql`.


## Laboratorio III - Frontend Angular

El frontend está en `Uceva-Angular-NodeJS-Docker-Crud-master/Frontend` e incluye los módulos de Profesores (`/teachers`) y Aulas (`/classrooms`) consumiendo este backend. Ver `Frontend/README.md` para ejecución y arquitectura.
