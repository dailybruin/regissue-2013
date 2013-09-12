// Use below link if you want to get latitude & longitude
// http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude.php

$(document).ready(function(){
    main_video_icon = "img/vd/map-marker-blue.png"
    
    function youtubeEmbed(url) {
        return '<iframe width="420" height="315" src="'+url+'" frameborder="0" allowfullscreen></iframe>'
    }
    //set up markers 
    var myMarkers = {"markers": [
                    {"latitude": "31.42866311735861", "longitude":"-98.61328125", "icon": main_video_icon, "baloon_text": youtubeEmbed("http://www.youtube.com/embed/My2FRPA3Gf8")},
                    {"latitude": "35.101934057246055", "longitude":"-96.6796875", "icon": main_video_icon, "baloon_text": 'This is <strong>Oklahoma</strong>'},
                    {"latitude": "38.61687046392973", "longitude":"-98.876953125", "icon": main_video_icon, "baloon_text": 'This is <strong>Kansas</strong>'}
            ]
    };
    
    //set up map options
    $("#map").mapmarker({
        zoom    : 12,
        center  : 'UCLA',
        markers : myMarkers
    });

});