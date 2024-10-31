
// The grid container
const gridContainer = document.getElementById('grid-here');
gridContainer.style.width = '400px'; //  grid container width
gridContainer.style.height = '400px'; //  grid container height

// Function to create a grid
function createGrid(squaresPerSide) {
    // Clear any existing grid
    gridContainer.innerHTML = '';

    // Calculate the size of each square to fit evenly in the container
    const squareSize = 400 / squaresPerSide; // Assuming 400px x 400px container

    // Create squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square'); // Add class for styling

        // Set size for each square
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add event listeners for hover effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "";
        });

        // Add square to the grid container
        gridContainer.appendChild(square);
    }
}

// Initial grid with 16x16 squares
createGrid(16);

// Create button for user input
const buttonContainer = document.getElementById('button1');
const btn = document.createElement('button');
btn.textContent = 'Resize Grid';
btn.classList.add('btn1'); // Class for styling

// Add event listener to button for user input
btn.addEventListener("click", () => {
    // Prompt for user input, limiting to numbers between 1 and 100
    let userSquares;
    while (true) {
        userSquares = parseInt(prompt("Choose a number between 1 and 100 for grid size (e.g., 16 for a 16x16 grid):"));
        if (!isNaN(userSquares) && userSquares > 0 && userSquares <= 100) break;
        alert("Please enter a valid number between 1 and 100.");
    }

    // Create new grid based on user input
    createGrid(userSquares);
});

// Add the button to the container
buttonContainer.appendChild(btn);

