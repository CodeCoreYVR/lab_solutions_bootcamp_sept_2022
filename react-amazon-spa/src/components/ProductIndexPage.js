import { Component } from 'react';
import productsData from './productsData';
// import ProductDetails  from './ProductDetails';
import NewProductForm from './NewProductForm';

export default class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
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

  createProduct(params) {
    console.log('createProduct invoked')
    this.setState((state) => {
      return {
        products: [
          {
            ...params,
            id: state.products[0] + 1
          },
          ...state.products
        ]
      }
    })
  }


  render() {
    return this.state.products ? (
      <main className='card-body'>
        <NewProductForm submitForm={(params) => this.createProduct(params)} />
        {
          this.state.products.map((product) => {
            const { id, title, price, seller } = product;
            return <div className='card mt-1'> 
                      <div><strong>Title:</strong> { title }</div>
                      <div><strong>Price:</strong> ${ price }</div>
                      <div><strong>Sold By:</strong> { seller.full_name }</div>
                      <div><button onClick={() => { this.deleteProduct(id) }}>Delete</button></div>
                      <br></br>
                   </div>
          })
        }
        {/* { 
          this.state.products.map((product) => {
            return <ProductDetails { ...product } deleteProduct={(id) => this.deleteProduct(id) } />
          })
        } */}
      </main>
    ) : (
      <div>
        Loading Products Index Page...
      </div>
    );
  }
}



