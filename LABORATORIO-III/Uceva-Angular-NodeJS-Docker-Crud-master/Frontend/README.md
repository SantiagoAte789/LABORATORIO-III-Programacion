# Frontend – Laboratorio III (Angular)

Frontend en Angular 20 + Bootstrap 5 que consume el backend del Laboratorio II
(Node.js + PostgreSQL + Docker). Incluye los módulos del docente (Estudiantes) y los
dos módulos CRUD del laboratorio: **Profesores** y **Aulas**.

Integrantes: _(completar)_

## Ejecución

1. Levantar el backend (carpeta `Backend`): `docker compose up -d`, `npm install`, `npm run db:init`, `npm run db:seed`, `npm start` → `http://localhost:3000`
2. En `Frontend`: `npm install` y `npm start` → `http://localhost:4200`

## Arquitectura

```
src/app/modules/
├── shared/        navbar, button, back, AlertService (SweetAlert2)
├── students/      módulo base del docente
├── teachers/      Laboratorio III – Profesores  (/teachers)
│   ├── teachers.routes.ts   rutas propias, carga diferida (lazy loading)
│   ├── interfaces/          Teacher, Create/UpdateTeacherRequest, eventos de tabla
│   ├── services/            TeacherService (HttpClient, único punto de acceso al backend)
│   ├── components/          table-teachers
│   └── pages/               list / detail / create / update
└── classrooms/    Laboratorio III – Aulas  (/classrooms), misma estructura
```

## Rutas

| Ruta | Función |
|---|---|
| `/teachers/list`, `/classrooms/list` | Listado (GET ALL) |
| `/.../detail/:id` | Detalle (GET BY ID) |
| `/.../create` | Creación (POST) |
| `/.../update/:id` | Actualización (PUT) |
| botón eliminar en el listado | Eliminación con confirmación (DELETE) |

## Características
- Formularios reactivos con validaciones iguales a las restricciones de la base de datos.
- Los errores del backend (`{ error: "..." }`) y la falta de conexión se muestran al usuario.
- El listado muestra estado de carga y de error con botón de reintentar, y se recarga tras eliminar; crear/editar regresan al listado actualizado.
- Sin mocks, arreglos locales ni localStorage: todo va por `HttpClient`.

## Commits sugeridos (Conventional Commits)
```
feat(teachers): add teachers CRUD module with lazy routes
feat(classrooms): add classrooms CRUD module with lazy routes
feat(shared): add backend error message helper to AlertService
fix(backend): allow status=false in teacher and classroom DTOs
docs: add frontend README
```
