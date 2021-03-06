// @TODO: YOUR CODE HERE!
function updateData(sel, data) {
    sel.data(data);

    sel
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", d => 0.5*d.poverty)
        .attr("fill", "gray")
    
        sel.exit().remove()

}

d3.csv("assets/data/data.csv").then((data) => {
    console.log(data.slice(0, 3))
    let sData = data.slice(0, 3);
    let svg = d3.select("#scatter").append("svg");
    svg.attr("width", "600").attr("height", "400")

    let circles = svg.selectAll("circle");
    

    circles.data(sData)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", 10)
        .attr("fill", "gray")
    
    let smallerData = data.slice(5, 15);
    let sel = svg.selectAll("circle").data(smallerData);

    sel
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", d => 0.5*d.poverty)
        .attr("fill", "gray")
    
    sel.exit().remove()

    smallerData = data.slice(40, 48);
    sel = svg.selectAll("circle");
    updateData(sel, smallerData);
});