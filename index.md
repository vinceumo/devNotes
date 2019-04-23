---
layout: home

---
👋 My name is Vince, I'm lead Front End Developer at [Dam Digital](https://www.damdigital.com/), London, UK.

devNotes is a collection of notes and posts about things I learned around web development.

You can check out my main posts on [dev.to](https://dev.to/vinceumo) or on [medium freeCodeCamp](https://medium.freecodecamp.org/@vince_umo_34593).

{% assign counter = 0 %}
{% for post in site.posts %}
{% assign counter = counter | plus: 1 %}
{% endfor %}

Currently: <b>{{counter}}</b> devNotes.

***