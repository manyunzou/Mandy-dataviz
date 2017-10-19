// Resources: https://stackoverflow.com/questions/26428341/how-can-i-add-different-images-instead-of-text-inside-d3-js-piechart-slices

$(document).ready(function(){

$("#budget-person-numbers").addClass("animated fadeInLeft");

$("#budget-family-numbers").addClass("animated fadeInLeft");

//p-Housing hover over
    $(".pHousing").mouseover(function(){
        $(".pHousing-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pHousing-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pHousing").mouseout(function(){
        $(".pHousing-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pHousing-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });

// p-Food hover over
    $(".pFood").mouseover(function(){
        $(".pFood-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pFood-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pFood").mouseout(function(){
        $(".pFood-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pFood-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });

// p-Transportation hover over
    $(".pTransportation").mouseover(function(){
        $(".pTrans-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pTrans-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pTransportation").mouseout(function(){
        $(".pTrans-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pTrans-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });

// p-Healthcare hover over
    $(".pHealthcare").mouseover(function(){
        $(".pHealth-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pHealth-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pHealthcare").mouseout(function(){
        $(".pHealth-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pHealth-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });

// p-Miscellaneous hover over
    $(".pMiscellaneous").mouseover(function(){
        $(".pMisc-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pMisc-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pMiscellaneous").mouseout(function(){
        $(".pMisc-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pMisc-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });

// pTaxes hover over
    $(".pTaxes").mouseover(function(){
        $(".pTaxes-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".pTaxes-budget-person-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".pTaxes").mouseout(function(){
        $(".pTaxes-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".pTaxes-budget-person-numbers-title").css({
            "color": "#f2672a"
        })
    });


// Family Budget
// Family Housing
    $(".fHousing").mouseover(function(){
        $(".fHousing-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fHousing-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fHousing").mouseout(function(){
        $(".fHousing-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fHousing-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Food
    $(".fFood").mouseover(function(){
        $(".fFood-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fFood-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fFood").mouseout(function(){
        $(".fFood-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fFood-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Transportation
    $(".fTransportation").mouseover(function(){
        $(".fTrans-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fTrans-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fTransportation").mouseout(function(){
        $(".fTrans-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fTrans-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Healthcare
    $(".fHealthcare").mouseover(function(){
        $(".fHealthcare-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fHealthcare-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fHealthcare").mouseout(function(){
        $(".fHealthcare-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fHealthcare-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Miscellaneous
    $(".fMiscellaneous").mouseover(function(){
        $(".fMisc-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fMisc-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fMiscellaneous").mouseout(function(){
        $(".fMisc-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fMisc-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Taxes
    $(".fTaxes").mouseover(function(){
        $(".fTaxes-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fTaxes-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fTaxes").mouseout(function(){
        $(".fTaxes-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fTaxes-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });

// Family Childcare
    $(".fChildcare").mouseover(function(){
        $(".fChildcare-text").css({
            "color":"#fff",
            "background-color":"#762056"
        });
        $(".fChildcare-budget-family-numbers-title").css({
            "color": "#fff"
        })
    });

    $(".fChildcare").mouseout(function(){
        $(".fChildcare-text").css({
            "color":"#000000",
            "background-color":"#fff"
        });
        $(".fChildcare-budget-family-numbers-title").css({
            "color": "#f2672a"
        })
    });



});
