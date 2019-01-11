var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = 350;
canvas.height = 350;

var x = 200
var y = 200
var xvelocity = 20;
var yvelocity = 20;
var c = canvas.getContext('2d');
c.fillStyle = "white";

c.fillRect(50,150, 60,60);
c.beginPath();
c.moveTo(200,200);
c.lineTo(300,100);
c.lineTo(12,42);

c.strokeStyle = "yellow";
c.stroke();
function animate(){
	c.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
	c.beginPath();
	
	c.arc(x, y, 30, 0, 2 * Math.PI, false);
	c.fill();

if(x + 30 >= 350){
	x = 319;
}
if(x <= 30){
	x = 31;

}
if(y + 30 >= 350) {
	y = 319;
}
if(y <= 30){
	y = 31;

}
console.log(x);
x += (-0.5 + Math.random()) * xvelocity;
y += (-0.5 + Math.random()) * yvelocity;



}
animate();
