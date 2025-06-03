📨 NodeMailer API - Proyecto de Aprendizaje
Esta es una API desarrollada en Node.js con el objetivo principal de experimentar y aprender sobre NodeMailer, implementaciones de recuperación de contraseña y una arquitectura basada en el patrón Repository + Clean Architecture.

📚 ¿Es para producción? No, es más como un campo de tiro para probar cosas y entender cómo funcionan las herramientas antes de ir a la guerra real.

🚀 Tecnologías y Dependencias
El proyecto utiliza las siguientes librerías de Node:

  "bcrypt": "^5.1.1",
  "connect-mongo": "^5.1.0",
  "cookie-parser": "^1.4.7",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "express-handlebars": "^8.0.3",
  "express-session": "^1.18.1",
  "mongoose": "^8.13.2",
  "nodemailer": "^7.0.3",
  "nodemailer-express-handlebars": "^7.0.0",
  "passport": "^0.7.0",
  "passport-jwt": "^4.0.1",
  "passport-local": "^1.0.0"


🧠 Funcionalidades Implementadas

🔐 Autenticación con Passport (estrategias local y JWT).

📬 Sistema de recuperación de contraseña vía email usando Nodemailer y plantillas con Handlebars.

🛒 Sistema de órdenes de compra.

🧱 Arquitectura limpia, separando controllers, services, repositories y routers.

👤 Control de roles con lógica para administradores y usuarios.

🧪 Flexibilidad de pruebas: Al registrar un usuario se puede setear el rol manualmente (ideal para testing rápido).

🌐 Persistencia de sesión en MongoDB con connect-mongo.

📮 Endpoints

Todos los endpoints están documentados en Postman:

👉 Colección en Postman

https://www.postman.com/api-team-8256/nodemailandrepositoryarchitecture

⚙️ Pasos basicos!

1) Cloná el repo:

git clone https://github.com/ForecastSnow/NodemailAndRepositoryArchitecture

2) Instalá dependencias:

npm install

3) Configurá las variables de entorno:

**Se le otorga un archivo ".env-example", renombre como ".env" y rellene los datos indicados en el archivo**

4) Levantá la app:

node app.js

🧪 Testeo y Evaluación

Una vez levantada, podés usar la colección de Postman para testear:

Registro y login.

Recuperación de contraseña vía correo.

Gestión de órdenes.

Pruebas de rol (admin/user).

🧼 Nota
Esto es una base sólida para aprender buenas prácticas como modularización, separación de responsabilidades, y servicios desacoplados. No está pensado para producción, pero sí para entender lo que está debajo del capó.