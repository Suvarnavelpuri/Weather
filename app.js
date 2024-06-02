document.addEventListener("DOMContentLoaded", () => {

    const apikey = "906f36f2cb911254b8595bde9d232db8";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".serch input");
    const searchBtn = document.querySelector(".serch button");
    const WeatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";

        } else {
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            if (data.weather[0].main == "Clouds") {
                WeatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                WeatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Drizzle") {
                WeatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                WeatherIcon.src = "images/mist.png";
            } else if (data.weather[0].main == "Rain") {
                WeatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Snow") {
                WeatherIcon.src = "images/snow.png";
            }
            // document.querySelector(".weather").style.visibility = "visible";
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }


    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});


