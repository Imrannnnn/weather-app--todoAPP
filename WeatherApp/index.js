
let city = "china"

const apikey = "2f02bc11714589f555f7f6c9777941d0"
const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apikey}&units=metric`;

async function checkWeather() {
    const response = await fetch(apiUrl)
    let data = await response.json()

    console.log(data)


    document.querySelector(".city") = data.name ;
    document.querySelector(".temp") = Math.round(data.main.temp) + "C";
    document.querySelector(".humidity") = data.main.humidity + "%";
    document.querySelector(".wind") = data.wind.speed + "Km/h";
}

checkWeather()