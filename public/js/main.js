(function(){
    var elem = document.createElement("script");
    elem.src = 'http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=parseJSON';
    document.head.appendChild(elem);

    window.parseJSON = function(obj) {
        delete window.parseJSON;

        var template = function(templateString, variables) {
            return templateString.replace(/\{\{ (.+?) \}\}/g, function(str, p1) {
                return variables[p1];
            });
        };

        var articlesList = '';
        var html = '<li>' +
            '<div class="article-main-info">' +
            '<h2>{{ title }}</h2>' +
            '<img src="{{ img }}" />' +
            '</div>' +
            '<div class="article-additional-info">' +
            '<div class="article-description">{{ description }}</div>' +
            '<div>Link: <a href="{{ link }}">{{ link }}</a></div>' +
            '</div>' +
            '</li>';
        for (var key in obj.value.items) {
            if (obj.value.items.hasOwnProperty(key)) {
                var value = obj.value.items[key];
                articlesList += template(html, {title: value.title, img: value.enclosure.url, description: value.description,
                    link: value.link});
            }
        }

        document.getElementById('articles-list').innerHTML = articlesList;
        document.getElementById('articles-list').onclick = function(e) {
            var articleMainInfo = e.srcElement;
            if (articleMainInfo.className == 'article-main-info')
                articleMainInfo.nextSibling.style.display = 'block';
        };
    };
})();
