$( document ).ready(function() {
    // for toliet people to pop up one by one
    $(".sf_quote div").each(function(i){
        var $img = $(this);
        setTimeout(function(){
            $img.addClass("slideUp");
        }, i*500);
    });

});

