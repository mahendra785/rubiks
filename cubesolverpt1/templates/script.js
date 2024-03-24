
let selectedColor = 'w'; // Initially selected color is white
let currentSide = 0; // Initially selected side of the cube
let rotationCount = 0; // Keep track of the number of rotations
const sides = [
    ['piece-1', 'piece-2', 'piece-3', 'piece-4', 'piece-5', 'piece-6', 'piece-7', 'piece-8', 'piece-9'],
    ['piece-10', 'piece-11', 'piece-12', 'piece-13', 'piece-14', 'piece-15', 'piece-16', 'piece-17', 'piece-18'],
    ['piece-19', 'piece-20', 'piece-21', 'piece-22', 'piece-23', 'piece-24', 'piece-25', 'piece-26', 'piece-27'],
    ['piece-28', 'piece-29', 'piece-30', 'piece-31', 'piece-32', 'piece-33', 'piece-34', 'piece-35', 'piece-36']    ];
function selectColor(color) {
            selectedColor = color;    
}

function fillColor(pieceId) {
     document.getElementById(pieceId).style.backgroundColor = getColor(selectedColor); }

        function getColor(color) {
            switch (color) {
                case 'w': return '#ffffff'; // White
                case 'y': return '#ffff00'; // Yellow
                case 'r': return '#ff0000'; // Red
                case 'o': return '#ffa500'; // Orange
                case 'b': return '#0000ff'; // Blue
                case 'g': return '#008000'; // Green
                default: return '#ffffff'; // White (default)
            }
        }

function rotateLeft() {
    currentSide = (currentSide + 1) % sides.length;
    rotationCount++;
    if (rotationCount === 4) {
            rotationCount = 0;
            currentSide = 0;
         }
            updateGrid();
        }


function rotateRight() {
    currentSide = (currentSide - 1 + sides.length) % sides.length;
    rotationCount++;
        if (rotationCount === 4) {
                rotationCount = 0;
                currentSide = 0; 
            }
            updateGrid();
        }

function updateGrid() {
     const currentSideItems = sides[currentSide];
     const cubeContainer = document.getElementById('cube');
     cubeContainer.innerHTML = ''; 
     currentSideItems.forEach(pieceId => {
                cubeContainer.innerHTML += `<div class="grid-item" id="${pieceId}" onclick="fillColor('${pieceId}')"></div>`;
         });
     }

 updateGrid();