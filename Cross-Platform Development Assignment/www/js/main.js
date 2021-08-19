"use strict";


var map;  
var infowindow;
var marker;
//Atheltics Locations
var athleticsEvents = [ 
	{lat: 53.227056, lng: -0.544663}, //Engine Shed
	{lat: 53.228182, lng: -0.552487}, //Astro Turf
  	{lat: 53.229256, lng: -0.539591}  //Trebles
	];

//Football Locations
 var footballEvents = [
	{lat: 53.229357, lng: -0.554514}, //Astro Turf 1
	{lat: 53.228439, lng: -0.547725}, //Astro Turf
	{lat: 53.230479, lng: -0.540919} //Astro turf 2
 ]; 

//CompSci Locations
var compSciEvents = [
	{lat: 53.226837, lng: -0.548161}, //Isaac Newton Building
	{lat: 53.228221, lng: -0.552476}, //Mirnirva Building
	{lat: 53.230479, lng: -0.540919} //The Mailbox
 ]; 

//Comedy Locations
var comedyEvents = [
	{lat: 53.228426, lng: -0.547864},  //Mirniva Building
	{lat: 53.227251, lng: -0.546084}, //LPAC Building
	{lat: 53.229069, lng: -0.548327}//The Swan
 ]; 




document.addEventListener('deviceready', function() {
	console.log("device ready");
	initMap();
});
$(document).ready(function(){
	console.log('browser_ready');
	initMap();
});


$(document).ready(function(){	
	
	$("#marker1").click(function() {
	for (var j=0; j<athleticsEvents.length; j++) {
			addMarker(athleticsEvents[j], map);
		  }
	});
	
	$("#marker2").click(function() {
		  for (var i=0; i<footballEvents.length; i++) {
			addMarker(footballEvents[i], map);
		  }
	});
	
	$("#marker3").click(function() {
		for (var k=0; k<compSciEvents.length; k++) {
			addMarker(compSciEvents[k], map);
		  }
	});
	
	$("#marker4").click(function() {
		for (var s=0; s<comedyEvents.length; s++) {
			addMarker(comedyEvents[s], map);
		  }
	});
	
	$("#select-native-4").change(function(){
	 initMap();
	var val = $("#select-native-4").val();
		
	if (val === "1") {
		for (var j=0; j<athleticsEvents.length; j++) {
			addMarker(athleticsEvents[j], map);
		  }
	}
		
    if (val === "2") {
 	for (var i=0; i<footballEvents.length; i++) {
			addMarker(footballEvents[i], map);
		  }
	}
		
	if (val === "3") {
		for (var k=0; k<compSciEvents.length; k++) {
		addMarker(compSciEvents[k], map);
		}
	}
		
	if (val === "4") {
		for (var s=0; s<comedyEvents.length; s++) {
			addMarker(comedyEvents[s], map);
		  }
	}
    
	});
	
	
	
});


$(document).ready(function(){	
	$("#locateMe").click(function() {
		myLocation(infowindow, map);
	});
});

/*

document.addEventListener('deviceready', function() {
	console.log("device ready");
	innit();
});
$(document).ready(function(){
	console.log('browser_ready');
	innit();
});

function innit(){
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	
	//Check for internet as soon as the device is ready
	if (window.navigator.onLine){
		//this adds a class to the body tag which css will style
		$('body').addClass('online');
	} else{
		//this adds a class to the body tag which css will style
		$('body').addClass('offline');
	}
}

//handle online and offline intermittent connectivity
function onOffline(){
	//Handle the offline event
	//adding and removing classes
	$('body').removeClass('online');
	$('body').addClass('offline');
}

function onOnline(){
	//Handle the online event
	$('body').addClass('online');
	$('body').removeClass('offline');
}
*/

	

// ----------------------------------MAPPING FUNCTIONS-------------------------------------- 	
	
function initMap() {
	map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 53.227217, lng: -0.545492}, //Lincoln, UK
    zoom: 13
	});
}

function addMarker(position, map){	
	var marker = new google.maps.Marker({
		position: position,
		map: map,
		animation: google.maps.Animation.DROP,
	});
	marker.addListener('click', toggleBounce);
	console.log(position);
}

function myLocation(){
         navigator.geolocation.getCurrentPosition(function(position) {

            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content:
                    '<h4>You are Here!</h4>'
            });
            map.setCenter(geolocate);

        });
}

function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

//-------------------------------------TIMETABLE FUNCTIONS----------------------------------


 