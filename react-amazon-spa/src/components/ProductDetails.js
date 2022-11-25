import React, { Component } from 'react';

export default class ProductDetails extends Component {

  handleDelete() {
    this.props.deleteProduct(this.props.id);
  }

  render() {
    const { id, title, description, price, seller, date, deleteProduct } = this.props;
    return <div>
      <h5 className="card-header">{ title }</h5>
      <div className='card-body'>
        { description }
        <div><label>Price: </label> { price }</div>
        <div><label>Seller: </label> { seller.full_name }</div>
        <div><label>Date: </label> { date }</div>
        {/* <button onClick={ deleteProduct(id) }>Delete</button> */}
      </div>
    </div>
  }
}