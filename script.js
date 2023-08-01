//https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=f73aab788ad419390bd2445fd90e0c29&units=metric

const apiKey = "f73aab788ad419390bd2445fd90e0c29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

var errorMsg = document.querySelector(".error");
var weatherDiv = document.querySelector(".weather");

weatherDiv.style.display = "none";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        errorMsg.style.display = "block";
        weatherDiv.style.display = "none";
    } else {
        errorMsg.style.display = "none";
        weatherDiv.style.display = "block";
    }
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherType = data.weather[0].main;

    switch (weatherType) {
        case "Clouds":
            weatherIcon.src = "assets/clouds.png"
            break;
        case "Clear":
            weatherIcon.src = "assets/clear.png"
            break;
        case "Rain":
            weatherIcon.src = "assets/rain.png"
            break;
        case "Drizzle":
            weatherIcon.src = "assets/drizzle.png"
            break;
        case "Mist":
            weatherIcon.src = "assets/mist.png"
            break;
        case "Snow":
            weatherIcon.src = "assets/snow.png"
            break;
        default:
    }

}

searchBtn.addEventListener("click", () => {
    console.log("clicked")
    checkWeather(search.value);
});

checkWeather("colombo");

