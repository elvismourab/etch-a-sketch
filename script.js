let value = 16;

function createGrids() {
    const grid = document.getElementById('grid');

    const width = grid.clientWidth;
    const squareSize = (width / value);
    const gridValue = value * value;

    for (let i = 1; i <= gridValue; i++) {
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

        square.addEventListener('mouseleave', () => {
            square.classList.remove('hoovered');
        })
    }
}

createGrids();
createPenEffect();

const sizeButton = document.getElementById('size-button');
sizeButton.addEventListener('click', () => {
    value = prompt('Informe o número de quadros: ');
    grid.innerText = '';
    createGrids();
    createPenEffect();
})