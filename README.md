# Like Me - Desafío Express + PostgreSQL

Este proyecto es una aplicación fullstack que permite publicar, visualizar y gestionar posts con imágenes y descripciones. Utiliza Express.js y PostgreSQL en el backend, y React con Vite en el frontend.

https://likeme-frontend.onrender.com/

<img width="1845" height="852" alt="image" src="https://github.com/user-attachments/assets/2cb2471e-33a7-4346-9f59-773e18dae348" />


## Estructura del proyecto

```
backend/
  app.js
  package.json
  req.txt
  database/
    connection.js
  helpers/
    validaBody.js
  models/
    posts.model.js
  routes/
    posts.js
frontend/
  index.html
  package.json
  README.md
  vite.config.js
  public/
    vite.svg
  src/
    App.jsx
    index.css
    main.jsx
    assets/
      react.svg
    components/
      Form.jsx
      NoPosts.jsx
      Post.jsx
```

## Instalación y ejecución

### Backend
1. Ve a la carpeta `backend`:
   ```powershell
   cd backend
   ```
2. Instala las dependencias:
   ```powershell
   npm install
   ```
3. Configura la conexión a PostgreSQL en `database/connection.js`.
4. Inicia el servidor:
   ```powershell
   npm run dev
   ```

### Frontend
1. Ve a la carpeta `frontend`:
   ```powershell
   cd frontend
   ```
2. Instala las dependencias:
   ```powershell
   npm install
   ```
3. Inicia la aplicación:
   ```powershell
   npm run dev
   ```

## Variables de entorno
- El frontend puede usar la variable `VITE_API_URL` para definir la URL del backend.

## Funcionalidades principales
- Crear, listar y eliminar posts.
- Cada post tiene título, imagen y descripción.
- Like y dislike (próximamente).

## Requisitos
- Node.js
- PostgreSQL

## Autor
- Desafío realizado por [Tu Nombre]


