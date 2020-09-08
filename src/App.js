import React, { useState } from 'react';

const App = () => {
  // States
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    setTemperatureValue(temperatureValue + 1);
  }

  const decreaseTemperature = () => {
    setTemperatureValue(temperatureValue - 1);
  }

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
  <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;