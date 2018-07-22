---
layout: post
title:  "IIFE template use at DAM"
date:   2018-07-21 20:32:19 +0100
categories: Javascript
---

```js
;(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        var ctas = document.querySelectorAll("button.cta");

        Array.prototype.forEach.call(ctas, function (el, i) {
            var currentCta = ctas[i];

            //Event handler 1 for exemple click
            currentCta.addEventListener("click", function () {
                functionEventHandlerBehavior1(ctas, currentCta);
            });

            //Event handler 2 for exemple touchstart
            currentCta.addEventListener("touchstart", function () {
                functionEventHandlerBehavior2(ctas, currentCta);
            });

            //Event handler 3 for exemple mouseover
            currentCta.addEventListener("mouseover", function () {
                functionEventHandlerBehavior3(ctas, currentCta);
            });
        });

    });

    function functionEventHandlerBehavior1(elements, currentElement) {
        // Do things
    }

    function functionEventHandlerBehavior2(elements, currentElement) {
        // Do things
    }

    function functionEventHandlerBehavior3(elements, currentElement) {
        // Do things
    }
})();
```