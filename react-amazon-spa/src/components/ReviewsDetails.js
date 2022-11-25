import React, { Component } from 'react';
import StarRating from './StarRating';

export default class ReviewDetails extends Component {
    render() {
        const rvw = this.props.review;
        return <div className='card mt-3'>
            <div className='card-body'>
                <StarRating max={ 5 } rating={ rvw.rating } />
                <div>{ rvw.body }</div>
                <div className='text-info'>By { rvw.full_name } on { rvw.created_at }</div>
                <button onClick={ this.props.deleteReview }>Delete</button>
            </div>
        </div>;
    }
}