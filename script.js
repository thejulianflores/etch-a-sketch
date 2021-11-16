function createGrid(size){
    let grid = document.getElementById('grid');
    
    for( let i = 0; i < size; i++ ){
        
        let gridRow = document.createElement('div')
        gridRow.classList.add('gridRow')

        grid.appendChild(gridRow)
        for( let j = 0; j < size; j++ ){
            let gridBox = document.createElement('div')
            gridBox.classList.add('gridBox')

            gridRow.appendChild(gridBox)
        }

    }

    colorWhenMousingOver();
}

function colorWhenMousingOver(){
    grid.addEventListener('mouseover', event => {
        if(event.target.classList[0] === 'gridBox'){
            event.target.style.backgroundColor = 'black';
        }
    })
}

createGrid(16);


