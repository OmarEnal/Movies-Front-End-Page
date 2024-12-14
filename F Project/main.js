const colors = ['#00ffff', '#797979'];
let currentIndex = 0;

changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
