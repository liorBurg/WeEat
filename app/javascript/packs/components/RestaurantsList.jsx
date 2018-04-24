import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem';

class RestaurantsList extends Component {
  render(){
    return (
      <div className="restaurants-list">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </div>
    );
  }
}

export default RestaurantsList;
