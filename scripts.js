function replaceimg() {
	document.getElementById("herrenteam").src="teams/Herren11.jpg";
	document.getElementById("frauenteam").src="teams/Frauen1.jpg";
	document.getElementById("frauenteam2").src="teams/Damen2.jpg";
	document.getElementById("mädchenu20").src="teams/MädchenU20.jpg";
	document.getElementById("mädchenu16").src="teams/MädchenU16.jpg";
	document.getElementById("U14team").src="teams/MannschaftsfotoU14.jpg";
	document.getElementById("mixedteam").src="teams/Mixed.jpg";
	document.getElementById("beachteam").src="teams/beach.jpg";
}


function dropit(){
	document.getElementById("myDropdown").classList.toggle("show");
	placedropdown();
}

function placedropdown() {
	var height = $('#mobilenav').height();
	height = height + 10;
	$('.dropdown-content').css('marginTop',height);
}

/*
function replaceimgueberuns(){
	document.getElementById("ueberimg").src ="images/weihnachtsturnier2016.jpg"
}*/

var newsda = false;

function news(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("news");
	
	document.getElementById("news").style.display = 'block';

	document.getElementById("teams").style.display = 'none';
	document.getElementById("beach").style.display = 'none';
	document.getElementById("termine").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	document.getElementById("maincontainer").style.display = 'none';

	creatediv();
	newsda = true;

	iFrameResize({heightCalculationMethod:'min'});

}
  
  function creatediv(){
    var myStringArray = [
    '<iframe src="news/1.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/2.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/3.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/4.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/5.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/6.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/7.html" width=100% frameborder=0 scrolling="no"></iframe>',
    '<iframe src="news/8.html" width=100% frameborder=0 scrolling="no"></iframe>'
    ];

    var arrayLength = myStringArray.length;

    if(newsda == false){
	    for (var i = arrayLength-1; i >=0; i--) { 
	      div = document.createElement("div");
	      div.setAttribute('class', 'applebox newsboxog');
	      div.innerHTML = myStringArray[i];

	      document.getElementById("news").appendChild(div);

	    };
	}
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
