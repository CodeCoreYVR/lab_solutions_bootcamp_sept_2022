import React, { Component } from "react";
import { Product } from "../requests";
import { Link } from "react-router-dom";
export default class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], loading: true };
  }
  componentDidMount() {
    Product.index().then((response) => {
      this.setState({ products: response, loading: false });
    });
  }

  deleteProduct(id) {
    this.deleteProduct = this.deleteProduct.bind(this);
    const newProductData = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: newProductData });
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <div>products are loading</div>
        ) : (
          this.state.products.map((product) => {
            return (
              <li key={product.id}>
                {product.id} -{" "}
                <Link to={`/products/${product.id}`}>{product.title}</Link>{" "}
                <button
                  onClick={() => {
                    this.deleteProduct(product.id);
                  }}
                >
                  Delete
                </button>{" "}
              </li>
            );
          })
        )}
      </>
    );
  }
}
