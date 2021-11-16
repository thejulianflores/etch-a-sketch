function createGrid(size){

    let grid = document.getElementById('grid');
    
    for( let i = 0; i < size; i++ ){
        createRow(size);
    }

    colorWhenMousingOver();
    resetGridOnPress(grid);
}

function createRow(size){
        
    let gridRow = document.createElement('div')
    gridRow.classList.add('gridRow')

    grid.appendChild(gridRow)

    for( let j = 0; j < size; j++ ){
        createBox(size, gridRow);
    }
    
}

function createBox(size, gridRow){
    
    let gridBox = document.createElement('div')
    gridBox.classList.add('gridBox')

    gridRow.appendChild(gridBox)
    
}

function colorWhenMousingOver(){
    grid.addEventListener('mouseover', event => {
        if(event.target.classList[0] === 'gridBox'){
            event.target.style.backgroundColor = 'black';
        }
    })
}

function resetGridOnPress(grid){
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function (e) {
        eraseGrid(grid)
        createGrid(16);
    })
}

function eraseGrid(grid){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}

createGrid(16);


