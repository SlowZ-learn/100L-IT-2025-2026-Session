const API_KEY = "3a407e2f8d41f39ff5e38d3ab95b0bda";


// 
// fetch("https:api.openweathermap.org/data/2.5/weather?q=abuja&appid=" + API_KEY,)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         console.log(data.name);
//     })
//     .catch((error) => console.error(error));


// translate the state country current weather and humiditity

const inputField = document.getElementById("location-input-field");
const searchBtn = document.getElementById("search-location-btn");
const locationName = document.getElementById("Location-name");
const weatherName = document.getElementById("weather-name");
const humiditityName = document.getElementById("humidity-name");

let locationNameData;// keeps the location name 

searchBtn.addEventListener("click", async () => {
    let searchVariable = inputField.value.toLowerCase();
    console.log(searchVariable);



    locationNameData = fetch("https:api.openweathermap.org/data/2.5/weather?q=" + searchVariable + "&appid=" + API_KEY)
        .then((response) => response.json())
        .then((data) => {
            locationName.textContent = data.name
            weatherName.textContent = data.weather[0].description
            humiditityName.textContent = data.main.humidity

        })




})




