# Smartloto hecho con Polymer

Esta es la aplicación web de Smartloto hecha con el framework de google [Polymer](https://www.polymer-project.org).

Autor: Francisco Javier Abellán Abenza
Correo: franfdk17@gmail.com

## Prerequisitos

Tener npm y bower instalado.

Instalar [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

Descargar las dependencias desde bower:

    bower install


## Ejecución

En la raíz del proyecto, ejecutar este comando para servir la app en `http://localhost:8080`.

    polymer serve

Para que aparezca automáticamente, escribir:

    polymer serve --open


## Producción

Para generar el código para el servidor, ejecutar:

    polymer build

**Nota importante:** si al ejecutar este comando, no aparece `build complete!` al
final, significa que ha habido algún error. Normalmete es porque falte algun import
o que halla algún error en el archivo `polymer.json`.

#### Subir código al servidor

El anterior comando nos creará una carpeta build, donde dentro estarán dos carpetas,
`build/bundled` y `build/unbundled`, la versión unbundled es para servir desde
servidores compatibles con HTTP/2 con server push. Y la versión bundled es para
servir desde servidores que no soportan esto.

**Nota importante 2:** a la hora de servir la aplicación es imprescindible que esté
en la raíz del servidor, si está en una subcarpeta no se verá la página.

#### Ejecutar el build

Si queremos previsualizar que la versión build de la app funciona correctamente,
podemos lanzarla `http://localhost:8080` con:

    polymer serve build/bundled

O bien con:

    polymer serve build/unbundled