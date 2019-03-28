import React, { Component } from 'react';
import Search from "./containers/Search/Search";
import TouristChart from "./containers/TouristChart/TouristChart"
import './App.css';
import Weather from './containers/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Search />
      <Weather />
      <TouristChart />
      </div>
    );
  }
}

export default App;
