# Cosas que faltan por hacer

A continuación se detalla las funcionalidades que faltan en la aplicación
o no están terminadas. Además se describirá el funcionamiento de lo que
está implenetado para un mayor entendimiento de la aplicación.

## Página principal: `index.html`

Esta es la entrada de la aplicación, es una pagina html estática normal, 
(no es una página de polymer). La mayor parte del código fue autogenerado
al crear el proyecto de polymer.

Lo interasente de aquí es que al final, el la parte del body se llama a nuestro
primer componente: <sl-main>.

```html
<body>
    <sl-main></sl-main>
</body>
```

## Componente principal: `sl-main.html`

Este es nuestro componente principal. Los componetes html propios necesitan
llevar un guión para diferenciarlos de los componentes normales. En nuestro caso
se llamarán `sl-xxxxx` donde sl hace referencia a smartloto y xxxx es el nombre que
nosotros le queramos dar al componente.

Este componente abre sl-public, la vista pública si no estoy logueado (no estan mis
datos guardados en localstorage) y entro en sl-app, la vista privada si tengo ya mis
datos guardados.

## Componentes de la vista pública: `public/`

De aquí falta el diseño acorde con el [prototipo de diseño](http://webs.trestristestigres.com/smartloto.es/)

## Componente de registrar usuario: `public/sl-registro.html`

Falta revisar que campos son los necesarios y pasarselos

## Componente de crear usuario lead en intercom: public/`sl-lead.html`

La llamada API existe, pero falta en funcionamiento interno por parte del servidor

## Componentes de la vista privada: `app/`

Cosas generales que faltan:

 * Implemetar la url correcta cuando entro a un subvista de cualquiera de la vistas
 (por ejemplo un pedido dentro de la vista padidos, debería poner algo como /app/padidos/pedido-xxx)
 esto se hace con el componente <app-route> de polymer.
 * Poner el diseño de la parte de primeros pasos

## Componentes de pedidos:

Estructura:

 * `app/sl-vista-pedidos.html`: Vista principal
 * `app/sl-logica-pedidos.html`: Subvista de lista de pedidos
 * `app/sl-vista-pedidos.html`: Vista de un pedido concreto
 * `app/sl-component-aceptar-pedido.html`: Vista de la tarjeta con el slider

 De aquí falta:
 
  * Mostrar adecuadamente los pedidos en `app/sl-logica-pedidos.html`
  * Mostrar la vista opurtuna en `app/sl-vista-pedidos.html` según el tipo de pedido.

## Componentes de envios:

Estructura:

 * `app/sl-vista-envios.html`: Vista principal
 * `app/sl-logica-envios.html`: Subvista de lista de envios
 * `app/sl-vista-envio.html`: Vista de un pedido concreto

De aquí falta:
 
  * Mostrar adecuadamente los envios en `app/sl-logica-envios.html`
  * Acabar la vista `app/sl-vista-envio.html` (información, campos de búsqueda).

## Componente de facturas `app/sl-vista-facturas.html`:

De aquí falta todo.

## Componente de existencias `app/sl-vista-existencias.html`:

De aquí falta:

 * Comprobar funcionamiento de la API (Antes cuando habían datos funcionaba)
 * Implemetar los inputs de búsqueda

## Componente de caja fuerte `app/sl-vista-cajafuerte.html`:

De aquí falta comprobar la API, porque no hay datos.

## Componente de mis datos `app/sl-vista-ajustes-datos.html`:

Está el diseño falta la implementación con la API.

## Componente de empleados:

Revisar que todo vaya bien



