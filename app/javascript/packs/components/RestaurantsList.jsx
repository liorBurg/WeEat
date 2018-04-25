import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';

class RestaurantsList extends Component {
  render(){
    const restaurants = this.props.rests;
    return (
      <div className="restaurants-list">
        {restaurants.map(function (rest) {
          return <RestaurantItem key={rest.id} rest={rest}/>;
        })}
      </div>
    );
  }
}

RestaurantsList.propTypes = {
  rests: PropTypes.array,
};

export default RestaurantsList;
