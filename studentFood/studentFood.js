$( document ).ready(function() {
    // for toliet people to pop up one by one
    $(".sf_people img").each(function(i){
        var $img = $(this);
        setTimeout(function(){
            $img.addClass("bigEntrance");
        }, i*200);
    });

    // function addPop() {
    //     $(".numbers-numbers-section").addClass("bigEntrance");
    // };

    // $(".numbers-numbers-section").addClass(function(){
    //     setTimeout(addPop, 3000);
    // });

    // function addPop2() {
    //     $(".numbers-numbers-section2").addClass("bigEntrance");
    // };

    // $(".numbers-numbers-section2").addClass(function(){
    //     setTimeout(addPop2, 3500);
    // });

    // For count up animation 01
    var coinCount01 = new CountUp(document.getElementById("numbers-count1"),0,20, 0, 9);
    coinCount01.start();

    // For count up animation 02
    var coinCount02 = new CountUp(document.getElementById("numbers-count2"),0, 40, 0, 9);
    coinCount02.start();

    function addPop(){
        $(".numbers-food-insecurity").addClass("bigEntrance");
    };

    $(".numbers-food-insecurity").addClass(function(){
        setTimeout(addPop, 5000);
    });

});

