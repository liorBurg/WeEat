import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: 'All',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event, index, value) {
    event.preventDefault();
    this.setState({ cuisine: value });
    this.props.filterRests('cuisine', value);
  }

  render() {
    const styles = {
      customFont: {
        color: 'white',
        fontWeight: 'bold',
      },
    };
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
      </div>
    );
  }
}

FilterBar.propTypes = {
  cuisines: PropTypes.array,
  filterRests: PropTypes.func,
};

export default FilterBar;
