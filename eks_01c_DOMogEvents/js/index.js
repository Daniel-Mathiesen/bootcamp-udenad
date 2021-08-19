// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
var count = document.getElementById("text-count");
var number = 5;
var max = 10;
var min = 0;
var Increase = document.getElementById("btn-count-increase");
var Decrease = document.getElementById("btn-count-decrease");
document.addEventListener("DOMContentLoaded", () => {

function UpdateNumber(){
	document.getElementById("text-count").innerHTML = number;
};

UpdateNumber();

function MaxMin(direction){
	if(direction === "inc" && number<max){
		number++;
		UpdateNumber();
	} else if(direction === "dec"&& number>min){
		number--;
		UpdateNumber();
	}
};

Increase.addEventListener("click", () => MaxMin("inc"));
Decrease.addEventListener("click", () => MaxMin("dec"));

}); // Afslutter: DOMContentLoaded