import React, { Component } from "react";
import StarRating from "./StarRating";

const ReviewDetails = (props) => {
  const { body, rating, reviewerName } = props;
  return (
    <div className="card m-2 p-3">
      <p>
        {body}
        <br />
        By {reviewerName}
      </p>
      <StarRating max={5} rating={rating} />
      <button className="mt-2 inline" onClick={props.deleteReview}>Delete</button>
    </div>
  );
};

export default ReviewDetails;
