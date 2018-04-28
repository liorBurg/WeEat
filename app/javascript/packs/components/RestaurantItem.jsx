import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  let stars = [];
  for (let i = 0; i < props.stars; i = i + 1) {
    stars.push(
      <div key={i} className="star" />
    );
  }
  return (
    <div className="stars-container">{stars}</div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number,
};

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
