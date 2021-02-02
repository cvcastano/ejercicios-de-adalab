'use strict';
const button = document.querySelector('button');                   // button selector 
button.addEventListener("click", findRepos);                        // button event listener

function findRepos() {                                              // define function    
    const orgName = document.querySelector('input').value;         // input selector                 
    fetch(`https://api.github.com/orgs/${orgName}`)                 // define fetch with the organization name
        .then(orgResponse => orgResponse.json())                  // create response
        .then(orgData => {                                          // receive data from organization 
            const reposUrl = orgData.repos_url;                     // get the url for the repos               
            return fetch(reposUrl);
            console.log(reposUrl)
        })
                .then(reposResponse => reposResponse.json())
                .then(reposData => {
                    const list = document.querySelector('ul');
                    for(let i= 0; i< reposData.lenght; i++) {
                        list.innerHTML += `<li>${reposData[i].name}</li>`
                    }             
        });
}