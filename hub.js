const container = document.querySelector('.container');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
const eraseButton = document.createElement('button');
eraseButton.textContent = 'Erase';
const randomColorButton = document.createElement('button');
randomColorButton.textContent = 'RanRGB';
const buttonArea = document.querySelector('.buttonArea');
buttonArea.appendChild(clearButton);
buttonArea.appendChild(eraseButton);
buttonArea.appendChild(randomColorButton);

clearButton.classList.add('clearButton');
eraseButton.classList.add('eraseButton');
randomColorButton.classList.add('randomColorButton');












