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
        square.addEventListener('mouseenter', () => {
            square.classList.add('hoovered');
        })
    }
}

function createGridValue() {
    const sizeButton = document.getElementById('size-button');
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

createGrid();
createPenEffect();
createGridValue();
