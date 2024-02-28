AOS.init();

// reload page to top.

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}