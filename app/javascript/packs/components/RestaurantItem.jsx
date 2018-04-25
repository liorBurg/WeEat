import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cuisines = {
  American: 109,
  Hawaiian: 79,
  Sushi: 73,
  Asian: 71,
  Japanese: 74,
  Seafood: 107,
  'Healthy Food': 36,
};

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
};

export default RestaurantItem;
