import React, { Component } from 'react';
import Reviews from './Reviews';
import Rating from './Rating';
import PropTypes from 'prop-types';

class RestaurantItem extends Component {
  render() {
    const restaurant = this.props.rest;
    const cuisines = this.props.cuisines;
    return (
      <div className="restaurant-item">
        <div className="restaurants-details">
          <div className="cuisine-icon">
            {String.fromCharCode(cuisines[restaurant.cuisine])}
          </div>
          <ul>
            <li className="restaurant-name">
              {restaurant.name}
              {restaurant.accepts_10bis ? <div className="ten-bis-icon"/> : <div/>}
            </li>
            <li>{restaurant.address}</li>
            <li>~ {restaurant['max_delivery_time']} Minutes</li>
          </ul>
        </div>
        <div className="restaurant-reviews">
          <Rating stars={restaurant.rating}/>
          <Reviews restId={restaurant.id.toString()}/>
        </div>
      </div>
    );
  }
}

RestaurantItem.propTypes = {
  rest: PropTypes.object,
  cuisines: PropTypes.object,
};

export default RestaurantItem;
