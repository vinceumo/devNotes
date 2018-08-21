---
layout: post
title:  "Inert - Avoid keyboard trap"
date:   2018-08-21 15:49:19 +0100
categories: A11Y
---

The `inert` attribute is still into draft and no browser currently support it. The current draft currently states:

> A node (in particular elements and text nodes) can be marked as inert. When a node is inert, then the user agent must act as if the node was absent for the purposes of targeting user interaction events, may ignore the node for the purposes of text search user interfaces (commonly known as "find in page"), and may prevent the user from selecting text in that node.
>
> *[Inert subtrees - HTML- Living Standard — Last Updated 20 August 2018](https://html.spec.whatwg.org/multipage/interaction.html#inert-subtrees)*

`inert` allow us to prevent access to subtrees, so we do not activate now visible DOM elements such as form elements, links, buttons etc. It helps us as well to tell assistive technology, such as screen readers, to not read `inert` sections of your application.

## Example

In this example, I use [Inert Polyfill from WICG](https://github.com/WICG/inert).

Using this polyfill we can set a DOM element as inert by adding the `inert` attribute:

```html
<div inert>
  <a href="#">inert link</a>
  <!--  -->
</nav>
```

To remove the inert attribute with js we use:

```js
el.inert = false;
```

To add the inert attribute with js we use:

```js
el.inert = true;
```

Inert DOM elements have a red background in the following example.

<p data-height="500" data-theme-id="dark" data-slug-hash="BOaXLq" data-default-tab="result" data-user="vinceumo" data-pen-title="Inert Polyfill" class="codepen">See the Pen <a href="https://codepen.io/vinceumo/pen/BOaXLq/">Inert Polyfill</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Resources

- [Inert Polyfill - WICG](https://github.com/WICG/inert)
- [inert attribute - Chrome Platform Status](https://www.chromestatus.com/feature/5703266176335872)
- [Intro to the inert attribute - dev.to](https://dev.to/hybrid_alex/intro-to-the-inert-attribute-3d25)
- [implement the html5 inert attribute - bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=921504)
- [Building better accessibility primitives](http://robdodson.me/building-better-accessibility-primitives/)
- [📺 Inert Polyfill -- A11ycasts #02](https://www.youtube.com/watch?v=fGLp_gfMMGU)