function replaceimg() {
	document.getElementById("herrenteam").src="teams/Herren11.jpg";
	document.getElementById("frauenteam").src="teams/Frauen1.jpg";
	document.getElementById("frauenteam2").src="teams/Damen2.jpg";
	document.getElementById("maedchenu20").src="teams/MaedchenU20.jpg";
	document.getElementById("maedchenu16").src="teams/MaedchenU16.jpg";
	document.getElementById("JungenU16").src="teams/JungenU16.jpg";
	document.getElementById("U14team").src="teams/MannschaftsfotoU14.jpg";
	document.getElementById("mixedteam").src="teams/mixedneu1.jpg";
	document.getElementById("beachteam").src="teams/beach.jpg";
}

function dropit(){
	document.getElementById("myDropdown").classList.toggle("show");
}


/*
function replaceimgueberuns(){
	document.getElementById("ueberimg").src ="images/weihnachtsturnier2016.jpg"
}*/


function news(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("news");
	
	document.getElementById("news").style.display = 'block';

	document.getElementById("teams").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("termine").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';


}
  

function teams(){	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("teams").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("termine").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';

	replaceimg();
}


function beach(){	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("beach").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';	
	document.getElementById("termine").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';

	replaceimg();
}

function termine(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("termine").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';

}

function ueberuns(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("ueberuns").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("termine").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';	

	//replaceimgueberuns();
}

function kontakt(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("kontakt").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("termine").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';
	
}


function goback () {
    if(window.location.hash.indexOf("navi") > -1) {

    }else 
    	if(window.location.hash.indexOf("News") > -1) {
       news();
    }else
        if(window.location.hash.indexOf("Teams") > -1) {
       teams();
    }else
        if(window.location.hash.indexOf("Beach") > -1) {
       beach();
    }else
    if(window.location.hash.indexOf("Termine") > -1) {
       termine();
    }else
    if(window.location.hash.indexOf("Ueberuns") > -1) {
       ueberuns();
    }else
    if(window.location.hash.indexOf("Kontakt") > -1) {
       kontakt();
    }
    else if(window.location.hash.indexOf("Orte") > -1) {}
    else if(window.location.hash.indexOf("gallery") > -1) {}

    else {
        window.location = 'index.html';}

    if(window.location.hash.indexOf("herren") > -1){
    	window.location.href = '#Teamsherren';
    }
    if(window.location.hash.indexOf("damen") > -1){
    	window.location.href = '#Teamsdamen';
    }
    if(window.location.hash.indexOf("jugend") > -1){
    	window.location.href = '#Teamsjugend';
    }
    if(window.location.hash.indexOf("kinder") > -1){
    	window.location.href = '#Teamskinder';
    }
    if(window.location.hash.indexOf("mixed") > -1){
    	window.location.href = '#Teamsmixed';
    }
    if(window.location.hash.indexOf("frontgallery") > -1){
    	window.location.href = '#frontgallery';
    }


}


var last_hash = "";

setInterval(function(){
    hash = window.location.hash;

    if(last_hash != hash && hash.length != 1){
    	goback();
        last_hash = window.location.hash;
    }
}, 250);



var boxstate = 1;
var element = document.getElementById("popupbox");

function popupbox(){
	element.style.transition = "all 2s";
	if(boxstate==1){
		element.style.marginLeft = '-22vw';
		document.getElementById("cross").innerHTML = '&#9658;';
		boxstate = 0;
	} 

	else {
		element.style.marginLeft = '-2vw';
		document.getElementById("cross").innerHTML = '&#9668;';
		boxstate = 1;
	}

}

function mehrladen(h){
	document.getElementById(h).style.display = 'block';
	document.getElementById(h+'btn').style.display = 'none';
	if(h =="mehrladen2"){
		document.getElementById('mehrladen1btn').style.display = 'block';
	}
}

var status = "less";

function showderrest(b)
{   
     if (status == "less") {
        document.getElementById(b).style.display = 'block';
        document.getElementById("toggleButton" + b).innerText = "Weniger sehen";
        try {document.getElementById("img" + b).style.height = "20vw";}
        catch(err){}
        status = "more";
    } else if (status == "more") {
        document.getElementById(b).style.display = 'none';
        document.getElementById("toggleButton" + b).innerText = "Weiterlesen";
        try{document.getElementById("img" + b).style.height = "10vw";}
        catch(err){}
        status = "less";
    }
}   