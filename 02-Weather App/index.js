// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = "23452a215e99c24e452175b6ff4e8081";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                alert("City not found. Please enter a valid city name.");
                return;
            }

            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
<h3>${data.name}, ${data.sys.country}</h3>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].description}</p>
`;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data. Please try again later.");
        });
}
