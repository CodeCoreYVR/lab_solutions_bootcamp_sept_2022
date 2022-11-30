import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import { Product } from "../requests";

export default class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, loading: true };
  }

  showProduct = () => {
    Product.show(this.props.match.params.id).then((response) => {
      console.log(response);
      this.setState({
        product: response,
        loading: false,
        newReview: {
          rating: "",
          body: ""
        }
      });
    });
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

  createReview = (e) => {
    e.preventDefault();
    let { rating, body } = this.state.newReview;
    Review.create({
      rating: parseInt(rating),
      body: body,
      product_id: this.state.product.id
    }, this.props.userId).then((review) => {
      console.log(`review: ${review.errors}`);
      if (review.errors) {
        console.log(`productErrors: ${review.errors}`);
        this.setState({ errors: review.errors });
      } else {
        this.showProduct();
      }
    });
  }
  onChangeReview = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      if ([0, 1, 2, 3, 4, 5].includes(parseInt(value)) || value === "") { }
      else return;
    }

    this.setState({
      newReview: {
        ...this.state.newReview,
        [name]: value //body , rating in the name
      }
    })
  }

  componentDidMount() {
    this.showProduct();
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
            <NewReviewForm
               review={this.state.newReview}
               createReview={this.createReview}
               onChange={this.onChangeReview}
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
