$( document ).ready(function() {
    // For count up animation 01
    var coinCount01 = new CountUp(document.getElementById("coins-count1"),0,75);
    coinCount01.start();

    // For count up animation 02
    var coinCount02 = new CountUp(document.getElementById("coins-count2"),0, 52);
    coinCount02.start();

    // For count up animation 03
    var coinCount03 = new CountUp(document.getElementById("coins-count3"), 0, 56);
    coinCount03.start();

    // For count up animation 04
    var coinCount04 = new CountUp(document.getElementById("coins-count4"), 0, 38);
    coinCount04.start();
});