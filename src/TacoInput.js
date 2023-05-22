import React, { useState } from 'react';

const TacoInput = ({label, name, value, onStateChange}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);

    setSliderValue(value);
    onStateChange(event);
  };

  const handleTextBoxChange = (event) => {
    const value = parseInt(event.target.value);
    
    setSliderValue(value);
    onStateChange(event);
  };

  return (
    <div className="right-align">
      <label>
        {label}
        <input
          name={name}
          type="range"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </label>
      <label>
        <input
          name={name}
          type="number"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleTextBoxChange}
        />
      </label>
    </div>
  );
};

export default TacoInput;
