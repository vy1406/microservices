import React, {useState} from 'react';
import './style.scss'

const Slider = ({ min, max, onSliderChange }) => {

  const [sliderValue, setSliderValue]=useState(1);
    
  const handleOnLiftChange = ({ target: { value: radius } }) => {
    setSliderValue(radius);
    onSliderChange(radius)
  }

  return (
    <div>
      
      <div className="slider-parent">
        <input
          min={min}
          max={max}
          type="range"
          value={sliderValue}
          className="slider"
          onChange={handleOnLiftChange}
        />
      </div>
    </div>
  );
}

export default Slider;