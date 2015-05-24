var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=parseJSON';
function parseJSON(obj) {
    var articlesList = jQuery('<ul/>', {'class': 'articles-list'});
    for (var key in obj.value.items) {
        var value = obj.value.items[key];
        var articleItem = jQuery('<li/>');

        var articleMainInfo = jQuery('<div/>', {'class': 'article-main-info'});
        var articleTitle = jQuery('<h2/>', {'text': value.title});
        var articleImage = jQuery('<img/>', {'src': value.enclosure.url});
        articleMainInfo.append(articleTitle).append(articleImage);

        var articleAdditionalInfo = jQuery('<div/>', {'class': 'article-additional-info'});
        var articleLink = jQuery('<div/>', {'text': 'Link: '});
        articleLink.append(jQuery('<a/>', {'href': value.link, 'text': value.link}));
        var articleDescription = jQuery('<div/>', {'class': 'article-description', 'text': value.description});
        articleAdditionalInfo.append(articleDescription).append(articleLink);

        articleItem.append(articleMainInfo).append(articleAdditionalInfo);
        articlesList.append(articleItem);
    }
    jQuery('#container').append(articlesList);
    jQuery('.article-additional-info').hide();
    jQuery('.article-main-info').on('click', function(){
        jQuery(this).next().show();
    });
}

window.onload = function(){
    jQuery.ajax({
        url: url,
        dataType: 'jsonp'
    });
};
