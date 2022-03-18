const API_KEY="c3c494c6cb914ee42ed327cee309c1be"

function onGeoOk(Position){
    const lat = Position.coords.latitude;
    const lon = Position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data.name, data.weather[0].main, data.main.temp)
        const weather = document.querySelector(".weather__box span:first-child");
        const temp = document.querySelector(".weather__box span:nth-child(2)");
        const city = document.querySelector(".weather__box span:last-child");
        /***weather.innerText = data.weather[0].main;***/
        temp.innerText = `${Math.round(data.main.temp)}°`;
        city.innerText = data.name;
        const weatherText = data.weather[0].main;
        if(weatherText === "Clouds"){
            weather.classList.add("fas", "fa-cloud");
        } else if (weatherText === "Clear") {
            weather.classList.add("fas", "fa-sun");
        } else if (weatherText === "Thunderstorm") {
            weather.classList.add("fas", "fa-bolt");
        } else if (weatherText === "Drizzle") {
            weather.classList.add("fas", "fa-water");
        } else if (weatherText === "Rain") {
            weather.classList.add("fas", "fa-umbrella");
        } else if (weatherText === "Snow") {
            weather.classList.add("fas", "fa-snowflake");
        } else if (weatherText === "Atmosphere") {
            weather.classList.add("fas", "fa-somg");
        } else {
            weather.classList.add("fas", "fa-cloud");
        }
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);