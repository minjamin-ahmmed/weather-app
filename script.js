console.log("I am Javascript File");

const apiKey = "f35bfc92cef05ad56a5083f3cb8b93b9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const citySearch = document.getElementById('city-search')
const btn = document.getElementById('buttton')
const weatherIcon = document.getElementById('weather-icon')

const checkWeather = async(city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()

    console.log(data);
    
    const temperature = document.getElementById('temp')
    const cityName = document.getElementById('city-name')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind-speed')

    temperature.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%"
    windSpeed.innerText = data.wind.speed + "Km/h"
    cityName.innerText = data.name

    console.log(data.weather[0].main);
    

    if(data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Haze" || data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
        
    }else{
        weatherIcon.src="images/clear.png"
    }



}

btn.addEventListener('click', function(){

    checkWeather(citySearch.value)
    
})


