// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
var count = document.getElementById("text-count");
var number = 5;
var max = 10;
var min = 0;
var Increase = document.getElementById("btn-count-increase");
var Decrease = document.getElementById("btn-count-decrease");
document.addEventListener("DOMContentLoaded", () => {

Increase.addEventListener("click", increase);

function UpdateNumber(){
	document.getElementById("text-count").innerHTML = number;
};

UpdateNumber();

function increase(){
	if(number<max){
	number++;
	UpdateNumber();
	}
};

Decrease.addEventListener("click", decrease);

function decrease(){
	if (number>min) {
		number--;
		UpdateNumber();
	}
} 

}); // Afslutter: DOMContentLoaded