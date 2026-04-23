// OpenWeatherMap API configuration
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Get API key from localStorage or use empty string
let API_KEY = localStorage.getItem('weather_api_key') || '';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const errorMessage = document.getElementById('error-message');
const weatherInfo = document.getElementById('weather-info');
const apiKeyInput = document.getElementById('api-key-input');
const saveApiKeyBtn = document.getElementById('save-api-key-btn');
const apiKeySection = document.getElementById('api-key-section');

// Weather display elements
const locationEl = document.getElementById('location');
const dateEl = document.getElementById('date');
const temperatureEl = document.getElementById('temperature');
const weatherIconEl = document.getElementById('weather-icon');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const feelsLikeEl = document.getElementById('feels-like');
const pressureEl = document.getElementById('pressure');

// Event Listeners
searchBtn.addEventListener('click', fetchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});

// Save API key to localStorage
saveApiKeyBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if (key) {
        localStorage.setItem('weather_api_key', key);
        API_KEY = key;
        apiKeySection.style.display = 'none';
        fetchWeather();
    }
});

// Show API key input if not saved
if (!API_KEY) {
    apiKeySection.style.display = 'block';
} else {
    apiKeySection.style.display = 'none';
}

// Fetch weather data from API
async function fetchWeather() {
    const city = cityInput.value.trim();

    if (!API_KEY) {
        showError('Please enter your API key first');
        return;
    }

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found');
            } else if (response.status === 401) {
                throw new Error('Invalid API key');
            } else {
                throw new Error('Failed to fetch weather data');
            }
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    }
}

// Display weather data in the UI
function displayWeather(data) {
    hideError();

    // Location and date
    locationEl.textContent = `${data.name}, ${data.sys.country}`;
    dateEl.textContent = getCurrentDate();

    // Temperature (convert to integer)
    temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;

    // Weather icon
    const iconCode = data.weather[0].icon;
    weatherIconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather icon">`;

    // Description
    descriptionEl.textContent = data.weather[0].description;

    // Additional details
    humidityEl.textContent = `${data.main.humidity}%`;
    windSpeedEl.textContent = `${data.wind.speed} m/s`;
    feelsLikeEl.textContent = `${Math.round(data.main.feels_like)}°C`;
    pressureEl.textContent = `${data.main.pressure} hPa`;

    // Show weather info
    weatherInfo.classList.add('show');
}

// Get current date formatted
function getCurrentDate() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date().toLocaleDateString('en-US', options);
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    weatherInfo.classList.remove('show');
}

// Hide error message
function hideError() {
    errorMessage.classList.remove('show');
}

// Initialize with default city
fetchWeather();