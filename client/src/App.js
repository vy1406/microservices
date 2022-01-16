import React, { useEffect } from 'react';
import Lifts from './containers/lifts/lifts';
import Home from './containers/home/home';


const App = () => {

  

  useEffect(() => {

  }, [])

    return (
      <div className="appContainer">
          <Home />
          <hr></hr>
          <Lifts />
      </div>
    );

  }


export default App;