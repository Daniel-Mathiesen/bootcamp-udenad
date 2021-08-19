// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	const Navne = ["Daniel :P", "Caia <3", "Lakrids :3"];
	let UlElement = document.querySelector("#liste")

	Navne.forEach((navn) =>{
		UlElement.innerHTML += `<li> ${navn} </li>`
	})

}); // Afslutter: DOMContentLoaded