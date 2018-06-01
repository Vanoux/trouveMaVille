function meteo() {

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=d23814f807c7a678102c27597bb36652&units=metric",
        function (data) {
            var celsius = data.main.temp;
            var descript = data.weather[0].description;
            $("#contain1").html("METEO TOULOUSE AUJOURD'HUI=> Température : " + celsius + " °C" + " Méteo : " + descript);
        });
};


function adresse() {

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Saint-gaudens,fr&appid=d23814f807c7a678102c27597bb36652&units=metric",
        function (data) {
            var latitude = data.coord.lat;
            var longitude = data.coord.lon;
            $("#contain2").html("SAINT GAUDENS => Latitude : " + latitude + " et  Longitude : " + longitude);
        });
};


function itineraire() {
    
    $.getJSON("https://www.mapquestapi.com/directions/v2/route?key=ZV75MleoxvAZUhoxTiO9ApBKPrYOALiy&from=Toulouse&to=Saint-gaudens&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false",
            function (data) {
                var temps = data.route.legs[0].formattedTime;
                var distance = data.route.legs[0].distance;
                $("#contain3").html("TRAJET TOULOUSE / ST GAUDENS => Temps : " + temps + " et Distance : " + distance*1.6 + "Km");
    });
};





//d23814f807c7a678102c27597bb36652 clé api openweather
//ZV75MleoxvAZUhoxTiO9ApBKPrYOALiy clé api MapQuest

//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=Toulouse&to=Saint-gaudens&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false

