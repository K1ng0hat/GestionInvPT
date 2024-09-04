- Para la introduccion al archivo descargar o directamente hacer un fork para introducir las carpetas en su dispositivo local.


- Para migrar la base de dato realizada en MySql, tiene que escribir php artisan migrate directamente en la consola sobre la carpeta en la que se encuentra realizada el backend, previamente habiendo creado la base de datos que se denota en el NAME_DATABASE Del archivo
.env

-Para ingresar a la vista de backend y revisar las rutas RESTful puede utilizar Thunder Client como extension y luego de eso colocar localhost:8000/api/productos (creadas las rutas con anterioridad en el archivo de /routes/api.
-Para interactuar con el CRUD en react, cabe mencionar que en la interfaz donde se encuentra la carpeta de react necesita colocar "npm start" para inicializar el front y "php artisan serve" para inicializar el backend.
-La libreria para las notificaciones toasted-react en este proyecto me aparecio con un error decrepated, por lo tanto hay que actualizarla === commits a continuacion despues de la generación de este README.md

La documentación se encuentra en SWAGGER.json y para visualizarla puede ingresar a Swagger Editor, falta agregarla al proyecto por lo tanto ya sera agregada a este mismo en el proximo commit /// SE ENCUENTRA YA REALIZADA EN public/swagger/swagger.json

Se trabajo sobre una sola rama debido a que es un proyecto individual pero se presento un problema al momento de hacer la subida de el repositorio debido a que la carpeta de "reactFront" contenía una carpeta .git que no se podia visualizar.



