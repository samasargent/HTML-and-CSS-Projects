$('#slideshow > div:globalThis(0)').hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
}, 3000);