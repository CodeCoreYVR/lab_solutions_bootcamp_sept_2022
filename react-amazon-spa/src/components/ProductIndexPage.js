import React, { Component } from 'react';
import productsData from './productsData';
import ProductDetails  from './ProductDetails';

export default class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    this.setState((state) => {
      return {
        products: state.products.filter((product) => {
          return product.id !== id;
        })
      }
    })
  }

  render() {
    return this.state.products ? (
      <main className='card-body'>
        {/* { this.state.products.map((product) => {
          return <ProductDetails key={ product.id } { ...product } deleteProduct={ this.deleteProduct } />
        })} */}
        {
          this.state.products.map((product) => {
            return <div className='card mt-1'> 
                      <div><strong>Title:</strong> { product.title }</div>
                      <div><strong>Price:</strong> ${ product.price }</div>
                      <div><strong>Sold By:</strong> { product.seller.full_name }</div>
                      <div><button onClick={() => { this.deleteProduct(product.id) }}>Delete</button></div>
                      <br></br>
                   </div>
          })
        }
      </main>
    ) : (
      <div>
        Loading Products Index Page...
      </div>
    );
  }
}
// {
//   this.state.products.map((product, index) => {
//     return <div key={index}> { product.id } { ...product } <button onClick={() => {this.deleteProduct(product.id)}}>Delete</button></div>
//   })
// }