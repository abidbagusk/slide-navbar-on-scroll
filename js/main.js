window.onscroll = function () {
    slideDown()
};

function slideDown() {
    // Know the scroll position
    var scrollPos = document.documentElement.scrollTop;
    // Call Navbar
    var navbar = document.getElementsByClassName('navbar')[0];
    // Call Content
    var content = document.getElementsByClassName('content')[0];
    if (scrollPos > 50) {
        navbar.style.top = '0';
        content.style.backgroundColor = 'red';
        content.style.transition = '1s';
    } else {
        navbar.style.top = '-60px';
        content.style.backgroundColor = 'purple';
    }
}