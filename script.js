const DEFAULT_GRID = 16;
let gridValue = DEFAULT_GRID;

function createGrid() {
    const grid = document.getElementById('grid');

    const width = grid.clientWidth;
    const squareSize = (width / gridValue);
    const totalGrid = gridValue * gridValue;

    for (let i = 1; i <= totalGrid; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = squareSize + 'px';
        div.style.width = squareSize + 'px'
        grid.appendChild(div);
    };
}

function createPenEffect() {
    const squares = document.getElementsByClassName('square');

    for (let square of squares) {
        if (square.classList.contains('random-rgb')) {
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = randomizeRgb();
            })
        } else {
            square.addEventListener('mouseenter', () => {
                square.classList.add('hoovered');
            })
        }
    }
}

function createGridValue() {
    const sizeButton = document.getElementById('button-size');
    sizeButton.addEventListener('click', () => {
        gridValue = Number(globalThis.prompt('Informe o número de quadros (1-100): ', DEFAULT_GRID));
        if (gridValue === null || !gridValue) return;
        if (gridValue < 1 || gridValue > 100) {
            alert('Atenção! Deve ser informado um valor de 1 à 100!');
            return;
        }
        grid.innerText = '';
        createGrid();
        createPenEffect();
    })
}

function randomizeRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
}

function createRandomRgb() {
    const randomRgb = document.getElementById('button-random-rgb');
    randomRgb.addEventListener('click', () => {
        const squares = document.getElementsByClassName('square');
        for (let square of squares) {
            if (square.classList.contains('random-rgb')) {
                square.classList.remove('random-rgb');
            } else {
                square.classList.add('random-rgb');
                square.classList.remove('hoovered');
            }
        }
        createPenEffect();
    })
}

createGrid();
createPenEffect();
createGridValue();
createRandomRgb();
