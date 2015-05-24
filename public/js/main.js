var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=parseJSON';
function showAdditionalInfo(self) {
    self.nextSibling.style.display = 'block';
}

function parseJSON(obj) {
    var articlesList = document.createElement('ul');
    articlesList.setAttribute('class', 'articles-list');
    for (var key in obj.value.items) {
        var value = obj.value.items[key];
        var articleItem = document.createElement('li');

        var articleMainInfo = document.createElement('div');
        articleMainInfo.setAttribute('onclick', 'showAdditionalInfo(this)');
        articleMainInfo.setAttribute('class', 'article-main-info');
        var articleTitle = document.createElement('h2');
        articleTitle.innerHTML = value.title;
        var articleImage = document.createElement('img');
        articleImage.setAttribute('src', value.enclosure.url);
        articleMainInfo.appendChild(articleTitle);
        articleMainInfo.appendChild(articleImage);

        var articleAdditionalInfo = document.createElement('div');
        articleAdditionalInfo.setAttribute('class', 'article-additional-info');
        var articleLinkBlock = document.createElement('div');
        articleLinkBlock.innerHTML = 'Link: ';
        var articleLink = document.createElement('a');
        articleLink.setAttribute('href', value.link);
        articleLink.innerHTML = value.link;
        articleLinkBlock.appendChild(articleLink);
        var articleDescription = document.createElement('div');
        articleDescription.setAttribute('class', 'article-description');
        articleDescription.innerHTML = value.description;
        articleAdditionalInfo.appendChild(articleDescription);
        articleAdditionalInfo.appendChild(articleLinkBlock);

        articleItem.appendChild(articleMainInfo);
        articleItem.appendChild(articleAdditionalInfo);
        articlesList.appendChild(articleItem);
    }
    document.getElementById('container').appendChild(articlesList);
}

function addScript(src) {
    var elem = document.createElement("script");
    elem.src = src;
    document.head.appendChild(elem);
}

addScript(url);
