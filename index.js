let container = document.createElement('div');
container.className = 'main-container';
document.body.appendChild(container);

let page = document.createElement('div');
page.className = 'page';

let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = "<h4>ETCH-A-SKETCH</h4>";
page.appendChild(title);

let btn = document.createElement('input');
btn.type = "submit";
btn.value = "Create New Grid";
btn.className = "createNew";
page.appendChild(btn);

let title2 = document.createElement('h1');
title2.className = 'title2';
title2.innerHTML = "<h1>Third Project</h1>";
page.appendChild(title2);

container.appendChild(page);

let gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';

container.appendChild(gridContainer);

const grid = document.querySelector(".gridContainer");
const createNew = document.querySelector(".createNew");
const projectNumber = document.querySelector(".title2");

//Default Grid => 256 = 16 * 16
//The createGrid funtion will create it using for loop...
createGrid = () => {
    for (let i = 0; i < 256; i++) {
      const cells = document.createElement("div");
      cells.classList.add("square");
      gridContainer.appendChild(cells);
    }
  };
  
function createNewGrid(){
    let gridSize = parseInt(prompt("Enter grid size..."));
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${gridSize}, 2fr)`
    );
    grid.style.setProperty(
      "grid-template-rows",
      `repeat(${gridSize}, 2fr)`
    );
    
      for (let i = 0; i < gridSize * gridSize; i++) {
        const newCells = document.createElement("div");
        newCells.classList.add("square");
        gridContainer.appendChild(newCells);
      }
    
   projectNumber.innerHTML = "<h4>This is your own grid!!!</h4>";
  
  }
  
  const square = document.querySelector("div");
    square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
  });
  
  
  createNew.addEventListener("click", createNewGrid);
  
  createGrid();
  