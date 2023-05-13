var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("name").focus();
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function displayResults() {
	var average = 0;
	for(var i = 0; i < scores.length; i++)
	{
		average = (average * (i) + scores[i]) / (i + 1);
	}
	var max_score = Math.max(...scores);
	var max_index = scores.indexOf(max_score);
	var max_name = names[max_index];
	document.getElementById("results").innerHTML = "<br\>" + "<h2> Results </h2><br /> Average score = " + average + "<br \> "
													+ "High score = " + max_name + " with a score of " + max_score;
}

function displayScores() {
	var display = "<h2> Scores </h2><br /> <table><tr><th>Name</th><th>Score</th></tr>";
	for(var i = 0; i < scores.length; i++)
	{
		display += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
	}
	display += "</table>";
	document.getElementById("scores_table").innerHTML = display;
}

function addScore() {
	var add_name = $("name").value;
	var add_score = $("score").value;
	if (add_name == "" || add_score == "")
	{
		alert("You must enter a name and a valid score.");
		return;
	} else {
		names.push(add_name);
		add_score = parseInt(add_score);
		scores.push(add_score);
	}
}