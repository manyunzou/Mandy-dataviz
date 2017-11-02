$( document ).ready(function() {
    
    // For count up animation 01
    var coinCount01 = new CountUp(document.getElementById("he_numberCount01"),0,31);
    coinCount01.start();

    // For count up animation 02
    var coinCount02 = new CountUp(document.getElementById("he_numberCount02"),0,59);
    coinCount02.start();

    // For count up animation 03
    var coinCount03 = new CountUp(document.getElementById("he_numberCount03"),0,56);
    coinCount03.start();
    

    $(".he_coin1").addClass(function(){
        setTimeout(function(){
            $(".he_coin1").addClass("animated fadeInDown");
            $(".he_coin1").css("visibility", "visible");
        }, 100);
    });

    $(".he_coin2").addClass(function(){
        setTimeout(function(){
            $(".he_coin2").addClass("animated fadeInDown");
            $(".he_coin2").css("visibility", "visible");

        }, 400);
    });

    $(".he_coin3").addClass(function(){
        setTimeout(function(){
            $(".he_coin3").addClass("animated fadeInDown");
            $(".he_coin3").css("visibility", "visible");

        }, 800);
    });

});

