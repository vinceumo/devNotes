---
layout: home
---

DevNotes/ TIL (Today I Learnt) is a collection of things I learned around web development. This project is inspired by [@charliegerard/dev-notes](https://github.com/charliegerard/dev-notes) repo.

{% assign counter = 0 %}
{% for post in site.posts %}
  {% assign counter = counter | plus: 1 %}
{% endfor %}

Currently: <b>{{counter}}</b> devNotes.

---