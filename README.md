# Backend Node.js – Clean Architecture

API REST en Node.js + Express + TypeScript con 3 módulos: **Users, Products y Books**.

## Arquitectura

| Capa | Carpeta | Responsabilidad |
|---|---|---|
| Domain | `src/domain` | Modelos y contratos (clases abstractas de repositorio). No depende de nada. |
| Application | `src/application/usecases` | Casos de uso. Dependen solo de los contratos del dominio. |
| Infrastructure | `src/infrastructure` | Datasources (faker), implementaciones de repositorio y capa web. |
| Web | `src/infrastructure/web` | Express: servidor, rutas, controllers, errores y Swagger. |

Flujo de una petición: `Ruta -> Controller -> Caso de uso -> Repositorio (contrato) -> Repositorio Impl -> Datasource`.

**Inyección de dependencias:** se compone manualmente en cada archivo `*.routes.ts`
(datasource -> repositorio impl -> caso de uso -> controller).

## Ejecución

```bash
npm install
npm run start
```

Servidor: `http://localhost:3000`

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/users/{countUsers}` | Lista de usuarios |
| GET | `/api/products/{countProducts}` | Lista de productos |
| GET | `/api/books/{countBooks}` | Lista de libros |

Swagger/OpenAPI: `http://localhost:3000/api/docs`

## Integrantes

Juan · Valen
