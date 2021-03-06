---
type: post
showtableofcontents: false
title: Regex - 101
date: 2019-01-14T00:00:00.000+00:00
category: Tools
canonical: ""
post_type: note
---

> A regular expression, regex or regexp(sometimes called a rational expression) is a sequence of characters that define a search pattern. Usually this pattern is used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation
>
> _[Regular expression - Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)_

## Cheat sheet

| Description |  |
| ----------- | --- |
| `abc…`      | Letters |
| `123…`      | Digits |
| `\d`        | Any Digit |
| `\D`        | Any Non-digit character |
| `.`         | Any Character |
| `\.`        | Period |
| `[abc]`     | Only a, b, or c |
| `[^abc]`    | Not a, b, nor c |
| `[a-z]`     | Characters a to z |
| `[0-9]`     | Numbers 0 to 9 |
| `\w`        | Any Alphanumeric character |
| `\W`        | Any Non-alphanumeric character |
| `{n}`       | The preceding item is matched exactly _n_ times |
| `{min, }`   | The preceding item is matched _min_ or more times |
| `{min,max}` | The preceding item is matched at least min times, but not more than max times |
| `*`         | Zero or more repetitions |
| `+`         | One or more repetitions |
| `?`         | Optional character |
| `\s`        | Any Whitespace |
| `\S`        | Any Non-whitespace character |
| `^…$`       | Starts and ends |
| `(…)`       | Capture Group |
| `(a(bc))`   | Capture Sub-group |
| `(.*)`      | Capture all |
| `(abc|def)` | Matches abc or def |

## Resources

- [RegExr](https://regexr.com/)
- [Exercices - regexOne](https://regexone.com)
- [📺 Session 2: Regular Expressions - Programming - The coding train](https://www.youtube.com/watch?v=7DG3kCDx53c&list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w)
- [📺 Best of Fluent 2012: /Reg(exp){2}lained/: Demystifying Regular Expressions - Lea Verou](https://www.youtube.com/watch?v=EkluES9Rvak&t=295s)
- [Regex tutorial — A quick cheatsheet by examples](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
