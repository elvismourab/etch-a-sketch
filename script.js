function createGrids() {
    const grid = document.getElementById('grid');

    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    };
}

function createPenEffect() {
    const squares = document.getElementsByClassName('square');
    console.log(typeof squares);

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
