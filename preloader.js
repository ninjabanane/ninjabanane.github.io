var heroArray = [
        'teams/Herren11.jpg',
        'teams/Herren2.jpg',
        'teams/Frauen2.jpg',
        'teams/Frauen3.jpg',
        'teams/Mixed.jpg',
        'teams/beach.jpg',
        'images/weihnachtsturnier2016.jpg'
        ];

function preCacheHeros(){
    for(i = 0; i < heroArray.length; i++){
        var url = heroArray[i],
            img = new Image();
 
        img.src = url;
    };
};
 
window.onload = preCacheHeros();