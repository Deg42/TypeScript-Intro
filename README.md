# Proyecto para reforzar TypeScript - ECMAScript 2022

* Lo primero que debemos de hacer después de descargar el proyecto es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios.


* Cuando termine de instalar los node_modules, entonces podermos lanzar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, se debe de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto de este proyecto es el ```8081```, pero se puede cambiar en ```package.json``` >> scripts.

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

