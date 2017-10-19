$(document).ready(function(){

	var Random = Math.floor(Math.random()*101+19)
	$('#randomNumber').text(Random);

	var firstNum = Math.floor(Math.random()*11+1)
	var secondNum = Math.floor(Math.random()*11+1)
	var thirdNum = Math.floor(Math.random()*11+1)
	var fourthNum = Math.floor(Math.random()*11+1)
	var score = 0;
	var wins = 0;
	var losses = 0;

	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

	$('#blue').on('click', function(){
		score = score + firstNum;
		console.log("New score = " + score);
		$('#finalScore').text(score);

			if (score === Random) {
				winner();
			}
			else if (score > Random) {
				loser();
			}
	})

	$('#yellow').on('click', function(){
		score = score + secondNum;
		console.log("New score = " + score);
		$('#finalScore').text(score);

			if (score === Random) {
				winner();
			}
			else if (score > Random) {
				loser();
			}
	})

	$('#purple').on('click', function(){
		score = score + thirdNum;
		console.log("New score = " + score);
		$('#finalScore').text(score);

			if (score === Random) {
				winner();
			}
			else if (score > Random) {
				loser();
			}
	})

	$('#green').on('click', function(){
		score = score + fourthNum;
		console.log("New score = " + score);
		$('#finalScore').text(score);

			if (score === Random) {
				winner();
			}
			else if (score > Random) {
				loser();
			}
	})


	function reset (){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)

		$('#randomNumber').text(Random);
		firstNum = Math.floor(Math.random()*11+1)
		secondNum = Math.floor(Math.random()*11+1)
		thirdNum = Math.floor(Math.random()*11+1)
		fourthNum = Math.floor(Math.random()*11+1)
		score = 0
		$('#finalScore').text(score);
	}

	function winner(){
		alert("Congrats! You are the winner!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}

	function loser(){
		alert("Oh darn! You are a loser!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}

})