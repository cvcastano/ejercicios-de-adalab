'use strict';
const button = document.querySelector('button');                    // button selector 
button.addEventListener("click", findRepos);                        // button event listener

function findRepos() {                                              // define function    
    const orgName = document.querySelector('input').value;          // input selector                 
    fetch(`https://api.github.com/orgs/${orgName}`)                 // define fetch with the organization name
        .then(response1 => response1.json())                        // create response
        .then(orgData => {                                          // receive data from organization 
            const reposUrl = orgData.repos_url;
            console.log(reposUrl)                                   // it works!
            return fetch(reposUrl);                                 // get the url for the repos  
        })
        .then(response2 => response2.json())
        .then(reposData => {
            console.log(reposData)                                  // it works!
            const list = document.querySelector('ul');              // list selector
            for (let i = 0; i < reposData.length; i++) {

                list.innerHTML += `<li>${reposData[i].name}</li>`
            }
        });
}