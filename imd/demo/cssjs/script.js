$(document).ready(function () {
    $('#prev').click(function () {
        $('#container').animate(
            {scrollLeft: '-=205'}
        );
        return false;
    });

    $('#next').click(function () {
        $('#container').animate(
            {scrollLeft: '+=205'}
        );
        return false;
    });

    $('#slideshow a').lightBox();
});