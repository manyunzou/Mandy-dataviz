// Resources: https://stackoverflow.com/questions/26428341/how-can-i-add-different-images-instead-of-text-inside-d3-js-piechart-slices

// For personal buget chart
var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
            .range(["#772057","#e1749e","#f2682a","#c9177d","#881c55","#f79b8b"]);

var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius- 70);

var pie = d3.pie()
            .sort(null)
            .value(function(d){return d.population; });

var svg = d3.select("#budget_person").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform","translate(" + width/2 + "," + height/2 + ")");

d3.csv("personalData.csv", function(error,data){
    if (error) throw error;

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class","pArc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d){return color(d.data.age); });

    
})