function replaceimg() {
	document.getElementById("herrenteam").src="teams/Herren11.jpg";
	document.getElementById("herrenteam2").src="teams/Herren2.jpg";
	document.getElementById("frauenteam").src="teams/Frauen1.jpg";
	document.getElementById("frauenteam2").src="teams/Frauen2.jpg";
	document.getElementById("frauenteam3").src="teams/Frauen3.jpg";
	document.getElementById("mixedteam").src="teams/Mixed.jpg";
}

function replaceimgueberuns(){
	document.getElementById("ueberimg").src ="images/weihnachtsturnier2016.jpg"
}

function news(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("news");
	document.getElementById("news").style.display = 'block';

	document.getElementById("teams").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	creatediv();

	iFrameResize({heightCalculationMethod:'min'});

}

function teams(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("teams").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	replaceimg();
}

function trainingszeiten(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("trainingszeiten").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';
}

function ueberuns(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("ueberuns").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	replaceimgueberuns();
}

function kontakt(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("kontakt").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
}


