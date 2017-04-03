var Article = (function() {
  var incrementedId = 1;
  return function Article(url){
    var title;
    fetch(url)
      .then(function(responseObj) {
        title = responseObj.content.webTitle
      })
      this.title = title
      this.id = "article" + incrementedId++;
  }
})();





// var Article = function(){
//   return function Article(ArticleText = "") {
//     this.text = ArticleText;
//   }
// }();
//
// // knows and returns text
// Article.prototype.stubbedText = function(char) {
//   return this.text.substring(0, char) + "...";
// };
//
// // can have a headline/picture/truncated version
