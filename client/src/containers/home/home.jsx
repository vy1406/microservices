import React, {useState} from 'react';
import { connect } from "react-redux";
import './style.scss'
import Slider from '../../components/slider/Slider';

const Home = () => {
  const [liftsNumber, setLiftsNumber]=useState(1);
  const [floorNumber, setFloorNumber]=useState(1);
    
  const handleOnClick = () => {
    console.log(liftsNumber, floorNumber)
  }

  return (
    <div>
      <Slider
        min={1}
        max={10}
        onSliderChange={setLiftsNumber}
      />
      <div className="buble"> 
        {liftsNumber}
      </div>
     
      <Slider
        min={1}
        max={100}
        onSliderChange={setFloorNumber}
      />
      <div className="buble"> 
        {floorNumber}
      </div>
     
      <button className="button-style" onClick={handleOnClick}>Init</button>
    </div>
  );
}

  
const mapDispatchToProps = {
  // initApp,
};

const mapStateToProps = state => ({
  // countries: state.countryReducer.countries,
  // isError: state.globalReducer.isError,
  // isLoading: state.globalReducer.isLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);