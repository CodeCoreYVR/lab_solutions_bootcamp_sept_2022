import React, { Component } from 'react';
import productData from './productData';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

export default class ProductShowPage extends Component {
    product = productData();
    render() {
        let product = this.product;
        return <div className="card mt-5 mb-5">
            <ProductDetails
                title={product.title}
                description={product.description}
                price={product.price}
                date={product.created_at}
                sellerName={product.seller.full_name}
            />
            {product.reviews.length &&
                <ReviewList
                    reviews={product.reviews}
                />
            }
        </div>;
    }
}