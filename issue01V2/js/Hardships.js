$(window).scroll(function() {
    
    var     hT = $("#Issue01-hardships").offset().top,
            hH = $("#Issue01-studentFood").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (hT > wS){
            // For count up animation 01
            var coinCount01 = new CountUp(document.getElementById("hs_numberCount01"),0,31);
            coinCount01.start();

            // For count up animation 02
            var coinCount02 = new CountUp(document.getElementById("hs_numberCount02"),0,49);
            coinCount02.start();

            // For count up animation 03
            var coinCount03 = new CountUp(document.getElementById("hs_numberCount03"),0,14);
            coinCount03.start();
        };

});

