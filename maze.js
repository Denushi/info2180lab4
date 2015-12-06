"use strict";
var winLose="win";

window.onload = function()
{
	var boundaries=$$("div#maze div.boundary");
	for (var x = 0;x < boundaries.length; x++)
	{
		boundaries[x].onmouseover = changeColour;		
	} 
	$("start").observe("mouseout",track);
	$("end").onmouseover = endMessage;
	$("start").onclick = reset;
	
};

function changeColour() 
{	
	winLose = "lose";
	var boundaries=$$("div#maze div.boundary");
	for (var x = 0;x < boundaries.length; x++)
	{
		boundaries[x].addClassName("youlose");		
	} 
}

function reset()
{
	winLose = "win";
	var boundaries=$$("div#maze div.boundary");
	for(var x = 0;x < boundaries.length;x++)
	{
		boundaries[x].removeClassName("youlose");
	}	
	$("status").innerHTML = "Move your mouse over the \"S\" to begin.";

}

function track(event)
{
	var rect = $("start").getBoundingClientRect();
	var mousex = event.clientX;
	console.log(mousex);
	if(mousex<rect.left)
	{
				changeColour();
	}
	
}

function endMessage()
{
	if (winLose == "win")
	{
		$("status").innerHTML = "You Win!";
	}
	else
	{
		$("status").innerHTML = "You Lost!";
	}
}