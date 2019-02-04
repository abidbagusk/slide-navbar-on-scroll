window.onscroll = function () {
    slideDown()
};

function slideDown() {
    // Know the scroll position
    var scrollPos = document.documentElement.scrollTop;
    // Call Navbar
    var navbar = document.getElementsByClassName('navbar')[0];
    if (scrollPos > 50) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-60px';
    }
}