'use strict';

$('.btn-item').on('click', function() {
    $(this).addClass('active').siblings('.btn-item').removeClass('active');
})


var carousel  = document.querySelector('.carousel');
var figure    = carousel.querySelector('figure');
var nav       = carousel.querySelector('nav');
var numImages = figure.childElementCount;
var theta     = 360 / numImages;
var currImage = 0;

nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();
    var t = e.target;
    
    // 检测是否单击了导航按钮
    if (t.tagName.toUpperCase() != 'BUTTON') {
        return;
    }

    if (t.classList.contains('next')) {
        currImage++;
    }

    else {
        currImage--;
    }
    figure.style.transform = 'rotateY(' + currImage * theta +'deg)';
}