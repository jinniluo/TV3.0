//setup the margins for the dom element

var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = $("#bars").width()-margin.right-margin.left,
    height = $("#bars").height()-margin.top-margin.bottom;

//setup svgs
var svg=d3.select("#bars").append("svg")
          .attr("width",width+margin.right+margin.top)
          .attr("height",height+margin.top+margin.bottom)
          .append("g")
          .attr("width",width)
          .attr("height",height)
          .attr("class","barcharts")
          .attr("transform","translate("+margin.top+","+margin.left+")")

//data

var Fox=[{value:58},{value:26.4},{value:3.6}];
var CBS=[{value:65.5},{value:59.7},{value:5.8}];
var NBC=[{value:74},{value:106.9},{value:13.4}];
var ABC=[{value:353},{value:91.4},{value:13.2}];
yScale=d3.scaleLinear().range([0,height]).domain([0,400])
//set up scales for domain and ranges
var w=(width-margin.left)/14;

//set up tooltips and transformations
var tooltip=d3.select("#tooltip");
var textanchor=w/3;
//draw the barcharts

var barFox=svg.append("g");         
var barFoxrect=barFox.append("g").selectAll("rect")
              .data(Fox)
              .enter()
              .append("rect")
              .attr("x",function(d,i){return i*5*w+20})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(40)}
                    if(i==1){return height-yScale(80)}
                    if(i==2){return height-yScale(105)}})
              .attr("width",w)
              .attr("height",function(d,i){ 
                    if(i==0){return yScale(40)}
                    if(i==1){return yScale(80)}
                    if(i==2){return yScale(105)}})
              .style("fill","#fec5be")
              .attr("id","fox")
              .on("mouseenter",function(d,i){
                       
                  d3.selectAll("#fox").style("stroke","#351d1b").style("stroke-width",0.5)
                  d3.selectAll('#foxtext').style("visibility","visible")
                  d3.select("#foxcircle").style("stroke","#351d1b").style("stroke-width",2)
              })
              .on("mouseleave",function(d,i){
                     
                  d3.selectAll("#fox").style("fill","#fec5be").style("stroke-width",0);
                  d3.selectAll('#foxtext').style("visibility","hidden")
                  d3.selectAll('#foxcircle').style("stroke-width",0)
              })

     var barFoxtext=barFox.selectAll("text")
              .data(Fox)
              .enter()
              .append("text")
              .attr("x",function(d,i){return i*5*w+20+textanchor})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(40)-5}
                    if(i==1){return height-yScale(80)-5}
                    if(i==2){return height-yScale(105)-5}})
              .text(function(d,i){
                    if(i==0){return d.value + "K"}
                    if(i==1){return d.value + "M"}
                    if(i==2){return d.value + "B"}})
              .attr("id","foxtext");

    var foxPos=width-240
    var circleFox=barFox.append("circle")
                .attr("cx",0)
                .attr("cy",0)
                .attr("r",30)
                .attr("transform","translate("+foxPos+","+0+")")
                .style("fill","#fec5be")
                .attr("id","foxcircle");
    var circleFoxText=barFox.append("text")
                .attr("x",-15)
                .attr("y",8)
                .attr("transform","translate("+foxPos+","+0+")")
                .text(function(d){return "Fox"})
                .attr("id","circletext")
                .attr("fill","white");
                




var barCBS=svg.append("g")
var barCBSrect=barCBS.selectAll("rect")
              .data(CBS)
              .enter()
              .append("rect")
              .attr("x",function(d,i){return i*5*w+w+20})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(50)}
                    if(i==1){return height-yScale(170)}
                    if(i==2){return height-yScale(150)}})
              .attr("width",w)
              .attr("height",function(d,i){
                    if(i==0){return yScale(50)}
                    if(i==1){return yScale(170)}
                    if(i==2){return yScale(150)}})
              .style("fill","#e0d6d8")
              .attr("id","cbs")
              .on("mouseenter",function(d,i){
                       
                  d3.selectAll("#cbscircle").style("stroke","#351d1b").style("stroke-width",2);
                  d3.selectAll("#cbs").style("stroke","#351d1b").style("stroke-width",0.5);
                  d3.selectAll('#cbstext').style("visibility","visible")
              })
              .on("mouseleave",function(d,i){
                     
                  d3.selectAll("#cbs").style("stroke-width",0);
                  d3.selectAll('#cbstext').style("visibility","hidden");
                  d3.selectAll("#cbscircle").style("stroke-width",0);
              })


          var barCBStext=barCBS.selectAll("text")
              .data(CBS)
              .enter()
              .append("text")
              .attr("x",function(d,i){return i*5*w+w+20+textanchor})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(50)-5}
                    if(i==1){return height-yScale(170)-5}
                    if(i==2){return height-yScale(150)-5}})
              .text(function(d,i){
                    if(i==0){return d.value + "K"}
                    if(i==1){return d.value + "M"}
                    if(i==2){return d.value + "B"}})
              .attr("id","cbstext");

                var circleCBS=barCBS.append("circle")
                .attr("cx",62)
                .attr("cy",0)
                .attr("r",30)
                .attr("transform","translate("+foxPos+","+0+")")
                .style("fill","#e0d6d8")
                .attr("id","cbscircle");

                var circleCBSText=barCBS.append("text")
                .attr("x",42)
                .attr("y",8)
                .attr("transform","translate("+foxPos+","+0+")")
                .text(function(d){return "CBS"})
                .attr("id","circletext")
                .attr("fill","white");
          



var barNBC=svg.append('g')
var barNBCrect=barNBC.append("g").selectAll("rect")
              .data(NBC)
              .enter()
              .append("rect")
              .attr("x",function(d,i){
                  if(i==0){return 2*w+20}
                  else if(i==1){return 8*w+20}
                  else{return 13*w+20};})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(60)}
                    if(i==1){return height-yScale(300)}
                    if(i==2){return height-yScale(350)}})
              .attr("width",w)
              .attr("height",function(d,i){
                    if(i==0){return yScale(60)}
                    if(i==1){return yScale(300)}
                    if(i==2){return yScale(350)}})
              .style("fill","#857675")
              .attr("id","nbc")
              .on("mouseenter",function(d,i){
                       
                  d3.selectAll("#nbc").style("stroke","#351d1b").style("stroke-width",0.5);
                  d3.selectAll('#nbctext').style("visibility","visible");
                  d3.selectAll("#nbccircle").style("stroke","#351d1b").style("stroke-width",2);
              })
              .on("mouseleave",function(d,i){
                     
                  d3.selectAll("#nbc").style("stroke-width",0);
                  d3.selectAll('#nbctext').style("visibility","hidden");
                  d3.selectAll("#nbccircle").style("stroke-width",0);
              })
   var barNBCtext=barNBC.selectAll("text")
              .data(NBC)
              .enter()
              .append("text")
              .attr("x",function(d,i){
                  if(i==0){return 2*w+20+textanchor}
                  else if(i==1){return 8*w+20+textanchor}
                  else{return 13*w+20+textanchor};})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(60)-5}
                    if(i==1){return height-yScale(300)-5}
                    if(i==2){return height-yScale(350)-5}})
              .text(function(d,i){
                    if(i==0){return d.value + "K"}
                    if(i==1){return d.value + "M"}
                    if(i==2){return d.value + "B"}})
              .attr("id","nbctext");

 var circleNBC=barNBC.append("circle")
                .attr("cx",124)
                .attr("cy",0)
                .attr("r",30)
                .attr("transform","translate("+foxPos+","+0+")")
                .style("fill","#857675")
                .attr("id","nbccircle");

                var circleNBCText=barNBC.append("text")
                .attr("x",104)
                .attr("y",8)
                .attr("transform","translate("+foxPos+","+0+")")
                .text(function(d){return "NBC"})
                .attr("id","circletext")
                .attr("fill","white");










var barABC=svg.append('g')
var barABCrect=barABC.append("g").selectAll("rect")
              .data(ABC)
              .enter()
              .append("rect")
              .attr("x",function(d,i){
                  if(i==0){return 3*w+20}
                  else if(i==1){return 7*w+20}
                  else{return 12*w+20};})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(240)}
                    if(i==1){return height-yScale(270)}
                    if(i==2){return height-yScale(330)}})
              .attr("width",w)
              .attr("height",function(d,i){
                    if(i==0){return yScale(240)}
                    if(i==1){return yScale(270)}
                    if(i==2){return yScale(330)}})
              .style("fill","#fc594e")
              .attr("id","abc")
              .on("mouseenter",function(d,i){
                       
                  d3.selectAll("#abc").style("stroke","#351d1b").style("stroke-width",0.8);
                  d3.selectAll('#abctext').style("visibility","visible");
                  d3.selectAll("#abccircle").style("stroke","#351d1b").style("stroke-width",2);
              })
              .on("mouseleave",function(d,i){
                     
                  d3.selectAll("#abc").style("fill","#fc594e").style("stroke-width",0);
                  d3.selectAll('#abctext').style("visibility","hidden");
                  d3.selectAll("#abccircle").style("stroke-width",0);
              });
   var barABCtext=barABC.selectAll("text")
              .data(ABC)
              .enter()
              .append("text")
              .attr("x",function(d,i){
                  if(i==0){return 3*w+20+textanchor}
                  else if(i==1){return 7*w+20+textanchor}
                  else{return 12*w+20+textanchor};})
              .attr("y",function(d,i){
                    if(i==0){return height-yScale(240)-5}
                    if(i==1){return height-yScale(270)-5}
                    if(i==2){return height-yScale(330)-5}})
              .text(function(d,i){
                    if(i==0){return d.value + "K"}
                    if(i==1){return d.value + "M"}
                    if(i==2){return d.value + "B"}})
              .attr("id","abctext");

 var circleABC=barABC.append("circle")
                .attr("cx",186)
                .attr("cy",0)
                .attr("r",30)
                .attr("transform","translate("+foxPos+","+0+")")
                .style("fill","#fc594e")
                .attr("id","abccircle");

                var circleABCText=barABC.append("text")
                .attr("x",166)
                .attr("y",8)
                .attr("transform","translate("+foxPos+","+0+")")
                .text(function(d){return "ABC"})
                .attr("id","circletext")
                .attr("fill","white");








