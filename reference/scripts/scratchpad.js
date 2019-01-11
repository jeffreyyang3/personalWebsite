

var body = document.body;

var user = [];
var profitarry = [];
var rand = [];
var time = [];
var cumul = [];
var timen = 0;
var cumulative = 0;
var show = false;
var stochastic;
var number;




var ctx = document.getElementById('chart');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: 'Time Series of User Values',
			borderColor: '#29B6F6',
			backgroundColor: 'rgba(41, 182, 246, 0.25)',
			data: user
		}],
	},
	options: {
		responsive: false, // responds to your browser window size
	}
});

var ctx1 = document.getElementById('chart1');
var chart1 = new Chart(ctx1, {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: 'Time Series of Stochastic Values',
			borderColor: '#29B6F6',
			backgroundColor: 'rgba(41, 182, 246, 0.25)',
			data: rand
		}],
	},
	options: {
		responsive: false, // responds to your browser window size
		layout: {
			display: 'inline-block'
		}
	}
});
var ctx2 = document.getElementById('chart2');
var chart2 = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: 'Current Profit',
			borderColor: '#29B6F6',
			backgroundColor: 'rgba(41, 182, 246, 0.25)',
			data: profitarry
		}],
	},
	options: {
		responsive: false, // responds to your browser window size
		layout: {
			//display: 'inline-block'
		}
	}
});
var ctx3 = document.getElementById('chart3');
var chart3 = new Chart(ctx3, {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: 'Cumulative Profit Over Time',
			borderColor: '#29B6F6',
			backgroundColor: 'rgba(41, 182, 246, 0.25)',
			data: cumul
		}],
	},
	options: {
		responsive: false, // responds to your browser window size
		layout: {
			display: 'inline-block'
		}
	}
});





function add(){
	var value = document.getElementById('input').value;
	if(Math.abs(value) > 1 || value < 0 || isNaN(value)){
		alert("Input a number between 0 and 1");
	}
	else{
	where(value);
	}
}


function where(number1){	
		console.log("where	", number1);
	
	
	
		//var number = prompt("Enter a number between 0 and 1");
		stochastic = Math.random();
		
		
		if(number1 != null){
			var profit = (1-((Number(number1) - stochastic) * (Number(number1) - stochastic)))
			user.push(number1);
			chart.data.datasets[0].data = user;
			chart.data.labels.push(user.length);
			chart.update();
			chart1.data.datasets[0].data = rand;
			chart1.data.labels.push(user.length);
			chart1.update();
			chart2.data.datasets[0].data = profitarry;
			chart2.data.labels.push(user.length);
			chart2.update();
			chart3.data.datasets[0].data = cumul;
			chart3.data.labels.push(user.length);
			chart3.update();
			rand.push(stochastic);
			profitarry.push(profit);
			time.push(timen);
			timen++;
			cumulative += profit;
			cumul.push(cumulative);
			document.getElementById("profit").innerHTML = "Current Profit: " + profit.toFixed(3);
			document.getElementById("cumulative").innerHTML = " Cumulative Profit " + cumulative.toFixed(3);
			if(show){

			document.getElementById("randnum").innerHTML = "Stochastic Value: " + stochastic;

			}
			else{
					document.getElementById("randnum").innerHTML = "";
				
			}


		}

	

}
function toggle(){
	show = !show;
	if(show){
		document.getElementById("randnum").innerHTML = "Stochastic Value: " + stochastic;
	}
	else{
		document.getElementById("randnum").innerHTML = "";

	}

}





