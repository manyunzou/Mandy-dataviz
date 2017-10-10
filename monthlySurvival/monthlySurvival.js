    
    // Load the Visualization API and the corechart package.
    google.charts.load("current", {"package": ["corechart"]});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart(){
        var data = new google.visualization.DataTable();
        data.addColumn("string","Topping");
        data.addColumn("number","Slices");
        data.addRows([
            ["Housing", 689],
            ["Food", 169],
            ["Transportation", 316],
            ["Health Care", 170],
            ["Miscellaneous", 169],
            ["Taxes", 343]
        ]);

        var options = { "width": 400,
                        "height": 300,
        };

        // For placing icons
        function placeMarker(DataTable){
            var cli = this.getChartLayoutInterface();
            var chartArea = cli.getChartAreaBoundingBox();

            document.querySelector('.house')
        }

        var chart = new google.visualization.PieChart(document.getElementById('budget_person'));
        chart.draw(data, options);

    };

