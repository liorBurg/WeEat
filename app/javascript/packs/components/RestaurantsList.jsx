import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';

class RestaurantsList extends Component {
  render() {
    const restaurants = this.props.rests;
    const cuisines = this.props.cuisines;
    return (
      <div className="restaurants-list">
        {restaurants.map(function (rest) {
          return <RestaurantItem key={rest.id} rest={rest} cuisines={cuisines}/>;
        })}
      </div>
    );
  }
}

RestaurantsList.propTypes = {
  rests: PropTypes.array,
  cuisines: PropTypes.object,
};

export default RestaurantsList;
