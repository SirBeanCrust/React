import React, { useState } from 'react';

function App() {
  const [winners, setWinners] = useState([]);
  const [names, setNames] = useState(["Anna", "Bella", "Charlie", "David"]);

  function addName() {
    const name = document.getElementById('input').value;
    if (name) {
      setNames([...names, name]);
      document.getElementById('input').value = '';
    }
  }

  function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function spinWheel() {
    if (names.length > 0) {
      const randomIndex = genRandomInt(0, names.length);
      const winner = names[randomIndex]
      setWinners([...winners, winner]);
      setNames(names.filter(name => name !== winner));
    }
  }

  function delNames() {
    setNames([]);
  }

  function sswitch() {
    // Implement the functionality for sswitch
  }

  function updateRotation(degrees) {
    document.documentElement.style.setProperty('--rotation', `${degrees}deg`);
  }

  function updateRotation1(degrees) {
    document.documentElement.style.setProperty('--rotation1', `${degrees}deg`);
  }
  
  // Example usage: Update rotation to 90 degrees
  function MyComponent({ updateRotation, updateRotation1 }) {
    const [sliderValue, setSliderValue] = useState(90); // Initial value
  
    const handleSliderChange = (event) => {
      const rotation = parseInt(event.target.value);
      setSliderValue(rotation);
      updateRotation(rotation);
      updateRotation1(180 - (rotation / 2));
    };
  
    return (
      <div>
        <input
          type="range"
          min="0"
          max="180"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>{sliderValue}</span>
      </div>
    );
  }
  

  return (
    
    <div className="App">
      <MyComponent updateRotation={updateRotation} updateRotation1={updateRotation1} />
      <div>
      <h2>Lucky Wheel</h2>
      <div>
      {names && (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
      <div className="square">
      <div className="sector"/>
      </div>
      
      <div>
        <input type="text" id="input" placeholder="Enter a name" />
        <button onClick={addName}>Add Name</button>
      </div>
      <div>
        <button onClick={spinWheel}>Spin the Wheel</button>
      </div>
      <div>
        <button onClick={delNames}>Delete</button>
      </div>
      <div>
        <button onClick={sswitch}>Swap</button>
      </div>
      {winners && (
        <ul>
          {winners.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


