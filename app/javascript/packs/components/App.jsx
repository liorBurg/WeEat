import React, { Component } from 'react';
import Banner from './Banner';
import FilterBar from './FilterBar';
import RestaurantsList from './RestaurantsList';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <FilterBar />
        <div className="restaurants-container">
          <RestaurantsList />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
