import * as d3 from "d3";
import ChartActionCreator from '../actions/ChartActionCreator';
const ChartView = function(){

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

var x = d3.scaleTime()
  .range([0, width]);

var y = d3.scaleLinear()
  .range([height, 0]);

var xAxis = d3.axisBottom()
  .scale(x)
  .tickFormat(d3.timeFormat("%M%S"));

var yAxis = d3.axisLeft()
  .scale(y)

var svg_list = [];
var line = [];
var playTimeBar;
var playLine;

function init( svgElement ){

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

var i = 0;

for(i = 0; i < 6; i++){
   line[i] = d3.line()
  .x(function(d){ return x(d.date); })
  .y(function(d){ 
 
     switch(i){
       case 0: 
         return y(d.ax);
       break;
    
       case 1:
         return y(d.ay);
       break;

       case 2:
         return y(d.az);
       break;
  
       case 3:
         return y(d.gx);
       break;

       case 4:
         return y(d.gy);
       break;

       case 5:
         return y(d.gz);
       break;
     }
 })
}


   playLine = d3.line()
    .x(function(d){ return d[0]; })
    .y(function(d){ return d[1]; })

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


for(i = 0; i < 6; i++){
svg_list[i] = svg.append("path")
  .datum(data)
  .attr("class", "line")
  .attr("d", line[i])
}

playTimeBar = svg.append("path")
    .attr("d", playLine([[0,0], [0,height]])) 
    .attr("stroke", "red") 
    .attr("stroke-width", "3px")
    .attr("fill", "none") 

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
 

for(i = 0; i < 6; i++){ 
svg.selectAll("circle")
           .data(data)
           .enter()
           .append("circle")
           .attr("r", "3px")
           .attr("cx", line[i].x() )
           .attr("cy", line[i].y() )
           .attr("fill", "rgba(0,0,0,0)")
           .on("click", function(d){
              ChartActionCreator.selectPlayTime(data[0].date,d.date);
           })
}
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

function changeCurrentTime(currentTime){
  var x = currentTime * (width / 221);  
  playTimeBar.transition()
       .attr("d", playLine([[x,0], [x,height]]));
}

 function addItem(item){
  console.log("add");
}
 
 function removeItem(item){

  switch(item){
    case "ax":
      svg_list[0].transition().remove();
    break;

    case "ay":
      svg_list[1].remove();
    break;

    case "az":
      svg_list[2].remove();
    break;

    case "gx":
      svg_list[3].remove();
    break;

    case "gy":
      svg_list[4].remove();
    break;

    case "gz":
      svg_list[5].remove();
    break;
  }
}

return {
  init : init,
  changeCurrentTime : changeCurrentTime,
  addItem : addItem,
  removeItem : removeItem,
};
}();

module.exports = ChartView;
