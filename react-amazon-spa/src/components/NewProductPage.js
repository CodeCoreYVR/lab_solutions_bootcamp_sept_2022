import React, { Component } from "react";
import { Product } from "../requests";
import NewProductForm from "./NewProductForm";
class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.createNewProduct = this.createNewProduct.bind(this);
  }

  createNewProduct(params) {
    console.log(
      `Params: ${params.title} ${params.description} ${params.price}`
    );
    Product.create(params).then((product) => {
      console.log(`product: ${product.errors}`);
      if (product.errors) {
        console.log(`productErrors: ${product.errors}`);
        this.setState({ errors: product.errors });
      } else {
        this.props.history.push(`/products/${product.id}`);
      }
    });
  }

  render() {
    return (
      <div>
        <NewProductForm
          errors={this.state.errors}
          submitForm={(params) => this.createNewProduct(params)}
        />
      </div>
    );
  }
}

export default NewProductPage;
