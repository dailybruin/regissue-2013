// Use below link if you want to get latitude & longitude
// http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude.php

var main_video_icon = "img/vd/map-marker-blue.png"
function makeMap(markers) {
    
    //set up markers 
    var places = {"markers": []
    };
    
    //add the places passed as args
    for (i = 0; i < arguments.length; i++) {
        places['markers'].push(arguments[i]);
    }
    
    //set up map options
    $("#map").mapmarker({
        zoom    : 13,
        center  : 'Dodger Stadium, Los Angeles, CA',
        markers : places
    });
}

function youtubeEmbed(url) {
    return '<iframe width="560" height="315" src="'+url+'" frameborder="0" allowfullscreen></iframe>'
}