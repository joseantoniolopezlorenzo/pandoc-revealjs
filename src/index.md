---
# general Pandoc options
lang: es-ES
author: Jall <jall.informatico@gmail.com>
subtitle: Pandoc + reveal.js + Gulp
title-prefix: Presentación de Jall Profesor
description: Presentación de distintos proyectos desarrollados por Jall Profesor
keywords:
    - reveal.js
    - pandoc
    - web
    - javascript
    - gulp
date: 16/11/2020
css:
    - ./assets/custom.min.css # put your custom styles in this file
    - ./assets/katex.min.css

# title slide options
title: SLIDESHOW
title-slide-attributes: # for further title slide attributes, see https://pandoc.org/MANUAL.html#background-in-reveal.js-and-beamer
    data-background-image: assets/images/unsplash-lERuUa_96uo.jpg
    data-background-size: cover # can alternatively be set to `contain` for letterboxing

# Pandoc options for reveal.js
revealjs-url: ./assets/reveal.js
theme: black
#background-image: assets/images/unsplash-lERuUa_96uo.jpg # uncomment for the same background image on every slide

# reveal.js config; for more options like `parallaxBackgroundImage`, see https://revealjs.com/config/
mouseWheel: false
width: 1920
height: 1080

# additional reveal.js plug-in config
## see https://github.com/Martinomagnifico/reveal.js-verticator#configuration
verticator:
    enable: true
    darktheme: true # set to `false` if you use a light theme
    color: '' # manually set the normal verticator color
    oppositecolor: '' # manually set the inverted verticator color
    skipuncounted: true # Omit drawing Verticator bullets for slides that have `data-visibility="uncounted"` set?
    clickable: true # Allow navigation to a slide by clicking on the corresponding Verticator bullet?
---

# 1st main slide {data-transition="convex"}

## Set background color of individual slides {data-background-color="#fff"}

Note:
This will only display in the notes window.

- You can set the background color of an individual slide by appending
$$e^{iπ} + 1 = 0$$
~~~{.gnuplot im_fmt="svg" im_out="img" im_dir="assets/images/pd"}
set terminal svg \
    font "arial,10" fontscale 1.0
set key inside left top vertical Right \
    noreverse enhanced autotitles box linetype -1 linewidth 1.000
set samples 400, 400
plot [-10:10] real(sin(x)**besj0(x))
~~~

## Bracketed Spans

You can use [bracketed spans](https://pandoc.org/MANUAL.html#extension-bracketed_spans) to assign classes and attributes to text.

---

```md
[Text wrapped in a `<span>` with class `glowing`]{.glowing}
```

---

will result in:

---

[Text wrapped in a `<span>` with class `glowing`]{.glowing}

## Fenced Divs

You can also use [fenced divs](https://pandoc.org/MANUAL.html#extension-fenced_divs) to assign classes and attributes to whole blocks of content.

---

```md
::: {style="text-shadow: 1px 1px 5px red;"}

:::::: nonincremental

- A non-incremental list...
- ...

::::::

... followed by a paragraph...

| ...And | some | table |
| ---- | ----- | -------- |
| all | with | ugly |
| red | shadow | ✓ |

:::
```

---

will result in:

---

::: {style="text-shadow: 1px 1px 5px red;"}

:::::: nonincremental

- A non-incremental list...
- ...

::::::

... followed by a paragraph...

| ...And | some | table |
| ---- | ----- | -------- |
| all | with | ugly |
| red | shadow | ✓ |

:::


# 2nd main slide

## 1 {data-transition="convex" data-visibility="uncounted"}

- This slide has no corresponding Verticator bullet on the right ...

- ... because the attribute `data-visibility="uncounted"` was set.

- This means the currently highlighted bullet corresponds to the previous slide.

## 2 {data-transition="convex"}

- You can use shortcodes to add emojis:

- Writing `:alien:` will result in :alien:.

- Unfortunately not all of the [GitHub shortcodes](https://github.com/ikatyang/emoji-cheat-sheet#readme) seem to be supported.

## 3 {data-transition="convex"}

Babam!

# 3rd main slide

# Thanks! {data-background-image=assets/images/unsplash-_g1WdcKcV3w.jpg}

## Slides

`1n.pm/...`
