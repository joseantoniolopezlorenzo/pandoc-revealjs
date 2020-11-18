---
# general Pandoc options
author: Jall <jall.informatico@gmail.com>
date: 17/11/2020

# title slide options
title: Pandoc - Reveal.js
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
css:
    - ./assets/custom.min.css
    - ./assets/katex.min.css

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


## Multiconversor de archivos.

::: notes

Prueba de nota

:::

Una auténtica navaja suiza. Sorprende por su potencia y versatilidad. Código abierto.

* creado por el profesor de filosofía [John MacFarlane](https://www.johnmacfarlane.net/)
* con una amplia comunidad de usuarios y desarrolladores.
* fácilmente extensible con *filtros* que aumentan su potencia.
* una extensa documentación la encontrará en [Pandoc website](https://pandoc.org/).

## Una grafo en vez de mil palabras.

::: incremental

* Las conversiones más utilizadas:
    * markdown a $\LaTeX$ o *pdf*.
    * markdown a *html*.
    * markdown a *docx*.
    * markdown a *epub*.
* pero no son las únicas...

:::

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



## Extensiones. {data-transition="concave"}

$$e^{iπ} + 1 = 0$$

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


## ¿Por qué reveal.js? {data-transition="convex"}

## Plugins


# Gulp

# Gracias {data-background-image=assets/images/adios.jpg}

## Slides

`1n.pm/...`
