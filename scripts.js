function creatediv(){
  var myStringArray = [
  					   '<iframe src="news/1.html" width=100% frameborder=0 scrolling="no"></iframe>',
  					   '<iframe src="news/2.html" width=100% frameborder=0 scrolling="no"></iframe>',
  					   '<iframe src="news/1.html" width=100% frameborder=0 scrolling="no"></iframe>'
  					  ];

  var arrayLength = myStringArray.length;


  for (var i = arrayLength-1; i >=0; i--) {	
  	div = document.createElement("div");
    div.setAttribute('class', 'applebox newsbox');
    div.innerHTML = myStringArray[i];

    document.getElementById("news").appendChild(div);
  };
}
    
 
function news(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("news");
	document.getElementById("news").style.display = 'block';

	document.getElementById("teams").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';

	iFrameResize({heightCalculationMethod:'min'});

}

function teams(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("teams").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("kontakt").style.display = 'none';
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
}

function kontakt(){
	
	document.getElementById("maincontainer").innerHTML = document.getElementById("teams");
	document.getElementById("kontakt").style.display = 'block';

	document.getElementById("news").style.display = 'none';
	document.getElementById("teams").style.display = 'none';
	document.getElementById("ueberuns").style.display = 'none';
	document.getElementById("trainingszeiten").style.display = 'none';
}





