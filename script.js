const DEFAULT_GRID = 16;
let gridValue = DEFAULT_GRID;
let blackPenMode = true;
let isRandomMode = false;

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
    const handlePenEffect = (event) => {
        console.log("event", event);
        if (isRandomMode) {
            activateRandomRgb(event.target);
        } else {
            activateBlackPen(event.target);
        }
    }

    const squares = document.getElementsByClassName('square');
    for (let square of squares) {
        square.addEventListener('mouseenter', handlePenEffect);
    }
}

function activateBlackPen(element) {
    element.style.backgroundColor = '';
    element.classList.add('hoovered');
}

function activateRandomRgb(element) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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

function createButtonEvents() {
    const blackPenButton = document.getElementById('button-black-pen');
    const randomRgbButton = document.getElementById('button-random-rgb');

    blackPenButton.addEventListener('click', () => {
        isRandomMode = false;
        blackPenMode = !blackPenMode;
    })

    randomRgbButton.addEventListener('click', () => {
        blackPenMode = false;
        isRandomMode = !isRandomMode;
    })
}

createGrid();
createPenEffect();
createGridValue();
createButtonEvents();
