import * as d3 from "d3";
import ChartActionCreator from '../actions/ChartActionCreator';

const ChartView = function(){

function drawChart( svgElement ){

// 表示サイズを設定
var margin = {
  top   : 40,
  right : 40,
  bottom: 40,
  left  : 40
};

var size = {
  width : 800,
  height: 250
};

var width = size.width - margin.left - margin.right;
var height = size.height - margin.top - margin.bottom; 

var data =[];
var beginTime;

d3.text("sample(6).csv", function(error, text) { 
    data = d3.csvParseRows(text, function(d) {
        return { date: d[0], ax: +d[1], ay: +d[2], az: +d[3], gx: +d[4], gy: +d[5], gz: +d[6] };
    });

var parseDate = d3.timeParse("%H%M%S%L");

// SVG、縦横軸などの設定
var svg = d3.select(svgElement)
  .attr("width", size.width)
  .attr("height", size.height)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

var x = d3.scaleTime()
  .range([0, width]);

var y = d3.scaleLinear()
  .range([height, 0]);

var xAxis = d3.axisBottom()
  .scale(x)
  .tickFormat(d3.timeFormat("%M%S"));

var yAxis = d3.axisLeft()
  .scale(y)

var line = d3.line()
  .x(function(d){ return x(d.date); })
  .y(function(d){ return y(d.az); })

// 描画
data.forEach(function(d){
  d.date = parseDate(d.date);
  d.ax = +d.ax;
  d.ay = +d.ay;
  d.az = +d.az;
  d.gx = +d.gx;
  d.gy = +d.gy;
  d.gz = +d.gz;
});

x.domain(d3.extent(data, function(d){ return d.date; }));
y.domain(d3.extent(data, function(d){ return d.az; }));

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0, " + ( height ) + ")")
  .call(xAxis);


 svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr("d", line)

var brush = d3.brushX()
    .extent([[0,0], [width,height]])
    .on("brush end", function(){
       brushed(brush,x);
});

svg.append("g") //brushグループを作成
        .attr("class", "x brush")
        .call(brush)
        .selectAll(".brush rect")
        .attr("y", -6)
        .attr("height", height + 7);
  
svg.selectAll("circle")
           .data(data)
           .enter()
           .append("circle")
           .attr("r", "3px")
           .attr("cx", line.x() )
           .attr("cy", line.y() )
           .attr("fill", "rgba(0,0,0,0)")
           .on("click", function(d){
              ChartActionCreator.selectPlayTime(data[0].date,d.date);
           })

});

function brushed(brush,x) {
  if(d3.event.selection != null){
    if(d3.event.sourceEvent.type == "mouseup"){
      var s = d3.event.selection || x.range();
      ChartActionCreator.createTag(s.map(x.invert, x));
     }
   }
 }
}

return {
  drawChart : drawChart,
};
}();

module.exports = ChartView;
