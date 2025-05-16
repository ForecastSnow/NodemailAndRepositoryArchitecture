# API REST - Autenticación con Passport y JWT

Este repositorio contiene una API REST construida con Node.js, cuyo objetivo es brindar una base para la implementación de autenticación mediante `Passport.js` y `JSON Web Token (JWT)`.

## 📌 Objetivo

El propósito principal de este proyecto es servir como práctica e introducción al manejo de autenticación en aplicaciones Node.js utilizando Passport y JWT, permitiendo:

- Registro e inicio de sesión de usuarios.
- Generación y validación de tokens JWT.
- Acceso protegido a rutas privadas.

---

## ⚙️ Tecnologías utilizadas

- Node.js
- Express.js
- Passport.js (`passport-local`, `passport-jwt`)
- JSON Web Token (`jsonwebtoken`)
- MongoDB / Mongoose

---

## 🛠 Instalación y ejecución

1. Cloná el repositorio:

git clone https://github.com/ForecastSnow/passportAndJWTTime

2. Instalá las dependencias:

npm install

3. Configurá las variables de entorno:

Se incluye un archivo .env.example como referencia. Debés crear un archivo .env en la raíz del proyecto con la siguiente estructura:


## 🔒 Nota: La conexión a MongoDB requiere una URI válida de MongoDB Atlas.

Ejecutá la aplicación:

node app.js


## 📮 Endpoints y testeo

Para probar la API de forma sencilla, podés acceder al siguiente workspace público de Postman, que contiene todos los endpoints documentados y listos para ejecutar:

🔗 [Enlace a Postman](https://www.postman.com/api-team-8256/testpassport/overview)