// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(navn){
		console.log(`Hej med dig, ${navn}!`);
	}

	hils("Daniel");
	hils("Caia");
	hils("Lakrids :3"); 
}); // Afslutter: DOMContentLoaded