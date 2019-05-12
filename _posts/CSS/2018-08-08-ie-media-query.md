---
layout: post
title: Hack - CSS target only IE11 and IE10 (media query)
date: 2018-08-08T10:57:19.000+00:00
category: CSS
post_type: snippet
canonical: ""
---

Small hack, to apply CSS to only Internet Explorer 10 and 11, using media query:

```css
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /* Your styles */
}
```

## Resources

- [How to Target Internet Explorer 10 and 11 in CSS](https://philipnewcomer.net/2014/04/target-internet-explorer-10-11-css/)
- [Detecting IE11 using CSS Capability/Feature Detection - Stackoverflow](https://stackoverflow.com/questions/18907131/detecting-ie11-using-css-capability-feature-detection)
