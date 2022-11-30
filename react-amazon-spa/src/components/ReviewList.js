import React, { Component } from "react";
import ReviewDetails from "./ReviewDetails";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews
          ? reviews.map((review, i) => {
            return (
              <ReviewDetails
                key={i}
                rating={review.rating}
                id={review.id}
                body={review.body}
                reviewerName={review.reviewer}
                createdAt={review.created_at}
                deleteReview={() => props.deleteReview(review.id)}
              />
            );
          })
        : ""}
        </div>
      )
    }
  }
