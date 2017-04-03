function Newspaper() {
  this.articles = [];
};

Newspaper.prototype.createArticle = function(url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html") {
  var article = new Article(url)
  this.articles.unshift(article)
  return article;
};

Newspaper.prototype.printArticleSummary = function() {
  return this.articles.map(function(article) {
    var listElement = document.createElement('li');
    listElement.id = article.id;
    listElement.setAttribute("onClick","openArticlePage(this.id)");
    listElement.setAttribute("open","false");
    listElement.innerHTML = article.title;
    listElement.style.maxHeight = "18.4px";
    return listElement;
  })
}

Newspaper.prototype.goToArticle = function() {
  // TODO: on click, go to Article
}
