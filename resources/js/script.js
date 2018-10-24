var req = new XMLHttpRequest();
req.open('GET', 'GDP-data.json');
req.send();
req.onload = () => {
    json = JSON.parse(req.responseText);
    console.log(json.data);
    d3.select('body').selectAll('div')
        .data(json.data)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style("height", (d) => ((d[1] / 40) + "px"))
}
// console.log(req.response);