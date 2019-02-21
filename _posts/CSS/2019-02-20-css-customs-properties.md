---
layout: post
title: CSS customs properties - Cheatsheet
date: 2019-02-20 00:00:00 +0000
categories:
- CSS
canonical: ''

---
CSS customs properties, also known as CSS variables. represent custom properties that can be declared and be called in your CSS.

## Declare a custom property in CSS

To declare a Custom property in your CSS, you need to use the `--` syntax:

```css
:root {
  --colorPrimary: hsla(360, 100%, 74%, 0.6);
}
```

Notice the `:root` pseudo-class selector, we can declare our variables globally using it. We can as well declare them using other selectors, they will be then be scoped in these ones.

```css
.theme-dark {
  --colorPrimary: hsla(360, 100%, 24%, 0.6);
}
```

## Use a custom property in CSS

To use a CSS custom property in your CSS you can use the `var()` function

```css
:root {
  --colorPrimary: tomato;
}

.theme-dark {
  --colorPrimary: lime;
}

body {
  background-color: var(--colorPrimary);
}
```

In this case, `body` will have a background colour of `tomato`. But `body.theme-dark` of `lime`.

## Use custom properties without units

CSS custom properties can be declared without units if they are used with the `calc()` function.

```css
:root {
  --spacing: 2;
}

.container {
  padding: var(--spacing) px; /*Doesn't Work 😫*/
  padding: calc(var(--spacing) * 1rem); /*Will output 2rem 😃*/
}
```

## Use custom properties with JavaScript

To get a custom property we can use the following:

```js
getComputedStyle(element).getPropertyValue("--my-var");

// Or if inline
element.style.getPropertyValue("--my-var");
```

To update the custom property value:

```js
element.style.setProperty("--my-var", newVal);
```

### Example of getting and replacing values:

In the following example, we use the [dat.gui controller library](https://workshop.chromeexperiments.com/examples/gui/) to change the value of `--scenePerspective`, `--cubeRotateY`, `--cubeRotateX` custom properties. This method makes it easier to apply a new style, as do not have to apply inline style on each Dom elements.

<p class="codepen" data-height="456" data-theme-id="dark" data-default-tab="js,result" data-user="vinceumo" data-slug-hash="jdJLge" style="height: 456px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3D perspective">
<span>See the Pen <a href="https://codepen.io/vinceumo/pen/jdJLge/">
CSS 3D perspective</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Resources

* [Defining Custom Properties: the --* family of properties](https://drafts.csswg.org/css-variables/#defining-variables)
* [Custom properties: CSS variables - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
* [var() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/var)
* [Using CSS custom properties (variables) - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)