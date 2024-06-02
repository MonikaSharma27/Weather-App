const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#wind-speed");
const locationFound = document.querySelector(".location-not-found")
const weatherBody = document.querySelector(".weather-body");

async function checkWeather(city) {
    const api_key = "a494f8d1a4e23f18ee532488cf892977";
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        locationFound.style.display="flex";
        weatherBody.style.display="none";
        return;
    }
    locationFound.style.display="none";
weatherBody.style.display= "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch (weather_data.weather[0].main) {
        case "Clouds":
            weatherImg.src = "/images/cloud.png";
            break;
        case "Clear":
            weatherImg.src = "/images/clear.webp";
            break;
        case "Rain":
            weatherImg.src = "/images/rain.webp";
            break;
        case "Mist":
            weatherImg.src = "/images/mist.png";
            break;
        case "Snow":
            weatherImg.src = "/images/snow.png";
            break;
    }

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);

})

