'use strict';
function getMovie() {
    fetch("https://api.rand.fun/movies/title")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-movie').addEventListener("click", getMovie);