import './App.css';
import React from 'react'
import WeatherApp from './Components/WeatherApp';
import background from './Assets/wp3293972-world-map-4k-wallpapers.jpg';

function App() {
  return (
    <div style={{backgroundImage: `url(${background})`, height:'100vh'}}>
     <WeatherApp />
    </div>
  )
}

export default App