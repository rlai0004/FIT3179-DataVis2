// var vg_1 = "daily_cost_bar_chart.vg.json";
var vg_1 = "week9mapv2.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function (result) {
}).catch(console.error);

var vg_2 = "week10bubble.vg.json";
vegaEmbed("#bubble_chart", vg_2).then(function (result) {
}).catch(console.error);

var vg_3 = "boxplot.vg.json";
vegaEmbed("#boxplot", vg_3).then(function (result) {
}).catch(console.error);

var vg_4 = "stackedbarchart.vg.json";
vegaEmbed("#stacked_bar_chart", vg_4).then(function (result) {
}).catch(console.error);