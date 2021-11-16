function createGrid(size){

    let grid = document.getElementById('grid');
    
    for( let i = 0; i < size; i++ ){
        createRow(size);
    }

    chooseColorScheme();
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

function chooseColorScheme(){
    let rainbowBtn = document.getElementById('rainbowButton')
    let blackBtn = document.getElementById('blackButton')
    let eraseBtn = document.getElementById('eraseButton')

    rainbowBtn.addEventListener('click', function (e) {
        colorWhenMousingOver('rainbow')
    })

    blackBtn.addEventListener('click', function (e) {
        colorWhenMousingOver('black')
    })

    eraseBtn.addEventListener('click', function (e) {
        colorWhenMousingOver('erase')
    })
}

function colorWhenMousingOver(scheme){

    if(scheme==='rainbow'){
        grid.addEventListener('mouseover', event => {
            if(event.target.classList[0] === 'gridBox'){
                event.target.style.backgroundColor = chooseRandomColor();
            }
        })
    }

    else if(scheme==='erase'){
        grid.addEventListener('mouseover', event => {
            if(event.target.classList[0] === 'gridBox'){
                event.target.style.backgroundColor = 'bisque';
            }
        })
    }

    else{
        grid.addEventListener('mouseover', event => {
            if(event.target.classList[0] === 'gridBox'){
                event.target.style.backgroundColor = 'black';
            }
        })
    }
}

function chooseRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return("#"+randomColor)
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


