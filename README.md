Este proyecto es un sistema de gestión de inventario desarrollado utilizando Laravel para el backend y React para el frontend. El objetivo principal es manejar productos en una base de datos, permitiendo funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) con autenticación basada en JWT y notificaciones en tiempo real para gestionar el stock. El sistema incluye diferentes vistas y permisos tanto para usuarios como administradores, y maneja notificaciones cuando el stock de un producto es insuficiente.

Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas y herramientas:

PHP (8.x o superior)
Composer
Node.js
MySQL
Git
Un cliente HTTP como Thunder Client o Postman para probar las rutas de la API.
Instalación
1. Clonar el repositorio
Puedes clonar este repositorio o realizar un fork para trabajar con tu propia copia. Después de clonar, debes asegurarte de estar ubicado en la carpeta raíz del proyecto.

2. Configuración del backend (Laravel)
Ubícate dentro de la carpeta donde se encuentra el backend desarrollado en Laravel.

2.1. Configuración del archivo .env
Es necesario configurar correctamente el archivo de entorno .env para enlazar tu base de datos. Si no tienes un archivo .env, puedes copiar el archivo .env.example, renombrarlo a .env, y luego actualizar los valores según tu entorno local. Asegúrate de definir las credenciales de conexión a la base de datos y el nombre de la base que se especifica en DB_DATABASE.

2.2. Migraciones de la base de datos
Una vez que hayas configurado el archivo .env y creado la base de datos en MySQL, puedes ejecutar las migraciones para crear las tablas necesarias. Esto se logra utilizando el comando php artisan migrate desde la consola, estando ubicado en la carpeta del backend.

3. Iniciar el backend
Para iniciar el servidor de desarrollo de Laravel, ejecuta el comando php artisan serve. Esto habilitará el backend en la dirección http://localhost:8000.

4. Configuración del frontend (React)
El frontend está desarrollado utilizando React. Debes ubicarte en la carpeta donde se encuentra la interfaz de usuario.

4.1. Instalación de dependencias
Asegúrate de instalar todas las dependencias de React ejecutando npm install en la carpeta del frontend.

4.2. Iniciar el frontend
Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con el comando npm start. Esto levantará el frontend en el navegador, generalmente en http://localhost:3000.

5. Uso de Thunder Client para probar las rutas
Para probar las rutas RESTful, puedes utilizar Thunder Client, una extensión para Visual Studio Code que permite enviar solicitudes HTTP a la API. Simplemente abre Thunder Client e ingresa http://localhost:8000/api/productos para acceder a la lista de productos (suponiendo que el backend esté corriendo y la ruta esté correctamente definida en el archivo /routes/api.php).

6. Documentación de la API con Swagger
La documentación de la API ha sido generada utilizando Swagger. Para visualizar esta documentación, puedes abrir el archivo public/swagger/swagger.json en Swagger Editor. Aquí encontrarás todas las rutas definidas, incluyendo autenticación JWT y las operaciones CRUD sobre productos. Esta documentación se agregará en el próximo commit al proyecto.

7. Notificaciones en el sistema
El proyecto incorpora notificaciones en tiempo real para alertar al administrador cuando el stock de un producto está en 0. También se impide la reducción de stock a 0 o menos desde la vista de administración y se evita la compra de productos sin stock desde la vista de usuario.

8. Estructura del proyecto
El proyecto utiliza una sola rama ya que es un proyecto individual. Hubo un inconveniente con la carpeta reactFront, que contenía un archivo .git no visible, lo que generó un conflicto al subir el repositorio a GitHub. Este problema ha sido resuelto en el último commit.


Las claves API presentes en este repositorio son solo para propósitos de evaluación técnica y no son claves sensibles.