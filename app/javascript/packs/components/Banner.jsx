import React, { Component } from 'react';
import FilterBar from './FilterBar';
import PropTypes from 'prop-types';
import AddNewRestaurant from './AddNewRestaurant';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      openDialog: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
    this.props.filterRests("search", event.target.value);
  }
  render() {
    const cuisines = [];
    Object.keys(this.props.cuisines).forEach(function (key) {
      cuisines.push(key);
    });
    cuisines.sort();
    const { updateRests, filterRests } = this.props;
    return (
      <div className="banner">
        <div className="header-wrapper">
          <AddNewRestaurant cuisines={cuisines} updateRests={updateRests}/>
          <div className="header">
            <h1>WeEat</h1>
            <input
              type="text"
              value={this.state.searchValue}
              placeholder="Find a restaurant"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <FilterBar cuisines={cuisines} filterRests={filterRests}/>
      </div>
    );
  }
}

Banner.propTypes = {
  filterRests: PropTypes.func,
  cuisines: PropTypes.object,
  updateRests: PropTypes.func,
};

export default Banner;
