import { Component } from 'react';
import productData from './productData';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

export default class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: productData
    };
  }
  
  render() {
    return this.state.product ? (
      <main className='page'>
        <ProductDetails { ...this.state.product } />
        <h2>Reviews</h2>
        <ReviewList reviews={ this.state.product.reviews } />
      </main>
    ) : (
      <div>
        Loading Product Show Page...
      </div>
    );
  }
}