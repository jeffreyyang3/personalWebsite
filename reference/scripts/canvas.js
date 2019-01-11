var canvas = document.getElementById("banvas");
canvas.width = 320;
canvas.height = 320;

var c = canvas.getContext('2d');

var arry = [];
var trail = [];
c.fillStyle = "white";


function Ball(x,y){
	this.x = x;
	this.y = y;
	this.xvelocity = Math.random() * 6;
	this.yvelocity = Math.random() * 6;
	this.radius = 30;
	this.start = 0;
	this.end = 2 * Math.PI;
	this.r = Math.round(255 * Math.random());
	this.g = Math.round(255 * Math.random());
	this.b = Math.round(255 * Math.random());
	this.alpha = 1;
	this.trailx = [];
	this.traily = [];
}

document.getElementById('banvas').addEventListener('click', function(event){
	//mouse
	
	arry.push(new Ball(event.offsetX,event.offsetY));
});



function animate(){
	c.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
	c.beginPath();

	for(i = 0; i < arry.length; i++){
		c.arc(arry[i].x, arry[i].y, arry[i].radius, arry[i].start, arry[i].end, false);

	
		
		c.closePath();
		c.fill();

		

		if(arry[i].x + 30 >= 350){
			arry[i].xvelocity *= -1;
		}
		if(arry[i].x <= 30){
			arry[i].xvelocity *= -1;

		}
		if(arry[i].y + 30 >= 350) {
			arry[i].yvelocity *= -1;
		}
		if(arry[i].y <= 30){
			arry[i].yvelocity *= -1;

		}

		
		arry[i].x += arry[i].xvelocity;
		arry[i].y += arry[i].yvelocity;
		


	}



	
	
	

	

}
function resetcanvas(){
	arry = [];
	trail = [];
}


animate();