"use strict"

var lat = 51.508742;
var lng = -0.120850;

function initialize()
{
    var myCenter = new google.maps.LatLng(lat,lng);

    var mapProp = {
        center: myCenter,
        zoom:5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'icons/yellowShip.gif'
    });

    marker.setMap(map);

}

function loadScript()
{
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYUY3ksln3b4qH9i1VF978amQ8fy4ZQWc&sensor=false&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;