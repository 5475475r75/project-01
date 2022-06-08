import React, { Component } from 'react';
import Country from './Containers/Country';
import CountryFun from './Containers/CountryFun';
import Timeco from './Containers/time/Timeco';
import Timefun from './Containers/time/Timefun';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Country />
        <CountryFun /> */}
        <Timefun />
        <Timeco />
      </div>
    );
  }
}

export default App;