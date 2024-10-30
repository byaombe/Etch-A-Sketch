

const gridContainer = document.getElementById('grid-here');
//loop creates 256 squares for 16x16 grid
for (let i = 0; i < 256; i++) //16x16 = 256 
{ const square = document.createElement('div'); //creates a new div
    square.classList.add('grid-squares'); //class for styling
    gridContainer.appendChild(square);

}