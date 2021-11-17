for (i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    container.appendChild(gridBox);
    gridBox.classList.add('gridBox');
}

[...document.querySelectorAll('.gridBox')].forEach(function(item) {
    item.addEventListener('mouseover', function() {
    item.style.backgroundColor = 'black';
    });
});

eraseButton.addEventListener('click', () => {
        eraseMode = true;
        alert('Click on app to exit erase mode!');
        [...document.querySelectorAll('.gridBox')].forEach(function(item) {
        item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'white';
        });
    });
});

clearButton.addEventListener('click', () => {
[...document.querySelectorAll('.gridBox')].forEach(function(item) {
    item.style.backgroundColor = 'white';
    });
});
;


container.addEventListener('click', () => {
    [...document.querySelectorAll('.gridBox')].forEach(function(item) {
        item.addEventListener('mouseover', function() {
        item.style.backgroundColor = 'black';
        });
    });
});


