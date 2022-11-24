import React, { Component } from 'react';

export default class ProductDetails extends Component {
    render() {
        const props = this.props;
        return <div>
            <h5 className="card-header">{props.title}</h5>
            <div className='card-body'>
                {props.description}
                <div><label>Price: </label> {props.price}</div>
                <div><label>Seller: </label> {props.sellerName}</div>
                <div><label>Date: </label> {props.date}</div>
            </div>
        </div>;
    }
}