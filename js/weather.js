const API_KEY="c3c494c6cb914ee42ed327cee309c1be"

function onGeoOk(Position){
    const lat = Position.coords.latitude;
    const lon = Position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data.name, data.weather[0].main, data.main.temp)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = data.main.temp;
        console.log(typeof temp)
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);