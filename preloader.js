var heroArray = [
        'teams/Herren11.jpg',
        'teams/Herren2.jpg',
        'teams/Damen2.jpg',
        'teams/MaedchenU20.jpg',
        'teams/MaedchenU16.jpg',
        'teams/MannschaftsfotoU14.jpg',
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