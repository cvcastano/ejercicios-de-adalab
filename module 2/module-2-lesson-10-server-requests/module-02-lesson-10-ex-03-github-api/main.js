'use strict';
const button = document.querySelector('.button');                // button selector 
button.addEventListener("click", findUser);                      // button event listener


function findUser() {                                            // define function    
    const username = document.querySelector('.input').value;     // input selector                 
    fetch(`https://api.github.com/users/${username}`)            // define fetch with the username variable ??
        .then(response => response.json())                       // as it is, I think ??
        .then(data => {                                          // create data with the info we need and
            const name = document.querySelector('.name');        //        give variables to the data 
            name.innerHTML = data.name;
            const img = document.querySelector('.img');          // use example https://api.github.com/users/cvcastano
            img.src = data.avatar_url;
            const repos = document.querySelector('.repos');
            repos.innerHTML = data.public_repos;
        });
}






