function init() {

var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
context.fillStyle = "white";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "black";

document.getElementById("myCanvas").addEventListener("mouseover",function(){
// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();
});
// document.getElementById("myCanvas").addEventListener("mouseout",function(){
// 	context.fillStyle = "white";
// context.beginPath();
// context.arc(95, 85, 40, 0, 2*Math.PI);
// context.closePath();
// context.fill();
// context.lineWidth = 10;
// context.stroke();
// context.fillStyle = "black";
// });

document.getElementById("1").addEventListener("play", function(){
context.fillStyle = "#91B5FF";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "black";

	document.getElementById("header").style.color="#91B5FF";

});
document.getElementById("2").addEventListener("play", function(){
context.fillStyle = "#FFADAD";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "black";

	document.getElementById("header").style.color="#FFADAD";

});
document.getElementById("3").addEventListener("play", function(){

context.fillStyle = "#99FFCC";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "black";
	document.getElementById("header").style.color="#99FFCC";

});
document.getElementById("4").addEventListener("play", function(){
context.fillStyle = "#FFFFAD";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 10;
context.stroke();
context.fillStyle = "black";

	document.getElementById("header").style.color="#FFFFAD";

});
for(var i=1; i<5; i++){
		document.getElementById("i").loop=true;
	}
	

}
window.addEventListener('load', init);




	
	// if(document.getElementById("1").paused){

	// }

	

