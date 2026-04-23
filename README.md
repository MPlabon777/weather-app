# Weather App 🌤️

A simple and beautiful weather application that displays current weather information for any city worldwide.

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, pressure, and "feels like" temperature
- Beautiful gradient UI with responsive design
- Error handling for invalid cities

## Demo

Visit the live app: https://mplabon777.github.io/weather-app/

## Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free)

## Getting an API Key

1. Go to [OpenWeatherMap API](https://openweathermap.org/api)
2. Create a free account
3. Navigate to "My API Keys"
4. Copy your API key

**Note:** New API keys can take 10-15 minutes to activate.

## Installation

### Option 1: Run Locally

1. Clone the repository:
```bash
git clone https://github.com/MPlabon777/weather-app.git
```

2. Navigate to the project folder:
```bash
cd weather-app
```

3. Open `index.html` in your browser

4. Edit `script.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

### Option 2: Use GitHub Pages (No Setup Required)

Simply visit: https://mplabon777.github.io/weather-app/

Note: You'll need to add your own API key in the browser's developer console to make it work:
```javascript
// In browser console, run:
localStorage.setItem('weather_api_key', 'your_api_key_here')
```
Then refresh the page.

## Project Structure

```
weather-app/
├── index.html    # Main HTML file
├── style.css     # Styling
├── script.js     # JavaScript logic
└── README.md     # This file
```

## How It Works

1. User enters a city name in the search box
2. JavaScript fetches weather data from OpenWeatherMap API
3. Response is parsed and displayed in the UI
4. Error messages show for invalid cities or API issues

## Tech Stack

- HTML5
- CSS3 (with gradients and animations)
- JavaScript (ES6+)
- OpenWeatherMap API

## License

MIT License

## Author

[MPlabon777](https://github.com/MPlabon777)