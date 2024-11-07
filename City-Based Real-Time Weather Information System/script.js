const apiKey = '99d666f9f326d2e4aac3621dd8b8ef39'; // Replace with your actual API key

// Function to fetch and display weather for the given city
async function getWeather(city) {
    try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const weatherData = await weatherResponse.json();
        
        if (weatherResponse.ok) {
            clearError(); // Clear any previous error message
            displayWeather(weatherData);
        } else {
            displayError("City not found. Please enter a valid city name.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        displayError("Something went wrong. Please try again later.");
    }
}

// Function to handle the search
function searchCity() {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        getWeather(city);
    } else {
        displayError("Please enter a city name.");
    }
}

// Function to handle the Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchCity();
    }
}

// Function to display basic weather data
function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('weatherDesc').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('visibility').innerText = `${(data.visibility / 1000).toFixed(1)} km`;
}

// Function to display error message in a non-intrusive way
function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = message;
}

// Function to clear the error message
function clearError() {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = "";
}
