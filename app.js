for (i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    container.appendChild(gridBox);
    gridBox.classList.add('gridBox');

}

const gridBox = document.querySelectorAll('.gridBox');

[...document.querySelectorAll('.gridBox')].forEach(function(item) {
    item.addEventListener('mouseover', function() {
    item.style.backgroundColor = 'black';
    });
});