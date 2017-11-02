$( document ).ready(function() {


    // for toliet people to pop up one by one
    $(".numbers-people-chart img").each(function(i){
        var $img = $(this);
        setTimeout(function(){
            $img.addClass("bigEntrance");
        }, i*200);
    });

    // For count up animation 01
    var coinCount01 = new CountUp(document.getElementById("numbers-count1"),0,20, 0, 9);
    coinCount01.start();

    // For count up animation 02
    var coinCount02 = new CountUp(document.getElementById("numbers-count2"),0, 35, 0, 9);
    coinCount02.start();

    function addPop(){
        $(".numbers-food-insecurity").addClass("bigEntrance");
    };

    $(".numbers-food-insecurity").addClass(function(){
        setTimeout(addPop, 3000);
    });

});