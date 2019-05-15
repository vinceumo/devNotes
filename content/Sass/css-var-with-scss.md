---
type: post
title: CSS custom properties (CSS variables) with SCSS
date: 2018-07-25T09:00:00.000+00:00
category: Sass
post_type: note
canonical: ""
---

While working on my personal SCSS boilerplate, [Atomic Bulldog](https://github.com/vinceumo/atomic-bulldog). I wanted to implement a strict set of variables using maps. The goal is to create a consistent design system and to be able to use CSS variables for easy theming.

The base structure of my variable folder:

```t
_aspect-ratios.scss
_box-shadow.scss
_breakpoints.scss
_colors.scss
_container-sizes.scss
_font-families.scss
_font-sizes.scss
_grid.scss
_root-classes.scss
_spacers.scss
_z-index.scss
```

When looking on how to implement CSS variables in SASS, I found this great article, [CSS4 Variables and Sass](https://codepen.io/jakealbaugh/post/css4-variables-and-sass), from Jake Albaugh. It helped me to create this template for each variable file:

In `settings.scss`, we have a flag to enable the use of CSS variables globally.

```scss
$use-css-var: true;
```

In our variable file, I follow this template:

```scss
// ------------------------------
// Sass Variables
// ------------------------------
$variable-prefix: --variable-; // CSS Variable prefix

$variables: (
  val1: 1,
  val2: 2,
  val3: 3 // etc.
);

// ------------------------------
// Set variable function
// ------------------------------
@function myVariable($variable, $true-val: false) {
  @if $use-css-var == true {
    @if $true-val == true {
      @return map-get($variables, $variable); //True Val
    } @else {
      @return var(#{$variable-prefix}#{$variable}); //CSS Var
    }
  } @else {
    @return map-get($variables, $variable); //Disabled CSS Var
  }
}

// If $use-css-var == true
// myVariable(val1) => var(--variable-val1)
// myVariable(val2, true) => 2
// If $use-css-var == false
// myVariable(val3) => 3
// myVariable(val2, true) => 2

// ------------------------------
// Set root variables
// ------------------------------
@if $use-css-var == true {
  :root {
    @each $name, $variable in $variables {
      #{$variable-prefix}#{$name}: $variable;
    }
  }
}

// Output if $use-css-var == true
// :root{
//   --variable-val1: 1;
//   --variable-val2: 2;
//   --variable-val3: 3;
//   /*etc.*/
// }
```

Example for spacer variables:

```scss
// ------------------------------
// Sass Variables
// ------------------------------
$spacer-reference: 1rem;
$spacer-prefix: --spacer-;
$spacers: (
  0: 0,
  1: (
    $spacer-reference * 0.25
  ),
  2: (
    $spacer-reference * 0.5
  ),
  3: $spacer-reference,
  4: (
    $spacer-reference * 1.25
  ),
  5: (
    $spacer-reference * 1.5
  ),
  6: (
    $spacer-reference * 3
  ),
  7: (
    $spacer-reference * 6
  ),
  8: (
    $spacer-reference * 9
  ),
  9: (
    $spacer-reference * 12
  )
);

// ------------------------------
// Set spacer function
// ------------------------------
@function spacer($spacer, $true-val: false) {
  @if $use-css-var == true {
    @if $true-val == true {
      @return map-get($spacers, $spacer); //True Val
    } @else {
      @return var(#{$spacer-prefix}#{$spacer}); //CSS Var
    }
  } @else {
    @return map-get($spacers, $spacer); //Disabled CSS Var
  }
}

// ------------------------------
// Set root variables
// ------------------------------
@if $use-css-var == true {
  :root {
    @each $name, $spacer in $spacers {
      #{$spacer-prefix}#{$name}: $spacer;
    }
  }
}
```

With deep maps, (Colours):

```scss
// ------------------------------
// Sass Variables
// ------------------------------
$color-prefix: --color-;
$color-themes: (
  primary: (
    base: #4c5c8c,
    dark: darken(#4c5c8c, 15%),
    light: lighten(#4c5c8c, 15%),
    transparent: transparentize(#4c5c8c, 0.5),
    contrast: #ffffff
  ),
  secondary: (
    base: #212529,
    dark: darken(#212529, 15%),
    light: lighten(#212529, 15%),
    transparent: transparentize(#212529, 0.5),
    contrast: #ffffff
  ),
  text: (
    base: #212529,
    dark: darken(#212529, 15%),
    light: lighten(#212529, 15%),
    transparent: transparentize(#212529, 0.5),
    contrast: #ffffff
  ),
  link: (
    base: #4b7e9e,
    dark: darken(#4b7e9e, 15%),
    light: lighten(#4b7e9e, 15%),
    transparent: transparentize(#4b7e9e, 0.5),
    contrast: #ffffff
  ),
  success: (
    base: #4b9b50,
    dark: darken(#4b9b50, 15%),
    light: lighten(#4b9b50, 15%),
    transparent: transparentize(#4b9b50, 0.5),
    contrast: #ffffff
  ),
  danger: (
    base: #c65556,
    dark: darken(#c65556, 15%),
    light: lighten(#c65556, 15%),
    transparent: transparentize(#c65556, 0.5),
    contrast: #ffffff
  ),
  warning: (
    base: #d3b354,
    dark: darken(#d3b354, 15%),
    light: lighten(#d3b354, 15%),
    transparent: transparentize(#d3b354, 0.5),
    contrast: #ffffff
  ),
  light: (
    base: #efe5cf,
    dark: darken(#efe5cf, 15%),
    light: lighten(#efe5cf, 15%),
    transparent: transparentize(#efe5cf, 0.5),
    contrast: #343a40
  ),
  dark: (
    base: #343a40,
    dark: darken(#343a40, 15%),
    light: lighten(#343a40, 15%),
    transparent: transparentize(#343a40, 0.5),
    contrast: #efe5cf
  )
);

// ------------------------------
// Set color function
// ------------------------------
// retrieve color from map with Sass ie. `color(primary, base)`
@function color($color-name, $color-variant: null, $true-val: false) {
  // if we enable css var
  @if $use-css-var == true {
    // we need to return the color value
    @if $true-val == true {
      // color variant is optional
      @if ($color-variant != null) {
        // map inception, need two deep
        @return map-get(map-get($color-themes, $color-name), $color-variant);
      } @else {
        // Default color
        @return map-get(map-get($color-themes, $color-name), base);
      } // if we're only returning the CSS4 variable
    } @else {
      // color variant is optional
      @if ($color-variant != null) {
        // map inception, need two names
        @return var(#{$color-prefix}#{$color-name}-#{$color-variant});
      } @else {
        // Default color, one name
        @return var(#{$color-prefix}#{$color-name}-base);
      }
    }
  } @else {
    // color variant is optional
    @if ($color-variant != null) {
      // map inception, need two deep
      @return map-get(map-get($color-themes, $color-name), $color-variant);
    } @else {
      // Default color
      @return map-get(map-get($color-themes, $color-name), base);
    }
  }
}

// ------------------------------
// Set root variables
// ------------------------------
@if $use-css-var == true {
  :root {
    @each $name, $color in $color-themes {
      @if type-of($color) == "map" {
        @each $subname, $subcolor in $color {
          #{$color-prefix}#{$name}-#{$subname}: $subcolor;
        }
      } @else if type-of($color) == "color" {
        #{$color-prefix}#{$name}: $color;
      }
    }
  }
}
```
