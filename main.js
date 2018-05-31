function meteo() {

$.getJSON("http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22",
        function (data) {
            var celsius = data.list[0].main.temp;
            var descript = data.list[0].weather.description;
            $(".contain").html("Température : " + celsius + " °C" + " Méteo : " + descript);
        });
};