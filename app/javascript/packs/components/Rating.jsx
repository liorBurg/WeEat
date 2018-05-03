import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  let stars = [];
  for (let i = 0; i < props.stars; i = i + 1) {
    stars.push(
      <div key={i} className="red-star" />
    );
  }
  return (
    <div className="red-stars-container">{stars}</div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number,
};

export default Rating;
