document.getElementById('menuButton').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
});
