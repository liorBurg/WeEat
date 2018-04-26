import React, { Component } from 'react';
import FilterBar from './FilterBar';
import PropTypes from 'prop-types';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
    this.props.filterRests(event.target.value);
  }

  render() {
    return (
      <div className="banner">
        <div className="header">
          <h1>WeEat</h1>
          <input
            type="text"
            value={this.state.searchValue}
            placeholder="Find a restaurant"
            onChange={this.handleChange}
          />
        </div>
        <FilterBar />
      </div>
    );
  }
}

Banner.propTypes = {
  filterRests: PropTypes.func,
};

export default Banner;
