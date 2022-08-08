
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
        })
    }
});

function weather_info_link2(lat, lon) {
    api_key_2 = "49cc8c821cd2aff9af04c9f98c36eb74"
    var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${api_key_2}`
    fetch(url2).then((response) => {
        return response.json();
    }).then((data) => {
        weather_info_1day(data);
        weather_info_2day(data);
        weather_info_3day(data);
        weather_info_4day(data);
        weather_info_5day(data);
        weather_info_6day(data);
        weather_info_7day(data);
    })
}
function weather_info_1day(d2) {
    const event = new Date(d2.daily[0].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[0].weather[0].icon);
    var intvalue = Math.round(d2.daily[0].temp.day);
    document.getElementById('day_1').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_1_weather_staus').innerText = d2.daily[0].weather[0].main
    document.getElementById('day_1_airflow').innerText = d2.daily[0].wind_speed
    document.getElementById('day_1_humidity').innerText = d2.daily[0].humidity
    document.getElementById('day_1_tem').innerText = intvalue
    document.getElementById('day_1_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
function weather_info_2day(d2) {
    const event = new Date(d2.daily[1].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[1].weather[0].icon);
    var intvalue = Math.round(d2.daily[1].temp.day);
    document.getElementById('day_2').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_2_weather_staus').innerText = d2.daily[1].weather[0].main
    document.getElementById('day_2_airflow').innerText = d2.daily[1].wind_speed
    document.getElementById('day_2_humidity').innerText = d2.daily[1].humidity
    document.getElementById('day_2_tem').innerText = intvalue
    document.getElementById('day_2_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
function weather_info_3day(d2) {
    const event = new Date(d2.daily[2].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[2].weather[0].icon);
    var intvalue = Math.round(d2.daily[2].temp.day);
    document.getElementById('day_3').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_3_weather_staus').innerText = d2.daily[2].weather[0].main
    document.getElementById('day_3_airflow').innerText = d2.daily[2].wind_speed
    document.getElementById('day_3_humidity').innerText = d2.daily[2].humidity
    document.getElementById('day_3_tem').innerText = intvalue
    document.getElementById('day_3_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
function weather_info_4day(d2) {
    const event = new Date(d2.daily[3].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[3].weather[0].icon);
    var intvalue = Math.round(d2.daily[3].temp.day);
    document.getElementById('day_4').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_4_weather_staus').innerText = d2.daily[3].weather[0].main
    document.getElementById('day_4_airflow').innerText = d2.daily[3].wind_speed
    document.getElementById('day_4_humidity').innerText = d2.daily[3].humidity
    document.getElementById('day_4_tem').innerText = intvalue
    document.getElementById('day_4_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
function weather_info_5day(d2) {
    const event = new Date(d2.daily[4].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[4].weather[0].icon);
    var intvalue = Math.round(d2.daily[4].temp.day);
    document.getElementById('day_5').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_5_weather_staus').innerText = d2.daily[4].weather[0].main
    document.getElementById('day_5_airflow').innerText = d2.daily[4].wind_speed
    document.getElementById('day_5_humidity').innerText = d2.daily[4].humidity
    document.getElementById('day_5_tem').innerText = intvalue
    document.getElementById('day_5_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}
function weather_info_6day(d2) {
    const event = new Date(d2.daily[5].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[5].weather[0].icon);
    var intvalue = Math.round(d2.daily[5].temp.day);
    document.getElementById('day_6').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_6_weather_staus').innerText = d2.daily[5].weather[0].main
    document.getElementById('day_6_airflow').innerText = d2.daily[5].wind_speed
    document.getElementById('day_6_humidity').innerText = d2.daily[5].humidity
    document.getElementById('day_6_tem').innerText = intvalue
    document.getElementById('day_6_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`

}
function weather_info_7day(d2) {
    const event = new Date(d2.daily[6].dt * 1000);
    const options = { weekday: 'long' };
    const icon = (d2.daily[6].weather[0].icon);
    var intvalue = Math.round(d2.daily[6].temp.day);
    document.getElementById('day_7').innerText = event.toLocaleDateString(undefined, options);
    document.getElementById('day_7_weather_staus').innerText = d2.daily[6].weather[0].main
    document.getElementById('day_7_airflow').innerText = d2.daily[6].wind_speed
    document.getElementById('day_7_humidity').innerText = d2.daily[6].humidity
    document.getElementById('day_7_tem').innerText = intvalue
    document.getElementById('day_7_icon').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" alt="loding" class="card_day-weather">`
}