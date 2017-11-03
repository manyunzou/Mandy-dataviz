$(document).ready(function(){
    $(window).bind("scroll", function(){
        if($(window).scrollTop()> 735){
            // console.log("haha");
            $(".briefArea").addClass("fixedMenu");
            $(".briefArea").addClass("fixedBriefArea");
            $(".menuOverview").css("font-size","18px");
            $(".menuFeature").css("font-size","18px");
            $(".menuResource").css("font-size","18px");
        } else {
            $(".briefArea").removeClass("fixedMenu");
            $(".briefArea").removeClass("fixedBriefArea");
            $(".menuOverview").css("font-size","23px");
            $(".menuFeature").css("font-size","23px");
            $(".menuResource").css("font-size","23px");
        }
    })
})