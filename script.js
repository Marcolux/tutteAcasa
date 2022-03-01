console.log('Im here')

document.addEventListener("DOMContentLoaded", function () {
    var scrollStart = 0;
    var nav = document.querySelector(".nav");
    var offset = nav.getBoundingClientRect();

    document.onscroll = function (e) {
        scrollStart = e.target.scrollingElement.scrollTop;
        if (scrollStart > offset.top) {
            nav.style.background ='black';
        } else {
            nav.style.background = 'linear-gradient(0deg,rgb(110, 57, 216, 0.289) 0%,rgb(0, 0, 0) 95%, rgb(0, 0, 0)100%)';
        }
    };
});
