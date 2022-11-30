import React, { Component } from "react";
import { Product } from "../requests";
import NewProductForm from "./NewProductForm";
class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        title: "",
        description: "",
        price: "",
      },
      errors: []
    };
    this.createNewProduct = this.createNewProduct.bind(this);
  }

  onChangeProduct = (e) => {
    const { name, value } = e.target;
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [name]: value
      }
    })
  }

  createNewProduct() {
    let np = this.state.newProduct;
    Product.create({
      title: np.title,
      description: np.description,
      price: np.price,
      created_at: new Date(),
    }).then((product) => {
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
          onChange={this.onChangeProduct}
          product={this.state.newProduct}
          errors={this.state.errors}
          submitForm={(params) => this.createNewProduct(params)}
        />
      </div>
    );
  }
}

export default NewProductPage;
