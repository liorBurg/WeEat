import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';
import { addRestaurant } from '../utils/api';

const maxDeliveryTime = 120;

class AddNewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      formData: {
        name: '',
        address: '',
        cuisine: '',
        max_delivery_time: maxDeliveryTime,
        accepts_10bis: false,
      },
    };
  }

  clearState = () => {
    this.setState(
      {
        formData: {
          name: '',
          address: '',
          cuisine: '',
          max_delivery_time: maxDeliveryTime,
          accepts_10bis: false,
        },
      });
  };

  handleOpen = () => {
    this.setState({ openDialog: true });
  };

  handleClose = () => {
    this.setState({ openDialog: false });
    this.clearState();
  };

  handleSubmit = () => {
    addRestaurant(this.state.formData)
      .then(() => {
        this.props.updateRests();
        this.handleClose();
        this.clearState();
      })
      .catch(err => console.log(err));
  };

  handleTextChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleCheckboxChange = () => {
    const { formData } = this.state;
    formData.accepts_10bis = !formData.accepts_10bis;
    this.setState({ formData: formData });
  };

  handleSelectChange = (event, index, value) => {
    const { formData } = this.state;
    formData.cuisine = value;
    this.setState({ formData: formData });
  };

  handleSliderChange = (event, value) => {
    const { formData } = this.state;
    formData.max_delivery_time = value;
    this.setState({ formData: formData });
  };

  render() {
    const forkAndKnifeIcon = '+f';
    const { cuisines } = this.props;
    const { formData } = this.state;
    return (
      <div>forkAndKnifeIcon
        <button className="add-restaurant" onClick={this.handleOpen}>{forkAndKnifeIcon}</button>
        <Dialog
          title="Add New Restaurant"
          modal={true}
          open={this.state.openDialog}
          contentStyle={ { width: '20%' } }
        >
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
          >
            <TextValidator
              floatingLabelText="Name"
              onChange={this.handleTextChange}
              name="name"
              value={formData.name}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <br />
            <TextValidator
              floatingLabelText="Address"
              onChange={this.handleTextChange}
              name="address"
              value={formData.address}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <br />
            <SelectValidator
              floatingLabelText="Cuisine"
              onChange={this.handleSelectChange}
              name="cuisine"
              value={formData.cuisine}
              validators={['required']}
              errorMessages={['this field is required']}
            >
              {cuisines.map(function (cuisine) {
                return <MenuItem value={cuisine} key={cuisine} primaryText={cuisine} />;
              })}
            </SelectValidator>
            <br />
            <br />
            <span className="slider">{'Maximum Delivery Time'}</span>
            <br />
            <Slider
              sliderStyle={ { width: 250, marginBottom: 10 } }
              min={0}
              max={maxDeliveryTime}
              step={15}
              value={formData.max_delivery_time}
              onChange={this.handleSliderChange}
            />
            <span className="slider">{formData.max_delivery_time}</span>
            <br />
            <Checkbox
              checked={formData.accepts_10bis}
              onCheck={this.handleCheckboxChange}
              label="Accepts 10bis"
              style={ { marginTop: 20 } }
            />
            <div className="action-buttons">
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
              />
              <FlatButton
                label="Submit"
                type="submit"
                primary={true}
              />
            </div>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

AddNewRestaurant.propTypes = {
  cuisines: PropTypes.array,
  updateRests: PropTypes.func,
};

export default AddNewRestaurant;
