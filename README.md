# 🌤️ City-Based Real-time Weather Information System
A simple, dynamic City-Based Real-time Weather Information System that retrieves real-time weather data for any city using the OpenWeatherMap API. 

## 📑Table of Contents 

1. [Introduction](#int)
2. [Project Overview](#pro)
3. [Features](#fea)
4. [Built With](#bui)
5. [Project Structure](#pro)
6. [Getting Started](#get)
7. [Usage](#usa)
8. [Contributing](#con)
9. [Developed By](#dev)
10. [License](#lic)

## 🌍 Introduction <a name="int"></a>

A responsive, real-time Weather App that leverages the OpenWeatherMap API to deliver precise weather data, including temperature, humidity, and multi-day forecasts. With location-based search, unit toggling, and dynamic backgrounds, it ensures an engaging and informative user experience across devices.

## 📋 Project Overview <a name="pro"></a>

The Weather App allows users to:

Search for current weather conditions in any city worldwide
Retrieve key weather metrics, including temperature, humidity, and a general weather description
Interact with a user-friendly interface built using HTML, CSS, and JavaScript.

## 🔧 Built With <a name="bui"></a>

**HTML & CSS**: For structure and styling of the web interface.
**JavaScript**: For API interaction and dynamic content rendering.
**OpenWeatherMap API**: Provides access to weather data.

## 🚀 Features <a name="fea"></a>

* Location-Based Forecast: Automatically fetches weather data for the user’s current location through geolocation.
* 5-Day Weather Forecast: Provides a multi-day forecast to help users plan ahead.
* Detailed Weather Metrics: Displays additional data like visibility, pressure, UV index, and sunrise/sunset times.
* Background Changes: Dynamically changes background colors or themes based on weather conditions (e.g., sunny, rainy, cloudy).
* Temperature Unit Toggle: Allows users to switch between Celsius and Fahrenheit for convenience.
* Error Notifications: Provides clear messages for issues like invalid city names or connectivity problems.
* Hourly Forecast: Displays weather details for each hour of the day, offering a more granular view.
* 
## 📂 Project Structure <a name="pro"></a>

``` graphql
|--- index.html       # HTML structure
|--- styles.css       # Styling for the app
|--- app.js           # JavaScript for API calls and DOM manipulations
```

## 🛠️ Getting Started <a name="get"></a>

### Prerequisites

1. Obtain an API key from [OpenWeatherMap](https://www.google.com/search?q=open+weather+map&rlz=1C1CHBF_enIN1131IN1131&oq=open+weather+map&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIMCAIQABgUGIcCGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGDzSAQg1MzM3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8)
   
### Installation

1. Clone this repository:
   ``` bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project folder:
``` bash
   cd City-Based Real-time Weather Information System
```
3. Open **app.js** and add your OpenWeatherMap API key:
   ``` JavaScript
   const apiKey = "65fa297883eded363b4795c62b935ee7";
   ```
4. Open **index.html** in your browser to run the app.

## 📜 Usage <a name="usa"></a>

1. Enter a city name in the search box.
2. Click **Get Weather** to fetch and display current weather data for the selected city.

## 🔍 Example API Call

``` plaintext
https://api.openweathermap.org/data/2.5/weather?q={Bengaluru}&appid={65fa297883eded363b4795c62b935ee7}&units=metric
```
* **q**: City name (e.g., "London")
* **appid**: Your API key
* **units**: Metric system for temperature in Celsius

## 🤝 Contributing <a name="con"></a>

Feel free to fork this project and submit pull requests. Contributions are welcome!

## 👨‍💻 Developed By <a name="dev"></a>

##### [Lokesh V](https://www.linkedin.com/in/lokesh-v-13873a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 📄 License <a name="lic"></a>
This project is licensed under the MIT License.
