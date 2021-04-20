'use strict';
function getProductHtmlCode() {
    let htmlCode = ` <article class="card">`
  htmlCode += ` <img src="./images/node-js.jpg" class="card__img" alt="Camiseta de Node JS">`;
  htmlCode += ` <h3 class="card__title">Node JS Fake</h3>`;
  htmlCode += ` <p class="card__description">12,00 €</p>`;
  htmlCode += ` <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += ` </article> `;;
    return htmlCode;
}

const htmlCode = getProductHtmlCode();


const cardsElement = document.querySelector('.js-cards');

cardsElement.innerHTML = htmlCode;


// let htmlCode1 = '<p> Camiseta 1</p>';
// let htmlCode2 = '<p> Camiseta 2</p>';


// cardsElement.innerHTML = htmlCode1 + htmlCode2;