import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import Suggestion from './Suggestion';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
  const apiKey = "6de8226553b8ed7c3c37475a0aff6d51";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState('Indore');
  const [weatherData, setWeatherData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai",
    "Hyderabad", "Ahmedabad", "Pune", "Surat", "Jaipur",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
    "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
    "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
    "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur",
    "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
    "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad"
]

  const handleSearch = async () => {
    try {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);

      if (response.status === 404) {
        setWeatherData(null);
      } else {
        const data = await response.json();

        if (data.main && data.weather && data.weather.length > 0) {
          setWeatherData({
            city: data.name,
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            weatherMain: data.weather[0].main,
          });
        } else {
          setWeatherData(null);
        }
      }
    } catch (error) {
      setWeatherData(null);
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (event) => {
  const input = event.target.value.trim().toLowerCase();
  setCity(event.target.value);

  setSuggestions([]);

  if (input) {
    const inputWords = input.split(' ');

    setTimeout(() => {
      const filteredSuggestions = cities.filter((city) =>
        inputWords.every((word) => city.toLowerCase().startsWith(word))
      );

      setSuggestions(filteredSuggestions);
    }, 300);
  }
};
  const handleSuggestionClick = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]);
    handleSearch(); 
  };

  useEffect(() => {
    handleSearch();
  }, [city]); 

  return (
    <div className="card">
      <SearchInput
        value={city}
        spellCheck={false}
        onChange={handleInputChange}
        placeholder="Search for cities..."
      />

      <div className="suggestions-container">
        {suggestions.length > 0 && (
          <div>
            {suggestions.map(city => (
              <Suggestion key={city} city={city} onClick={handleSuggestionClick} />
            ))}
          </div>
        )}
      </div>

      {weatherData && <WeatherDetails {...weatherData} />}
    </div>
  );
};

export default WeatherApp;