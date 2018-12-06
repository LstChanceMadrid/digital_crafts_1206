import React, { Component } from 'react';
import '../styles/App.css';
import TotalPrice from './TotalPrice'
import PassengerNumber from './PassengerNumber';
import TravelClass from './TravelClass'

class App extends Component {
  render() {
    return (
      <div>
        <label>Number of Passengers</label>
        <PassengerNumber /><br />
        <label>Travel Class</label>
        <TravelClass /><br />
        <label>TotalPrice</label>
        <TotalPrice />
      </div>
    );
  }
}

export default App;
