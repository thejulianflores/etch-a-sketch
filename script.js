function createGrid(size){

    let grid = document.getElementById('grid');
    
    for( let i = 0; i < size; i++ ){
        createRow(size);
    }

    chooseColorstyle();
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
        text.innerHTML = 'Rainbow Brush!'
        colorWhenMousingOver('rainbow', drawStyle)
    })

    blackBtn.addEventListener('click', function (e) {
        text.innerHTML = 'Black Brush!'
        colorWhenMousingOver('black', drawStyle)
    })

    eraseBtn.addEventListener('click', function (e) {
        text.innerHTML = 'We all make mistakes :)'
        colorWhenMousingOver('erase', drawStyle)
    })
}

function chooseColorstyle() {
    let hoverBtn = document.getElementById('drawHover')
    let clickBtn = document.getElementById('drawClick')
    let textBox = document.getElementById('text')
    textBox.innerHTML = 'Choose a style!'

    hoverBtn.addEventListener('click', function (e){
        removeEventListener(grid)
        textBox.innerHTML = 'Choose a color!'
        chooseColorScheme('hover');
    })

    clickBtn.addEventListener('click', function (e) {
        removeEventListener(grid)
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

    text.innerHTML = ""
}

createGrid(16);


