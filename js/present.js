/*jshint jquery:true */
/*global window document console*/
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
        var slideHeight = slides.outerHeight();
        window.setInterval(function () {
            var currentScroll = $('body').scrollTop();
            var slideNumber = Math.floor(currentScroll / slideHeight);
            var navs = $('#nav > li');
            navs.removeClass('active');
            $(navs[slideNumber]).addClass('active');
        }, 100);

        //////////////////////////////////////////
        // Controls
        function toSlide(number) {
            var n = number || 0;
            var height = n * (slideHeight + 200);
            $('body').animate({scrollTop: height}, 400);
        }

        $('#nav li').click(function (event) {
            var number = $(event.target).closest('li').data('number');
            toSlide(number);
        });

        var KEY_LEFT = 37,
            KEY_UP = 38,
            KEY_RIGHT = 39,
            KEY_DOWN = 40;
        $(document).keydown(function (event) {
            var number =  $('#nav li.active').data('number');
            if (event.which === KEY_LEFT ||
                event.which === KEY_UP) {

            } });
    });
})(jQuery, window, document);