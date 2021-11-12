const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
}