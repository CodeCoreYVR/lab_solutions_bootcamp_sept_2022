import React, { Component } from 'react';
import Star from './Star';

export default class StarRating extends Component {
    generateStars = () => {
        let stars = [],
            rating = parseInt(this.props.rating),
            notRated = parseInt(this.props.max) - rating;
        for (let i = 0; i < rating; i++) {
            stars.push(<Star
                style={{ color: 'orange', height: 20 }}
                key={"r-" + i}
            />)
        }
        for (let i = 0; i < notRated; i++) {
            stars.push(<Star
                style={{ color: '#ddd', height: 20 }}
                key={i}
            />)
        }
        return stars;
    }
    render() {

        return <div>
            Rating: {this.generateStars()}
        </div>;
    }
}