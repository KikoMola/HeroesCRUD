# [ES] Heroes CRUD

Se trata de una aplicación desarrollada usando el framework de Google **Angular**, en su versión 11, pero es compatible con todas las versiones
desde Angular 2 hasta la actualidad.

## Cómo funciona la aplicación
Para hacer funcionar la aplicación, lo primero que hace falta es descargar el proyecto que contiene la base de datos en formato **JSON**, se puede descargar desde aquí.

Una vez descargado el fichero .zip o clonado el proyecto, hay que abrir la consola de comandos e instalar JSON-Server con el siguiente comando.
```
npm install -g json-server
```
Después, dentro del directorio raíz del proyecto, hay que introducir el siguiente comando en la terminal:
```
json-server --watch db.json
```

Y con esto, se abrirá un servidor local que aloja la base de datos, a la que se le podrán hacer peticiones. Los endpoints de dicho servidor son los siguientes:
```
http://localhost:3000/usuarios
http://localhost:3000/heroes
```
Ahora ya se puede utilizar la aplicación, tanto en modo en línea como en modo local.

## Modo en línea
Simplemente hay que ir a este link, y probar todas sus funcionalidades.

## Modo local
Para probar la aplicación en modo local, lo que hay que hacer es descargar o clonar el proyecto en cualquier directorio y, una vez dentro de él, introducir los siguientes comandos en la terminal.
```
npm install
ng serve -o
```

Una vez hecho esto, la aplicación se abrirá tan pronto como esté disponible y ya se podrá probar.