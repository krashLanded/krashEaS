function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  randomColorButton.addEventListener('click', () => {
        alert('Click on app to exit random RGB mode!');
        [...document.querySelectorAll('.gridBox')].forEach(function(item) {
        item.addEventListener('mouseover', function() {
        item.style.backgroundColor = getRandomColor();
        });
    });
});