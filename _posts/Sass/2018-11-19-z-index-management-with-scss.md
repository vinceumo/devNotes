---
title: Z-index management with SCSS
date: 2018-11-19 20:22
layout: post
categories:
- Sass

---
```scss

// Set our z-indexes map
$z-indexes: (
  "up-btn", //60
  "cookies-info", //50
  "left-nav", //40
  "footer", //30
  "top-nav", //20
  "content", //10
);

// Z function return the z-index value
@function z($name) {
    @if index($z-indexes, $name) {
        @return ((length($z-indexes) - index($z-indexes, $name)) + 1)*10;
    } @else {
        @warn 'There is no item "#{$name}" in this list; choose one of: #{$z-indexes}';
        @return null;
    }
}

//------

.content{z-index: z('content');}
  .img-1{z-index: z('content') + 2;}
  .img-2{z-index: z('content') + 1;}
.top-nav{z-index: z('top-nav');}
  .mkt-flash{z-index: z('top-nav') - 1;} 
.left-nav{z-index: z('left-nav');}
.footer{z-index: z('footer');}
.cookies-info{z-index: z('cookies-info');}
.up-btn{z-index: z('up-btn');}
```

## Example 

<p data-height="500" data-theme-id="0" data-slug-hash="MmQrbK" data-default-tab="css,result" data-user="vinceumo" data-pen-title="z-index Sass management" class="codepen">See the Pen <a href="https://codepen.io/vinceumo/pen/MmQrbK/">z-index Sass management</a> by Vincent Humeau (<a href="https://codepen.io/vinceumo">@vinceumo</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>