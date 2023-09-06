const apikey = "2b2a6c7e6de0d339066ce5917cd90ab5";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
})

function getWeatherData(cityValue){
    try {
        
    } catch (error) {
        
    }
}