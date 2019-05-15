Alternative to implement

```html
{{ range .Site.Pages.GroupByParam "category" "title"}}
{{ $categoryId := .Key | urlize}}
<h2 id="{{ $categoryId }}">{{ .Key }}</h2>
<ul class="list-unstyled">
    {{ range .Pages.GroupByParam "post_type" "title"}}
    {{ $post_typeId := .Key | urlize}}
    <li id="{{ $categoryId }}_{{ $post_typeId }}">
        <ul
            class="list-unstyled">
            <li>
                <h3 class="has-my-0">{{ .Key }}</h3>
            </li>
            {{ range .Pages.ByTitle }}
            <li>
                <a href="{{ .RelPermalink }}">
                    {{ .Title }}
                </a>
                <i><small>, {{ dateFormat "Jan, 2006" .Date }}</small></i>
            </li>
            {{ end }}
        </ul>
    </li>
    {{ end }}
</ul>
{{ end }}
```