const grid = document.getElementById('grid');

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}