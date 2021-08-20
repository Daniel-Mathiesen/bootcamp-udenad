// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function Array(NavneHenter){
		const Navne = ["Daniel :P", "Caia <3", "Lakrids :3"];
		Navne.forEach((navn) =>{
			console.log(navn)
		})
	}

	Array();

}); // Afslutter: DOMContentLoaded