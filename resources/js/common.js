(function($) {
    $(window).on("load", function() {
        $(".content").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-thick",
            scrollbarPosition: "outside"
        });
    });
})(jQuery);