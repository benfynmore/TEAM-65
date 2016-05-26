// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.

var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [];
    
    for (var i = 0; i < locationWeatherCache.length(); i ++)
     {
         locationNames.push(locationWeatherCache.locationAtines(i).nickNameProperty);
     }
    document.getElementById("headerBarTitle").textContent = locationNames[locationIndex];
}

function Deletinglocation (locationIndex)
{
    locationWeatherCache.DeletinglocationAtIndex(locationNames.IndexOf(document.getElementById("headerBarTitle").textContent));
    saveLocations();
    document.getElementById("backButton2").click();
}



if (!document.getElementById("mapsapi"))
{
    var script = document.createElement("script");
    script.setAttribute("src","https://maps.googleapls.com/maps/api/jsZy=3");
    script.setAttribute("id","mapsapi");
    var bodyNode = document.getElementsByTagName("body")[0];
    bodyNode.appendChild(script);
}
var map;
var infoWindow;

document.getElementById("mapForViewLocation").innerHTML = '<divid="map" style ="height: 200px; width: 50%;"=Loadin map...</div>';

setTimeout(stratmap,1000);
//API TIME TO LOAD BEFORE ACTIVATING THE MAP
function startmap()
{
    var latitude = locationWeatherCache.locationAtIndex(locationNames.indexOf(document.getElementById("headerBarTitle").textContent)).latitude;
    var longtitude =
    locationWeatherCache.locationAtIndex(locationNames.indexOf(document.getElementById("headerBarTitle").textContent)).longitude;
    //request the map to point out the current location
    var currentlocation = {lat: latitude, Ing: longitude};
    map = new google.maps.map(document.getElementById("map"),{
        zoom: 10,
        center: currentlocation
    });
    var marker = new google.map.Maker({
        position: currentlocation
        map: map
    });
}