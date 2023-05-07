const body = document.querySelector('body');

//set up the container div
const container = document.createElement('div');
container.classList.add('container');

const button = document.createElement('button');
button.innerText = "Make New Grid?";
button.addEventListener('click', () =>{
    let size = prompt('Enter a size?');

    if(size>64){
        alert('Too big! \n Please choose anumber of 64 or less.');
        return;
    }
    else createGrid(size);
});

container.appendChild(button);

function createGrid(sideSize){

    resetGrid();

    for(let i = 0; i <sideSize; i++){
    
        let row = document.createElement('div');
        row.classList.add('row');
        
        for(let i = 0; i <sideSize; i++){
            
            let box = document.createElement('div');
            box.classList.add('box');

            //add eventlistener to each box
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = getRandomColor();
                console.log(getRandomColor());
            })

            
        
            row.appendChild(box);
        }
    
        container.appendChild(row);
    }

}


function resetGrid(){
    let rows = document.querySelectorAll('.row');
    let array = Array.from(rows);
    
    array.forEach((row) =>{
        container.removeChild(row);
    })
}

function getRandomColor(){
    return "#" + (Math.floor(Math.random() * 2 ** 24))
                    .toString(16)
                    .padStart(0, 6);
}

//Initilize
createGrid(16);

body.appendChild(container);