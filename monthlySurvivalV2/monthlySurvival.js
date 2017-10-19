// Resources: https://stackoverflow.com/questions/26428341/how-can-i-add-different-images-instead-of-text-inside-d3-js-piechart-slices

$(document).ready(function(){

    $(".pHousing").mouseover(function(){
        $(".pHousing-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pHousing").mouseout(function(){
        $(".pHousing-text").css({
            "color":"#f2672a",
            "background-color":"#fff"
        });
    });

    $(".pFood").mouseover(function(){
        $(".pFood-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pFood").mouseout(function(){
        $(".pFood-text").css({
            "color":"#f2672a",
            "background-color":"#fff"
        });
    });

});
