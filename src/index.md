---
# general Pandoc options
author: Jall <jall.informatico@gmail.com>
date: 25/11/2020

# title slide options
title: Pandoc - Reveal.js by JallProfesor
title-slide-attributes:
    data-background-image: assets/images/cies.jpg
    data-background-size: cover # can alternatively be set to `contain` for letterboxing
subtitle: Pandoc + reveal.js + Gulp
title-prefix: Plantilla de presentaciones de Jall Profesor
description: Plantilla de presentaciones realizada con Pandoc, reveal.js y gulp.
keywords:
    - reveal.js
    - pandoc
    - web
    - javascript
    - gulp
    - pweb presentation
    - presentaciones web
css:
    - ./assets/css/custom.min.css
    - ./assets/css/katex.min.css

# Pandoc options for reveal.js
revealjs-url: ./assets/reveal.js
theme: moon

# reveal.js config;
mouseWheel: false
width: 1920
height: 1080

# additional reveal.js plug-in config
verticator:
    enable: true
    darktheme: true
    color: '#42affa'
    oppositecolor: ''
    skipuncounted: true
    clickable: true
---

# Pandoc {data-transition="slide"}


## Multiconversor de archivos.{data-transition="convex"}

* una auténtica navaja suiza.
* sorprende por su potencia y versatilidad.
* es código abierto.
* creado por el profesor de filosofía [John MacFarlane](https://www.johnmacfarlane.net/)
* con una amplia comunidad de usuarios y desarrolladores.
* fácilmente extensible con *filtros* que aumentan su potencia.
* una extensa documentación la encontrará en [Pandoc website](https://pandoc.org/).

## Una grafo en vez de mil palabras. {data-transition="convex"}

* Las conversiones más utilizadas:
    * markdown a $\LaTeX$ o *pdf*.
    * markdown a *html*.
    * markdown a *docx*.
    * markdown a *epub*.
* pero no son las únicas...

---

![](./assets/images/pandoc-conversor.png "Posibles coversiones"){ width=55% }

## Markdowwn a Html {data-transition="convex"}
Es más fácil escribir *markdown* que *html* (o $\LaTeX$).

::: incremental

- es un hecho comprobable.
- si no vas a dedicarte a la programación web no te compensa\
 el esfuerzo de aprender *html* y tecnologías asociadas.
- en cambio aprender *markdown* es bastante fácil
- escribes texto plano siguiendo una serie de pautas o convenciones.
- **Pandoc** se encargará de convertir tus textos markdown(texto plano)\
 a html(página web) utilizando una **plantilla**.
- El proceso se puede *automatizar* de tal manera que\
puedas tener una web completa con unos cuantos **markdown**.\
Se conocen como **generadores de sitios estáticos**.

:::

---

Por ejemplo, [esta web](https://joseantoniolopezlorenzo.github.io/pandoc-static-website/) está escrita en **markdown** y\
 utiliza un [generador de sitio estático](https://github.com/joseantoniolopezlorenzo/pandoc-static-website):

![](./assets/images/web-estatica.png "pandoc-static-website")



## Extensiones. {data-transition="convex"}

Hay infinidad de **filtros** de **Pandoc** que permiten ampliar las capacidades de **markdown**.\
En esta presentación usamos dos **filtros** de Pandoc a modo de ejemplo:

1. [Pandoc static $\KaTeX$](https://pypi.org/project/pandoc_static_katex/) que nos permite escribir cualquier fórmula matemática;\
por ejemplo, $e^{iπ} + 1 = 0$

2. [Pandoc Imagine](https://github.com/hertogp/imagine) que nos permite convertir bloques de código en imágenes;\
por ejemplo, la siguiente imagen está generada por el filtro usando **gnuplot**
~~~{.gnuplot im_fmt="svg" im_out="img" im_dir="assets/images/pd"}
set terminal svg enhanced background rgb 'white'\
    font "arial,10" fontscale 1.0
set key inside left top vertical Right \
    noreverse enhanced autotitles box linetype -1 linewidth 1.000
set samples 400, 400
plot [-10:10] real(sin(x)**besj0(x))
~~~


# reveal.js {data-transition="convex"}

## Pandoc y presentaciones{data-transition="convex"}
Uno de los formatos de salida de **Pandoc** es la **presentación**.\
Estas pueden ser en *pdf* o *html*. Entre estas últimas hay varias posibilidades:

- **S5** [web](https://meyerweb.com/eric/tools/s5/) - [demostración](https://meyerweb.com/eric/tools/s5/s5-intro.html)
- **Slidy** [web](https://www.w3.org/Talks/Tools/Slidy2/Overview.html)
- **DZSlides** [web](http://paulrouget.com/dzslides/)
- **Reveal.js** [web](https://revealjs.com/#/)

## ¿Por qué reveal.js? {data-transition="convex"}

- conjuga html, css y javascript.
- presentaciones elegantes.
- código abierto y gratuito.
- múltiples posibilidades de configuración.
- altamente personalizable.
- extensible mediante plugins.

## Plugins

Mencionaré solamente los utilizados en esta presentación.

1. Propios de **reveal.js** (listado completo y documentación [aquí](https://revealjs.com/plugins/))

    - zoom (pulse repetidamente *Ctl+Click*)
    - search (control + mayúsculas + f)

2. Plugins desarrollados por terceros (un listado [aquí](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware))

    - [Chalkboard](https://github.com/rajgoel/reveal.js-plugins/tree/master/chalkboard) (*pizarra*)\
        Permite anotar la presentación o abre una pizarra.\
        Se maneja usando iconos (abajo, izquierda) o atajos de teclado (Menú/Ayuda)
    - [Menú](https://github.com/denehyg/reveal.js-menu) [pulse repetidamente 'm']
    - [Verticator](https://github.com/Martinomagnifico/reveal.js-verticator)\
    agrega indicadores para mostrar la cantidad de diapositivas en una pila vertical.
    - [Reveal.js Title Footer](https://github.com/e-gor/Reveal.js-Title-Footer)\
    incluye un pie de página en todas las diapositivas de una presentación que mostrará el título de la presentación.

# Gulp

## Facilitando el trabajo, centrándonos en lo importante.

Es automatizador de tareas que nos  permite crear flujos de trabajo  eficientes.

- es flexible, adaptable.
- es componible, tareas complejas a partir de tareas simples.
- es eficiente.

Si quieres saber cómo lo utilizamos échale un vistazo al archivo *gulpfile.js* del [repositorio](https://github.com/joseantoniolopezlorenzo/pandoc-revealjs) de GitHub.

Combinado con *npm* podemos lanzar dos tipos de tarea:

- *desarrollo*: conversión de pandoc, movimiento de assets y servidor web
- *producción*: conversión de pandoc, optimización de archivos y push en GitHub.

# Gracias por su atención {data-background-image=assets/images/adios.jpg}

## Me encontrarás en

- [Twitter](https://twitter.com/JallProfesor)
- [Facebook](https://www.facebook.com/joseantonio.lopezlorenzo.31508)
- [GitHub](https://github.com/joseantoniolopezlorenzo)