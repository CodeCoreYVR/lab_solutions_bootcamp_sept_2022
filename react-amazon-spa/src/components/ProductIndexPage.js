import React, { Component } from 'react';
import productsData from './productsData';
import ProductDetails  from './ProductDetails';

export default class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
  }

  render() {
    return this.state.products ? (
      <main className='page'>
        { this.state.products.map((product) => {
          return <ProductDetails key={product.id} {...product} />
        })}
      </main>
    ) : (
      <div>
        Loading Products Index Page...
      </div>
    );
  }
}
