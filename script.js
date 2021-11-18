function createGrid(size){

    let grid = document.getElementById('grid');
    
    for( let i = 0; i < size; i++ ){
        createRow(size);
    }

    chooseColorstyle();
    makeNewGridOnPress(grid);
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

function chooseColorScheme(drawStyle){
    let rainbowBtn = document.getElementById('rainbowButton')
    let blackBtn = document.getElementById('blackButton')
    let eraseBtn = document.getElementById('eraseButton')
    let text = document.getElementById('text')

    rainbowBtn.addEventListener('click', function (e) {
        blackBtn.classList.remove('chosen-button')
        eraseBtn.classList.remove('chosen-button')
        rainbowBtn.classList.remove('chosen-button')
        rainbowBtn.classList.add('chosen-button')
        text.innerHTML = 'Rainbow Brush!'
        colorWhenMousingOver('rainbow', drawStyle)
    })

    blackBtn.addEventListener('click', function (e) {
        blackBtn.classList.remove('chosen-button')
        eraseBtn.classList.remove('chosen-button')
        rainbowBtn.classList.remove('chosen-button')
        blackBtn.classList.add('chosen-button')
        text.innerHTML = 'Black Brush!'
        colorWhenMousingOver('black', drawStyle)
    })

    eraseBtn.addEventListener('click', function (e) {
        blackBtn.classList.remove('chosen-button')
        eraseBtn.classList.remove('chosen-button')
        rainbowBtn.classList.remove('chosen-button')
        eraseBtn.classList.add('chosen-button')
        text.innerHTML = 'We all make mistakes :)'
        colorWhenMousingOver('erase', drawStyle)
    })
}

function chooseColorstyle() {
    let rainbowBtn = document.getElementById('rainbowButton')
    let blackBtn = document.getElementById('blackButton')
    let eraseBtn = document.getElementById('eraseButton')
    let hoverBtn = document.getElementById('drawHover')
    let clickBtn = document.getElementById('drawClick')
    let textBox = document.getElementById('text')
    textBox.innerHTML = 'Choose a style!'

    hoverBtn.addEventListener('click', function (e){
        removeEventListener(grid)
        blackBtn.classList.remove('chosen-button')
        eraseBtn.classList.remove('chosen-button')
        rainbowBtn.classList.remove('chosen-button')
        clickBtn.classList.remove('chosen-button')
        hoverBtn.classList.add('chosen-button')
        textBox.innerHTML = 'Choose a color!'
        chooseColorScheme('hover');
    })

    clickBtn.addEventListener('click', function (e) {
        removeEventListener(grid)
        blackBtn.classList.remove('chosen-button')
        eraseBtn.classList.remove('chosen-button')
        rainbowBtn.classList.remove('chosen-button')
        hoverBtn.classList.remove('chosen-button')
        clickBtn.classList.add('chosen-button')
        textBox.innerHTML = 'Choose a color!'
        chooseColorScheme('click');
    })
}

function removeEventListener(element){
    let newElement = element.cloneNode(true)
    element.parentNode.replaceChild(newElement, element);
}

function colorWhenMousingOver(scheme, drawStyle){
    if(drawStyle === 'hover') {
        removeEventListener(grid)

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

    else{
        removeEventListener(grid)

        if(scheme==='rainbow'){
            grid.addEventListener('mousedown', event => {
                if(event.target.classList[0] === 'gridBox'){
                    event.target.style.backgroundColor = chooseRandomColor();
                }
            })
        }

        else if(scheme==='erase'){
            grid.addEventListener('mousedown', event => {
                if(event.target.classList[0] === 'gridBox'){
                    event.target.style.backgroundColor = 'bisque';
                }
            })
        }

        else{
            grid.addEventListener('mousedown', event => {
                if(event.target.classList[0] === 'gridBox'){
                    event.target.style.backgroundColor = 'black';
                }
            })
        }
    }
}

function chooseRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return("#"+randomColor)
}

function makeNewGridOnPress(grid){
    let newGridButton = document.getElementById('gridButton');
    newGridButton.addEventListener('click', function (e) {
        eraseGrid(grid);
        getGridSize(grid)
    })
}

function getGridSize(grid){
    let gridSize = 0
    while(gridSize <= 0 || gridSize > 100 || isNaN(gridSize)){
        gridPrompt = prompt('Choose a new length from 1 to 100')
        gridSize = parseInt(gridPrompt)
        console.log((gridSize))

    }
    createGrid(gridSize)
}

function resetGridOnPress(grid){
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function (e) {
        eraseGrid(grid)
        createGrid(16);
    })
}

function eraseGrid(grid){
    let text = document.getElementById('text')
    const boxElements = document.getElementsByClassName("gridRow")

    while(boxElements.length > 0){
        boxElements[0].parentNode.removeChild(boxElements[0])
    }

    const elements = document.getElementsByTagName('button');
    for( let i =0; i < elements.length; i++){
        removeEventListener(elements[i])
    }


    text.innerHTML = ""
}



createGrid(16);


