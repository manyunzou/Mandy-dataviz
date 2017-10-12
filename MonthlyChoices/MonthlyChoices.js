$( document ).ready(function() {
    
    // For count up animation 01
    var mcCount01 = new CountUp(document.getElementById("mc-graphics-count1"),0,169);
    mcCount01.start();

    // For count up animation 02
    var mcCount02 = new CountUp(document.getElementById("mc-graphics-count2"),0,171);
    mcCount02.start();

    // For count up animation 03
    var mcCount03 = new CountUp(document.getElementById("mc-graphics-count3"),0,183);
    mcCount03.start();

    // For count up animation 04
    var mcCount04 = new CountUp(document.getElementById("mc-graphics-count4"),0,200);
    mcCount04.start();
    

    $(".mc-graphics").each(function(i){
        var $mcImg = $(this);
        setTimeout(function(){
            $mcImg.addClass("bigEntrance");
        }, i*500);
    });

});

