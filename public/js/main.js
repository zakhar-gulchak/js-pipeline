var parseJSON = function(obj) {
    delete window.parseJSON;

    var articlesList = '';
    for (var key in obj.value.items) {
        var value = obj.value.items[key];

        var articleMainInfo = '<div class="article-main-info" onclick="this.nextSibling.style.display = \'block\';">' +
            '<h2>' + value.title + '</h2>' +
            '<img src=" ' + value.enclosure.url + '" />' +
            '</div>';

        var articleAdditionalInfo = '<div class="article-additional-info">' +
            '<div class="article-description">' + value.description + '</div>' +
            '<div>Link: <a href="' + value.link + '">' + value.link + '</a></div>' +
            '</div>';

        articlesList += '<li>' + articleMainInfo + articleAdditionalInfo + '</li>';
    }

    document.getElementById('container').innerHTML = '<ul class="articles-list">' + articlesList + '</ul>';
};

(function(){
    var elem = document.createElement("script");
    elem.src = 'http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=parseJSON';
    document.head.appendChild(elem);
})();
