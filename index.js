
var input = document.getElementById("search");

function weather_info(d) {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    let x = moment.utc(d.sys.sunrise, 'x').add(d.sys.timezone, 'seconds').format('HH:mm a');
    let y = moment.utc(d.sys.sunset, 'x').add(d.sys.timezone, 'seconds').format('HH:mm a ');
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    const event = new Date(d.dt * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('city').innerHTML = d.name;
    document.getElementById('today_temp').innerHTML = celcius;
    document.getElementById('country').innerHTML = regionNamesInEnglish.of(d.sys.country);
    document.getElementById('sunrise').innerHTML = x;
    document.getElementById('sunset').innerText = y;
    document.getElementById('date').innerHTML = event.toLocaleDateString(undefined, options);
    var lat = (d.coord.lat);
    var lon = (d.coord.lon);
    weather_info_link2(lat, lon);
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var city = input.value;
        var api_key = "7899f545cf22a5512d68a9d8b7659733"
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            weather_info(data)
        }).catch((error) => alert("Invalid City Name!"));
    }
});

function weather_info_link2(lat, lon) {
    api_key_2 = "49cc8c821cd2aff9af04c9f98c36eb74"
    var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${api_key_2}`
    fetch(url2).then((response) => {
        return response.json();
    }).then((data) => {

        var daily_data = data.daily;
        console.log(daily_data);
        for (const i in daily_data) {
            weather_info_day(data, i)
        }


    })
}

function weather_info_day(d2, i) {
    const event = new Date(d2.daily[i].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[i].weather[0].icon);
    var intvalue = Math.round(d2.daily[i].temp.day);
    document.getElementsByClassName('day')[i].innerHTML = event.toLocaleDateString(undefined, options)
    document.getElementsByClassName('day_weather_staus')[i].innerText = d2.daily[i].weather[0].main
    document.getElementsByClassName('day_airflow')[i].innerText = d2.daily[i].wind_speed
    document.getElementsByClassName('day_humidity')[i].innerText = d2.daily[i].humidity
    document.getElementsByClassName('day_tem')[i].innerText = intvalue
    document.getElementsByClassName('day_icon')[i].innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
