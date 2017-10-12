$( document ).ready(function() {
    // for toliet people to pop up one by one
    $(".sf_quote div").each(function(i){
        var $img = $(this);
        setTimeout(function(){
            $img.addClass("slideUp");
        }, i*500);
    });

    // function addPop(){
    //     $(".numbers-food-insecurity").addClass("slideUp");
    // };

    // $(".numbers-food-insecurity").addClass(function(){
    //     setTimeout(addPop, 5000);
    // });

});

