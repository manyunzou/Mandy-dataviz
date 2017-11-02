$( document ).ready(function() {
    
    $(".sf_quote div").each(function(i){
        var $img = $(this);
        setTimeout(function(){
            $img.addClass("slideUp");
        }, i*500);
    });
    

});

