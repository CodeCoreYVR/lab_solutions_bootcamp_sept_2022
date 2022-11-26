import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import { Product } from "../requests";

export default class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, loading: true };
  }
  deleteReview(id) {
    this.setState({
      product: {
        ...this.state.product,
        reviews: this.state.product.reviews.filter(
          (review) => review.id !== id
        ),
      },
    });
  }
  componentDidMount() {
    Product.show(this.props.match.params.id).then((response) => {
      console.log(response);
      this.setState({
        product: response,
        loading: false,
      });
    });
  }
  render() {
    const { product } = this.state;

    return (
      <div className="card mt-5 mb-5">
        {this.state.loading ? (
          <div>the product is loading</div>
        ) : (
          <>
            <ProductDetails
              title={product.title}
              description={product.description}
              price={product.price}
              date={product.created_at}
              sellerName={product.seller_full_name}
            />
            {product.reviews && product.reviews.length > 0 && (
              <ReviewList
                reviews={product.reviews}
                deleteReview={(id) => this.deleteReview(id)}
              />
            )}
          </>
        )}
      </div>
    );
  }
}
