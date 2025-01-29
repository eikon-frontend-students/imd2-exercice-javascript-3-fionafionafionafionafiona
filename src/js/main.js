var formInnerText = document.querySelector(".form-input");

var formButton = document.querySelector(".form-button");

var articles = document.querySelectorAll(".articles-item");

function search() {
  var textInputContent = formInnerText.value;
  articles.forEach(function (article) {
    if (article.textContent.includes(textInputContent)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

formButton.addEventListener("click", search);
