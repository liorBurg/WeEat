import React from 'react';
import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';

function RestaurantsList(props) {
  const restaurants = props.rests;
  const cuisines = props.cuisines;
  const updateCurrRestaurantMark = props.updateCurrRestaurantMark;
  return (
    <div className="restaurants-list">
      {restaurants.map((rest) => {
        return (<RestaurantItem
          key={rest.id}
          rest={rest}
          cuisines={cuisines}
          updateCurrRestaurantMark={updateCurrRestaurantMark}/>);
      })}
    </div>
  );
}

RestaurantsList.propTypes = {
  rests: PropTypes.array,
  cuisines: PropTypes.object,
  updateCurrRestaurantMark: PropTypes.func,
};

export default RestaurantsList;
