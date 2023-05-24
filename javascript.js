const grid_container = document.querySelector('#grid-container');
const bt_grid = document.querySelector('#bt-grid');
const bt_erase = document.querySelector ('#bt-erase');

let gridCell = grid_container.children;
let nCells;
let colorPaint = "#000000";

function createGrid(nSquares){
    
    nDivs = 640/nSquares;

    cleanGrid();

    for (let i = 0; i < nSquares; i++) {
        for (let i = 0; i < nSquares; i++) {
            const divGrid = document.createElement('div');
            divGrid.style.backgroundColor = "#eee";
            divGrid.style.width =  nDivs+"px"; //change to nDivs
            divGrid.style.height = nDivs+"px"; //nDivs
            grid_container.appendChild(divGrid);    
            console.log("Number of square: " +(nSquares* nSquares)); 
           // divGrid.style.border = "1px solid black";
        } 
        paintGrid();
    }
}

function paintGrid (){
    for (const div of gridCell) {
        div.addEventListener('mouseover', () => {
        console.log("test hover mouse");
        div.style.backgroundColor = colorPaint;
        });
      }
}

function cleanGrid(){
  while (grid_container.firstChild) {
    grid_container.removeChild(grid_container.lastChild);
  }
}
 

bt_grid.addEventListener('click', () =>{
    let squares = prompt("insert the number of squares pls: ")
    createGrid(squares);
    nCells = squares;
})

bt_erase.addEventListener('click', () =>{
   cleanGrid();
   createGrid(nCells);
})


function changeColor(){
    document.getElementById("colorpicker").addEventListener('change', (e) => {
        let colorValue = e.target.value;
        
        colorPaint = colorValue;

        return colorValue;
    });
};
