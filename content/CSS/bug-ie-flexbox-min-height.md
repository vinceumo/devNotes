---
type: post
title: Bug - IE11, flexbox and min-height
date: 2018-08-09T10:53:19.000+00:00
category: CSS
post_type: note
canonical: ""
---

On Internet Explorer 11, `align-items: center;` do not center vertically, if our flex container have a `min-height`.

![IE11 flexbox center bug]({{< static "images/css-ie11-bug-flex-min-height.jpg" >}})

A small hack to fix this issue, is to use an after on our flex-container and give it an inherit min-height:

```scss
.flex-container {
  min-height: 500px;
  display: flex;
  align-items: center;

  // See Hack - CSS target only IE11 and IE10 (media query)

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    &:after {
      content: "";
      display: block;
      min-height: inherit;
      font-size: 0;
    }
  }
}
```

Fix from [IE11: align-items: center with min-height workaround - Github/flexbugs](https://github.com/philipwalton/flexbugs/issues/231)
