import React, { Component } from 'react';

export default class ProductDetails extends Component {

  handleDelete() {
    this.props.deleteProduct(this.props.id);
  }

  render() {
    const props = this.props;
    return <div>
      <h5 className="card-header">{props.title}</h5>
      <div className='card-body'>
        {props.description}
        <div><label>Price: </label> {props.price}</div>
        <div><label>Seller: </label> {props.seller.full_name}</div>
        <div><label>Date: </label> {props.date}</div>
        {/* <button onClick={ this.handleDelete }>Delete</button> */}
      </div>
    </div>
  }
}