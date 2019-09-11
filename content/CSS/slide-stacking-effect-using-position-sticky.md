+++
canonical = ""
category = "CSS"
date = "2019-09-10T23:00:00+00:00"
draft = true
post_type = "post"
showtableofcontents = true
title = "Slide stacking effect using position sticky"
type = "post"

+++
![Demo gif]({{< static "images/scroll-gif.gif" >}})

Recently I was looking to create a slide (card) stacking effect on scroll. The closest resource I could find about this effect was [Card Stack: Scroll Effect by Sanjeev Yadav](https://medium.com/@sanjeevy133/card-stack-scroll-effect-486cc3b55312). I wanted to look if I could recreate a similar effect only with CSS.

## Basic effect with position sticky

Position sticky allows to position an element like position fixed relative to its parent until it reaches the boundary of its parent.

> Sticky positioning can be thought of as a hybrid of relative and fixed positioning. A stickily positioned element is treated as relatively positioned until it crosses a specified threshold, at which point it is treated as fixed until it reaches the boundary of its parent. 
>
> [MDN - Sticky positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Sticky_positioning)

We can use position sticky to stick each slide, at the top at the parent and have a fixe height.

CSS:

```scss
.stacking-slide {
    height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
  
//   Not needed if 100vh
//   &:nth-last-child(1) {
//      height: 100vh;
//   }
}
```

HTML:

```html
<section class="stacking-slide">
    <h2>Section 1</h2>
</section>
<section class="stacking-slide">
    <h2>Section 2</h2>
</section>
<section class="stacking-slide">
    <h2>Section 3</h2>
</section>
<section class="stacking-slide">
    <h2>Section 4</h2>
</section>
<section class="stacking-slide">
    <h2>Section 5</h2>
</section>
```

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="vinceumo" data-slug-hash="KKPoVGL" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Slide Stacking Effect">
  <span>See the Pen <a href="https://codepen.io/vinceumo/pen/KKPoVGL/">
  Slide Stacking Effect</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Support

<p class="ciu_embed" data-feature="css-sticky" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
    <a href="http://caniuse.com/#feat=css-sticky">Can I Use css-sticky?</a> Data on support for the css-sticky feature across the major browsers from caniuse.com.
</p>

Position sticky has great support, but if you need to support older browsers you can use a [polyfill](https://github.com/wilddeer/stickyfill/).

## Vertical Scroll Snap

CSS scroll snap allows us to make each slide position nicely at the top of the viewport after scroll.

> CSS Scroll Snap is a module of CSS that introduces scroll snap positions, which enforce the scroll positions that a scroll container’s scrollport may end at after a scrolling operation has completed.
>
> [MDN - CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)

To use scroll snap we are going to wrap our sections into `.vertical-scroll-snap`. This class is going to have a fixe height of 100vh (Same heigh as our slides) and `overflow-y: scroll` so the user can scroll between sections.

Next step we are going to look into scroll snap. First we are going the set `scroll-snap-type` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)). This property allows us how strictly snap points are enforced on scroll. We are going to set it to `y mandatory`. `y` indicating that the snap positions is in its vertical axis only. `mandatory` that the scroll container will rest on a snap point of the section if it isn't currently scrolled.

Then we need to tell our sections which part need to be aligned to the container. We are going to use `scroll-snap-align` ([CSS Tricks](https://css-tricks.com/almanac/properties/s/scroll-snap-align/)) with the value `start`.

HTML:

```html
<div class="vertical-scroll-snap">
  <section class="stacking-slide">
    <h2>Section 1</h2>
  </section>
  <!-- ... -->
</div>
```

SCSS:

```scss
.vertical-scroll-snap {
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    max-height: 100vh;
}

.stacking-slide {
    scroll-snap-align: start;
    // ...
}
```

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-user="vinceumo" data-slug-hash="aboYLBW" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vertical Scroll Snap">
  <span>See the Pen <a href="https://codepen.io/vinceumo/pen/aboYLBW/">
  Vertical Scroll Snap</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Support

<p class="ciu_embed" data-feature="css-snappoints" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
    <a href="http://caniuse.com/#feat=css-snappoints">Can I Use css-snappoints?</a> Data on support for the css-snappoints feature across the major browsers from caniuse.com.
</p>

CSS Scroll snap has good support, if you need to support older browsers you can use a [polyfill](https://www.npmjs.com/package/css-scroll-snap-polyfill).

## Add some nice transition using Intersection Observer API.

The Intersection Observer API, allows us to detect when an element enters the viewport. We can trigger a callback function when this element enters or leave the viewport.

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
>
> [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

In the following example, we are adding the class `.is-intersecting` when a `.stacking-slide` enter 10% of the viewport. And we remove this class when the slide leaves it. This allows us to add some transitions using CSS.

JS:

```js
const sectionEls = document.querySelectorAll(".stacking-slide");

const options = {
  rootMargin: "-10% 0% -10% 0%"
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-intersecting");
    } else {
      entry.target.classList.remove("is-intersecting");
    }
  });
}, options);

sectionEls.forEach(el => observer.observe(el));
```


<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="vinceumo" data-slug-hash="WNeJRZo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Intersection Observer">
  <span>See the Pen <a href="https://codepen.io/vinceumo/pen/WNeJRZo/">
  Intersection Observer</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Support

<p class="ciu_embed" data-feature="intersectionobserver" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
    <a href="http://caniuse.com/#feat=intersectionobserver">Can I Use intersectionobserver?</a> Data on support for the intersectionobserver feature across the major browsers from caniuse.com.
  </p>

The Intersection Observer API has good support, if you need to support older browsers you can use a [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

---

Thanks for reading hope you enjoyed this small article.

- [Follow me on twitter](https://twitter.com/vince_umo)
- [Follow me on Github](https://github.com/vinceumo)
- [Follow me on dev.to](https://dev.to/vinceumo)