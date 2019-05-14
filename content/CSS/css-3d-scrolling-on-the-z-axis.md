---
type: post
title: CSS 3D - Scrolling on the z-axis
date: 2019-03-21T00:00:00.000+00:00
category: CSS
canonical: ""
post_type: post
---

![Demo gif]({{ site.baseurl }}/dist/img/css3d-z-scroll-demo.gif)

In this article, we are going to create a small 3D scene, where the user can scroll on the z-axis. You can find the final code of this tutorial on [github](https://github.com/vinceumo/CSS-3D-Scrolling-z-axis-demo/), and the demo if you follow this [link](https://vinceumo.github.io/CSS-3D-Scrolling-z-axis-demo/).

This article assumes that you already have some knowledge about CSS and JS. We are going to use CSS custom properties, if you are not familiar with this you can read [CSS custom properties - Cheatsheet](https://vinceumo.github.io/devNotes/css/2019/02/20/css-customs-properties.html).

## Introduction to CSS 3D

When speaking of CSS 3D, we really speak about CSS3 transform 3D. This method allows us to use the `transform` CSS property to set perspective or rotation on the z-axis to our DOM elements.

> The transform CSS property lets you rotate, scale, skew or translate an element. It modifies the coordinate space of the CSS visual formatting model.
>
> [transform - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

To be allowed to render our Dom elements in a 3D space we need to have a look in the following properties:

- Perspective
- Perspective origin
- Transform Z

### Perspective

`perspective` is a CSS property that set the distance between z=0 and the user. The smaller is the perspective value the greater will be the distortion of our see. (Try to change the value of `scenePerspective` in the codePen example below).

```css
.container-scene {
  perspective: 100px;
}
```

The value of `perspective` is a [length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length).

![perspective illustration]({{ site.baseurl }}/dist/img/css3d-z-scroll-perspective1.png)

Try to set the value of `scenePerspective` to 0 and 70 in the example below. You can notice that our cube get no perspective at all if its value is set to 0. If the value is set to 70, you can see a really strong distortion of the cube perspective. The smaller the perspective value is, the deeper it is.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-user="vinceumo" data-slug-hash="jdJLge" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3D perspective">
<span>See the Pen <a href="https://codepen.io/vinceumo/pen/jdJLge/">
CSS 3D perspective</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

To be able to render a 3D space, we need to specify `transform-style: preserve-3d;` on the child elements. In the above example, it set to our `.cube`. By default, the elements are flattened.

```css
.container-scene {
  perspective: 400px;
}

.container-scene .cube {
  transform-style: preserve-3d;
}
```

### Perspective origin

> The `perspective-origin` CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.
>
> [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)

This property basically allows us to move the vanishing point of our 3D scene.

```css
.container-scene {
  perspective: 400px;
  perspective-origin: 50% 100%; /*X position value, Y position value*/
}

.container-scene .cube {
  transform-style: preserve-3d;
}
```

For both x and y we can set the position using percentages. but we can as well use the following values:

- x position:
  - `left` = 0%
  - `center` = 50%
  - `right` = 100%
- y position
  - `top` = 0%
  - `center` = 50%
  - `bottom` = 50%

![Perspective origin illustration]({{ site.baseurl }}/dist/img/css3d-z-scroll-perspective-origin.png)

In the following example, you can change the value of `perspectiveOriginX` and `perspectiveOriginY`.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-user="vinceumo" data-slug-hash="wOwzBY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3D perspective origin">
<span>See the Pen <a href="https://codepen.io/vinceumo/pen/wOwzBY/">
CSS 3D perspective origin</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Transform Z

We already mentioned earlier that the `transform` CSS property allows us to set our elements in a 3D space.

Transform comes with different functions to transform our elements in 3D:

- rotateX(angle) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX)
- rotateY(angle) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)
- rotateZ(angle) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ)
- translateZ(tz) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ)
- scaleZ(sz) - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ)

As we saw in the illustration in the `perspective` section. `translateZ()` allows us to position an element along the z-axis of the 3D space. Alternately we can use the `translate3D(x, y, z)` CSS function.

In the following example, you can play with the Z-axis position of the `.cube` and `.face-` by changing the value of `cubeTranslateZ` and `cubeFacesTranslateZ`.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-user="vinceumo" data-slug-hash="VRZKEB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3D Transform Z">
<span>See the Pen <a href="https://codepen.io/vinceumo/pen/VRZKEB/">
CSS 3D Transform Z</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Scroll on the z-axis

Now that we have a good understanding of how CSS 3D works we are going to create a 3D scene, where we are going to be able to scroll on the z-axis.

### Set the scene

We are going to create a page that lists out all the films of Studio Ghibli. Each film is going to be a card positioned on the z-axis of our scene. Feel free to fork or [download](https://codepen.io/vinceumo/share/zip/JzaXqN) the following codepen as a starter material to follow along. I'm using [axios](https://github.com/axios/axios) with [Studio Ghibli API](https://ghibliapi.herokuapp.com/) to populate this page.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html, result" data-user="vinceumo" data-slug-hash="JzaXqN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3d Scrolling on the z axis - Step 1"> <span>See the Pen <a href="https://codepen.io/vinceumo/pen/JzaXqN/"> CSS 3d Scrolling on the z axis - Step 1</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p>

If you want to follow along with your own content we will need the following markup:

```html
<div class="viewport">
  <div class="scene3D-container">
    <div class="scene3D">
      <div>Card1</div>
      <div>Card2</div>
      <!--Etc.-->
    </div>
  </div>
</div>
```

#### Styling

First, we are going to set our [CSS custom properties](https://vinceumo.github.io/devNotes/css/2019/02/20/css-customs-properties.html) (CSS variables). Some of these variables are going to be transformed using JS. They are going to help us to interact with the scene.

```scss
:root {
  --scenePerspective: 1;
  --scenePerspectiveOriginX: 50;
  --scenePerspectiveOriginY: 30;
  --itemZ: 2; // Gap between each cards
  --cameraSpeed: 150; // Where 1 is the fastest, this var is a multiplying factor of --scenePerspective and --filmZ
  --cameraZ: 0; // Initial camera position
  --viewportHeight: 0; // Viewport height will allow us to set the depth of our scene
}
```

`.viewport` will allow us to set the height of the window. We will later use it to set the depth of the scene and use the scrollbar to navigate in the z-axis.

```scss
.viewport {
  height: calc(var(--viewportHeight) * 1px);
}
```

`.scene3D-container` sets the scene perspective and the perspective origin. It is position fixed so it stays always on screen. We are as well going to set the perspective origin.

```scss
.viewport .scene3D-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);
  perspective-origin: calc(var(--scenePerspectiveOriginX) * 1%) calc(
      var(--scenePerspectiveOriginY) * 1%
    );
  will-change: perspective-origin;
  transform: translate3d(
    0,
    0,
    0
  ); //Allows Hardware-Accelerated CSS, so transitions are smoother
}
```

`.scene3D` sets the position of our scene on the z-axis, This will behave a bit like moving a camera on the z-axis. But really we are moving the scene and the camera (viewport) is fixed. In the rest of this article, we are going to use the camera comparison. `.scene3D` takes the full height and width of the viewport.

```scss
.viewport .scene3D-container .scene3D {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  transform-style: preserve-3d;
  transform: translateZ(calc(var(--cameraZ) * 1px));
  will-change: transform;
}
```

Last but not least we are going to position our cards in the scene. All items are position absolute. Odd items are position on the left, even ones on the right.

We use SCSS to programmatically translate each item. On the **X** and **Y** axis we randomly translate them between -25% and 25% for X, between -50% and 50% for Y. We use a `@for` loop so each item can be translated on the **z** axis multiply by their indexes.

```scss
.viewport .scene3D-container .scene3D {
  > div {
    position: absolute;
    display: block;
    width: 100%;
    top: 40%;

    @media only screen and (min-width: 600px) {
      width: 45%;
    }

    &:nth-child(2n) {
      left: 0;
    }

    &:nth-child(2n + 1) {
      right: 0;
    }

    @for $i from 0 through 25 {
      &:nth-child(#{$i}) {
        transform: translate3D(
          random(50) - 25 * 1%,
          random(100) - 50 * 1%,
          calc(var(--itemZ) * var(--cameraSpeed) * #{$i} * -1px)
        );
      }
    }
  }
}
```

The CSS is now done, we have a 3D scene. In the following parts of this article, we are going to write some javascript that going to allow us to navigate in the scene.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-user="vinceumo" data-slug-hash="WmgxBG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3d Scrolling on the z axis - Step 2"> <span>See the Pen <a href="https://codepen.io/vinceumo/pen/WmgxBG/"> CSS 3d Scrolling on the z axis - Step 2</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p>

#### Scrolling on z-axis (move camera)

To be able to scroll, we need first to set the value of `--viewportHeight` which emulates the depth of the scene.

The depth of the scene is equal to the addition of the following:

- The height of the user window
  - window.innerHeight
- The `.scene3D-container` perspective
  - `var(--scenePerspective) * var(--cameraSpeed)`
- The translate z value of our last item
  - `var(--itemZ) * var(--cameraSpeed) * items.length`

Let's create a `setSceneHeight()` function that will update the value of `--viewportHeight` on load.

```js
document.addEventListener("DOMContentLoaded", function() {
  setSceneHeight();
});

function setSceneHeight() {
  const numberOfItems = films.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}
```

Our page has now a scrollbar, but we are still unable to scroll. We need to add an event listener that will listen to the user scrolling. The scroll event will call a `moveCamera()` function. It will update the value of `--cameraZ` with the value of [window.pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset).

```js
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", moveCamera);
  setSceneHeight();
});

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  // ...
}
```

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="js,result" data-user="vinceumo" data-slug-hash="pYxpLW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3d Scrolling on the z axis - Step 3"> <span>See the Pen <a href="https://codepen.io/vinceumo/pen/pYxpLW/"> CSS 3d Scrolling on the z axis - Step 3</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p>

#### Move camera angle

Finally, let's make our scene a bit more dynamic. On [mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event) we are going to change the values of `scenePerspectiveOriginX` and `scenePerspectiveOriginY`. This will give the illusion that the camera move. The items will stay straight in the scene. If you want to give a more realistic camera rotation movement, you could apply [rotate3d()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d) on the scene.

First, we are going to store the initial values of these two variables in a `perspectiveOrigin` object, we are going to set a `perspectiveOrigin.maxGap` value which is going to limit the maximum and minimum values of the variables. For example if `scenePerspectiveOriginY` is equal to 50%. On mousemove, the new value will be between 40% and 60%.

```js
const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};
```

If the user cursor is at the centre of the screen, we will set the values of `--scenePerspectiveOriginX` and `--scenePerspectiveOriginX` as the initial ones. The further the cursor moves away from the centre, the bigger will increase/decrease these values. If the user moves to the top left corner the values will increase, on the bottom right corner they will decrease.

The `moveCameraAngle()` function is going to update the values:

- `xGap` and `yGap` return the mouse position of the user in percentage on the X and Y axis, compare to the centre of the window.
- `newPerspectiveOriginX` and `newPerspectiveOriginY` return the new perspective origin.

```js
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", moveCamera);
  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 100) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 100) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}
```

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="js,result" data-user="vinceumo" data-slug-hash="NJEwwo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS 3d Scrolling on the z axis - Step 4"> <span>See the Pen <a href="https://codepen.io/vinceumo/pen/NJEwwo/"> CSS 3d Scrolling on the z axis - Step 4</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p>

Our scene is now finished 🎉. I hope you enjoyed this article 😃

## Resources

- [perspective - Codrops](https://tympanus.net/codrops/css_reference/perspective/)
- [perspective - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [transform-style - Codrops](https://tympanus.net/codrops/css_reference/transform-style/)
- [transform-style - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
- [perspective-origin - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
- [Things to Watch Out for When Working with CSS 3D - CSS-tricks](https://css-tricks.com/things-watch-working-css-3d/)

---

- [Follow me on twitter](https://twitter.com/vince_umo)
- [Follow me on Github](https://github.com/vinceumo)
- [Follow me on dev.to](https://dev.to/vinceumo)
