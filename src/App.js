import React, { Component } from 'react';
import Country from './Containers/Country';
import CountryFun from './Containers/CountryFun';

class App extends Component {
  render() {
    return (
      <div>
        <Country />
        <CountryFun />
      </div>
    );
  }
}

export default App;