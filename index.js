// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=/{API key}
var input = document.getElementById("search");
function weather_info(d) {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

    let x = moment.utc(d.sys.sunrise, 'X').add(d.sys.timezone, 'seconds').format('HH:mm ');
    let y = moment.utc(d.sys.sunset, 'X').add(d.sys.timezone, 'seconds').format('HH:mm ');
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    const event = new Date(d.dt);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(event.toLocaleDateString(undefined, options));

    document.getElementById('city').innerHTML = d.name;
    document.getElementById('today_temp').innerHTML = celcius;
    document.getElementById('country').innerHTML = regionNamesInEnglish.of(d.sys.country);
    document.getElementById('sunrise').innerHTML = x;
    document.getElementById('sunset').innerHTML = y;
    document.getElementById('date').innerHTML = event.toLocaleDateString(undefined, options);

    console.log(x);

}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var city = input.value;
        console.log(city);
        var api_key = "7899f545cf22a5512d68a9d8b7659733"
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            weather_info(data)
        })

    }
});

