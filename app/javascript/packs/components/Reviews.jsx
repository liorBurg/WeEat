import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Rating from './Rating';
import { getReviews } from '../utils/api';
import PropTypes from 'prop-types';

function ReviewItem(props) {
  const { review } = props;
  return (
    <div>
      <div className="review-container">
        <Rating stars={review.rating}/>
        <p>{review.comment}</p>
        <span className="reviewer_name">{review['reviewer_name']}</span>
      </div>
      {props.hr? <hr /> : <div/>}
    </div>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.object,
  hr: PropTypes.bool,
};

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      reviews: [],
    };
  }

  componentDidMount() {
    this.updateReviews();
  }

  updateReviews = () => {
    getReviews(this.props.restId)
      .then(res => this.setState({
        reviews: res.data,
      }))
      .catch(err => console.log(err));
  };

  handleOpen = () => {
    this.setState({ openDialog: true });
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <button className="reviews-btn" onClick={this.handleOpen}/>
        <Dialog
          modal={false}
          open={this.state.openDialog}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <button onClick={this.handleClose} className="close-btn">X</button>
          <div className="review-items">
            {reviews.map(function (review, index) {
              return (index === reviews.length - 1) ? <ReviewItem key={review.id} review={review} hr={false}/>
                : <ReviewItem key={review.id} review={review} hr={true}/>;
            })}
          </div>
        </Dialog>
      </div>
    );
  }
}

Reviews.propTypes = {
  restId: PropTypes.string,
};

export default Reviews;

