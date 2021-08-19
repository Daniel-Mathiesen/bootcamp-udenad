// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(navn){
		return `Hej med jer, ${navn}!`;
		
	}
	let Hilsen = hils("Daniel, Caia og Lakrids:3!");


 console.log(Hilsen)
	hils("Daniel");
	hils("Caia");
	hils("Lakrids :3"); 
}); // Afslutter: DOMContentLoaded