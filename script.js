const body = document.querySelector('body');

//set up the container div
const container = document.createElement('div');
container.classList.add('container');


for(let i = 0; i <256; i++){

    let box = document.createElement('div');
    box.classList.add('box');

    container.appendChild(box);
}

body.appendChild(container);