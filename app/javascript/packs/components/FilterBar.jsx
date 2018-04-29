import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField'
import Slider from 'material-ui/Slider';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';

const styles = {
  customFont: {
    color: 'white',
  },
  customSlider: {
    width: 250,
    marginBottom: 0,
    marginTop: 0,
  },
  customCheckbox: {
    marginTop: 12,
  },
};

class MinimalRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingStars: [false, false, false],
      rating: 0,
    };
  }

  handleCheckboxChange = (type, index) => {
    if (type === 'rating') {
      let stars = [false, false, false];
      let rating = 0;
      // when only one star is true - clear all stars
      if (!((index === 1) && this.state.ratingStars[0] && !this.state.ratingStars[1])) {
        stars = stars.map((star, i) => i < index);
        rating = index;
      }
      this.setState({ ratingStars: stars, rating: rating });
      this.props.updateRating(rating);
    }
  };

  render() {
    const { ratingStars } = this.state;
    return (
      <div className="minimal-rating">
        <span>{'Select Minimal Rating'}</span>
        <div className="stars">
          <Checkbox
            checked={ratingStars[0]}
            style={styles.customCheckbox}
            onCheck={() => this.handleCheckboxChange('rating', 1)}
            uncheckedIcon={<div className="star" />}
            checkedIcon={<div className="big-red-star" />}
          />
          <Checkbox
            checked={ratingStars[1]}
            style={styles.customCheckbox}
            onCheck={() => this.handleCheckboxChange('rating', 2)}
            uncheckedIcon={<div className="star" />}
            checkedIcon={<div className="big-red-star" />}
          />
          <Checkbox
            checked={ratingStars[2]}
            style={styles.customCheckbox}
            onCheck={() => this.handleCheckboxChange('rating', 3)}
            uncheckedIcon={<div className="star" />}
            checkedIcon={<div className="big-red-star" />}
          />
        </div>
      </div>
    );
  }
}

MinimalRating.propTypes = {
  updateRating: PropTypes.func,
};

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: 'All',
      max_delivery_time: 120,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  handleSelectChange(event, index, value) {
    event.preventDefault();
    this.setState({ cuisine: value });
    this.props.filterRests('cuisine', value);
  }

  handleSliderChange(event, value) {
    event.preventDefault();
    this.setState({ max_delivery_time: value });
    this.props.filterRests('max_delivery_time', value);
  }

  updateRating(rating) {
    this.props.filterRests('rating', rating);
  }

  render() {
    const cuisines = this.props.cuisines;
    return (
      <div className="filter-bar">
        <SelectField
          floatingLabelText="Select Cuisine"
          floatingLabelStyle={styles.customFont}
          value={this.state.cuisine}
          labelStyle={styles.customFont}
          onChange={this.handleSelectChange}
        >
          <MenuItem value="All" primaryText="All" />
          {cuisines.map(function (cuisine) {
            return <MenuItem value={cuisine} key={cuisine} primaryText={cuisine} />;
          })}
        </SelectField>
        <MinimalRating updateRating={this.updateRating}/>
        <div className="slider-container">
          <span>{'Select Maximum Delivery Time'}</span>
          <br />
          <Slider
            sliderStyle={styles.customSlider}
            min={0}
            max={120}
            step={15}
            value={this.state.max_delivery_time}
            onChange={this.handleSliderChange}
          />
          <span>{this.state.max_delivery_time}</span>
        </div>
      </div>
    );
  }
}

FilterBar.propTypes = {
  cuisines: PropTypes.array,
  filterRests: PropTypes.func,
};

export default FilterBar;
