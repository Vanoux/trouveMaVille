function meteo() {
    //$.getJSON("http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22",
     $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=2972314&APPID=421e1555bbe68590791b9f3fa7760e5c&units=metric,   
    function (data) {
        var celsius = data.list[0].main.temp;
        var descript = data.list[0].weather.description;
        $(".contain").html("La temperature est de : " + celsius + "°C" + "<br>" + "Le temps est : " + descript);
    });
};


