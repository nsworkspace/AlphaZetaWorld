# Backend API

Express 5 and MongoDB API for public contact submissions and product/service catalogs.

## Setup

1. Install Node.js and MongoDB.
2. From this directory, install packages with `npm install`.
3. Copy `.env.example` to `.env` and set `MONGODB_URI`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a random `JWT_SECRET` of at least 32 characters.
4. Start MongoDB, then run `npm run dev` for development or `npm start` for production.

The first server start creates the configured admin account if it does not exist. Later starts do not reset its password.

## API

Base URL: `http://localhost:5001`

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| `POST` | `/api/admin/login` | Public | Exchange `{ "email", "password" }` for a bearer token |
| `POST` | `/api/contacts` | Public | Submit a contact request |
| `GET` | `/api/contacts?page=1&limit=20&status=pending&search=...` | Admin | List/search contact requests |
| `PATCH` | `/api/contacts/:id/status` | Admin | Set contact status to `pending` or `success` |
| `GET` | `/api/products?page=1&limit=20` | Public | List active products |
| `GET` | `/api/products?status=inactive` or `?status=all` | Admin | List inactive or all products |
| `GET` | `/api/products/:id` | Public | Read one active product |
| `GET` | `/api/products/:id?status=inactive` or `?status=all` | Admin | Read an inactive product |
| `POST` | `/api/products` | Admin | Create a product |
| `PATCH` | `/api/products/:id` | Admin | Update a product |
| `DELETE` | `/api/products/:id` | Admin | Delete a product |
| `GET` | `/api/services?page=1&limit=20` | Public | List active services |
| `GET` | `/api/services?status=inactive` or `?status=all` | Admin | List inactive or all services |
| `GET` | `/api/services/:id` | Public | Read one active service |
| `GET` | `/api/services/:id?status=inactive` or `?status=all` | Admin | Read an inactive service |
| `POST` | `/api/services` | Admin | Create a service |
| `PATCH` | `/api/services/:id` | Admin | Update a service |
| `DELETE` | `/api/services/:id` | Admin | Delete a service |

Admin requests send `Authorization: Bearer <token>`. Product and service bodies accept `name`, `description`, and `status`; status is `active` or `inactive` and defaults to `active`.

Successful responses use `{ "success": true, "data": ... }`. Collection endpoints also return pagination metadata. Errors use `{ "success": false, "message": ... }` and field validation errors include an `errors` array.
