// Use below link if you want to get latitude & longitude
// http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude.php

$(document).ready(function(){
    main_video_icon = "img/vd/map-marker-blue.png"
    
    function youtubeEmbed(url) {
        return '<iframe width="560" height="315" src="'+url+'" frameborder="0" allowfullscreen></iframe>'
    }
    //set up markers 
    var myMarkers = {"markers": [
                    {"latitude": "34.050224", "longitude":"-118.245450", "icon": main_video_icon, "baloon_text": youtubeEmbed("http://www.youtube.com/embed/OolQsN5eZFI")},
                    {"latitude": "34.047787", "longitude":"-118.249483", "icon": main_video_icon, "baloon_text": youtubeEmbed("http://www.youtube.com/embed/DvyLH7EKQd4")},
                    {"latitude": "33.76516328701958", "longitude":"-118.20465087890625", "icon": main_video_icon, "baloon_text": youtubeEmbed("http://www.youtube.com/embed/9mTG72stghY")}
            ]
    };
    
    //set up map options
    $("#map").mapmarker({
        zoom    : 9,
        center  : 'Los Angeles',
        markers : myMarkers
    });

});