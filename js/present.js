/*
 * Present.js
 * Lightweight online slideshow library
 */
;(function($, window, document, undefined) {
    $(document).ready(function () {
        $('body').data('present-current', 0);

        // Count the number of slides and insert nav hints
        var slides = $('#slides article');
        var nav = $('<ul id="nav">');
        slides.each(function (i, x) {
            var slide = $(x);
            var item = $('<li>');
            var name = slide.attr('title');
            slide.data('number', i);
            item.data('number', i);
            item.html(name);
            nav.append(item);
        });
        $('body').append(nav);

        // Auto update current slide navigation helper
        var slides = $('#slides article');
        var slideHeight = slides.outerHeight();
        window.setInterval(function () {
            var currentScroll = $('body').scrollTop();
            var slideNumber = Math.floor(currentScroll / slideHeight);
            var navs = $('#nav > li');
            navs.removeClass('active');
            $(navs[slideNumber]).addClass('active');
        }, 100);
    });
})(jQuery, window, document);