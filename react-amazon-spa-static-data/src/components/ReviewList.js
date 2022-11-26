import React, { Component } from 'react';
import ReviewDetails from './ReviewsDetails';

export default class ReviewList extends Component {
    render() {
        return <div className='card-body'>
            <header>Reviews:</header>
            {this.props.reviews.map((rvw,i) => {
                return <ReviewDetails
                    review={rvw}
                    key={i}
                />
            })

            }
        </div>;
    }
}