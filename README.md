# Weather App 🌤️

A simple and beautiful weather application that displays current weather information for any city worldwide.

## Live Demo

**Visit:** https://mplabon777.github.io/weather-app/

> **Note:** When using the live demo, you'll need to enter your own API key (see instructions below).

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, pressure, and "feels like" temperature
- Beautiful gradient UI with responsive design
- Error handling for invalid cities
- API key input - no hardcoded keys (secure for public deployment)

## Getting an API Key

1. Go to [OpenWeatherMap API](https://openweathermap.org/api)
2. Create a free account (or log in)
3. Navigate to "My API Keys"
4. Copy your API key

**Note:** New API keys can take 10-15 minutes to activate after creation.

## How to Use

### Option 1: Use the Live Demo

1. Visit https://mplabon777.github.io/weather-app/
2. Enter your OpenWeatherMap API key in the input box
3. Click "Save" to store it in your browser
4. Enter a city name and click "Search"

Your API key is saved in your browser's localStorage and will work until you clear it.

### Option 2: Run Locally

1. Clone the repository:
```bash
git clone https://github.com/MPlabon777/weather-app.git
```

2. Navigate to the project folder:
```bash
cd weather-app
```

3. Open `index.html` in your web browser

4. Enter your API key in the input box and click "Save"

5. Search for any city!

## Project Structure

```
weather-app/
├── index.html    # Main HTML file
├── style.css     # Styling
├── script.js     # JavaScript logic
└── README.md     # This file
```

## How It Works

1. The app checks if an API key exists in your browser's localStorage
2. If not, it shows an input box for you to enter your API key
3. When you search for a city, JavaScript fetches weather data from OpenWeatherMap API
4. The response is parsed and displayed in a beautiful UI
5. Error messages appear for invalid cities or API issues

## API Key Storage

- **Live Demo:** API key is stored in browser localStorage
- **Local Development:** You can also hardcode your API key in `script.js` if running locally only:
```javascript
let API_KEY = 'your_api_key_here';
```

## Tech Stack

- HTML5
- CSS3 (gradients, animations, responsive design)
- JavaScript (ES6+, fetch API, localStorage)
- OpenWeatherMap API

## Troubleshooting

### "Invalid API key" error
- Make sure your API key is correct
- New keys take 10-15 minutes to activate
- Check your API key at OpenWeatherMap dashboard

### "City not found" error
- Check the spelling of the city name
- Try adding the country code (e.g., "London, UK")

## License

MIT License

## Contributing

Feel free to fork this repository and add improvements!

## Author

[MPlabon777](https://github.com/MPlabon777)