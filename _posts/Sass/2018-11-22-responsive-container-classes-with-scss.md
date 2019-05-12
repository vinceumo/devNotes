---
title: Responsive container classes with SCSS
layout: post
date: 2018-11-22T10:51:05.000+00:00
category: Sass
canonical: ""
post_type: snippet
---

## SCSS input:

```scss
@mixin min($bp, $max: "null", $device: "screen") {
  @if $max == "null" {
    @media only #{$device} and (min-width: #{$bp}) {
      @content;
    }
  } @else {
    @media only #{$device} and (min-width: #{$bp}) and (max-width: #{$max}) {
      @content;
    }
  }
}

@function bp($bp) {
  @return map-get($breakpoints, $bp);
}

$breakpoints: (
  na: 0px,
  // For BS grid
    xs: 320px,
  // Smartphone
    sm: 600px,
  // Tablets
    md: 900px,
  // Tablets Landscape and small desktops
    lg: 1200px,
  // Desktops
    xl: 1800px,
  // Large Desktop
);

@function container($container-size, $true-val: false) {
  @return map-get($container-sizes, $container-size);
}

$container-sizes: (
  sm: map-get($breakpoints, sm) - 30px,
  md: map-get($breakpoints, md) - 40px,
  lg: map-get($breakpoints, lg) - 50px,
  xl: map-get($breakpoints, xl) - 400px
);

.container {
  padding-right: 1rem;
  padding-left: 1rem;

  &:not(.is-fluid) {
    margin: 0 auto;

    @each $bp, $container-size in $container-sizes {
      @include min(#{bp(#{$bp})}) {
        width: 100%;
        max-width: container(#{$bp});
      }
    }
  }
}

@each $bp, $container-size in $container-sizes {
  .container-#{$bp} {
    margin: 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;

    $i: index($container-sizes, $bp $container-size);

    @for $j from $i through length($container-sizes) {
      @include min(#{bp(nth(nth($container-sizes, $j), 1))}) {
        max-width: container(#{nth(nth($container-sizes, $j), 1)});
      }
    }
  }
}
```

## CSS output:

```css
.container {
  padding-right: 1rem;
  padding-left: 1rem;
}
.container:not(.is-fluid) {
  margin: 0 auto;
}
@media only screen and (min-width: 600px) {
  .container:not(.is-fluid) {
    width: 100%;
    max-width: 570px;
  }
}
@media only screen and (min-width: 900px) {
  .container:not(.is-fluid) {
    width: 100%;
    max-width: 860px;
  }
}
@media only screen and (min-width: 1200px) {
  .container:not(.is-fluid) {
    width: 100%;
    max-width: 1150px;
  }
}
@media only screen and (min-width: 1800px) {
  .container:not(.is-fluid) {
    width: 100%;
    max-width: 1400px;
  }
}

.container-sm {
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
}
@media only screen and (min-width: 600px) {
  .container-sm {
    max-width: 570px;
  }
}
@media only screen and (min-width: 900px) {
  .container-sm {
    max-width: 860px;
  }
}
@media only screen and (min-width: 1200px) {
  .container-sm {
    max-width: 1150px;
  }
}
@media only screen and (min-width: 1800px) {
  .container-sm {
    max-width: 1400px;
  }
}

.container-md {
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
}
@media only screen and (min-width: 900px) {
  .container-md {
    max-width: 860px;
  }
}
@media only screen and (min-width: 1200px) {
  .container-md {
    max-width: 1150px;
  }
}
@media only screen and (min-width: 1800px) {
  .container-md {
    max-width: 1400px;
  }
}

.container-lg {
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .container-lg {
    max-width: 1150px;
  }
}
@media only screen and (min-width: 1800px) {
  .container-lg {
    max-width: 1400px;
  }
}

.container-xl {
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
}
@media only screen and (min-width: 1800px) {
  .container-xl {
    max-width: 1400px;
  }
}
```
