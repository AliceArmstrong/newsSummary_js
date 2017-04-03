var newspaper = new Newspaper();

// function for listing articles

function showArticles() {
  var articlesList = document.getElementById('list-of-articles');
  articlesList.innerHTML = "";
  newspaper.createArticle();
  newspaper.printArticleSummary().forEach(function(element){
    articlesList.appendChild(element);
  });
}
