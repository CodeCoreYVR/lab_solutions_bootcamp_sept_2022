import React from "react";

const ProductDetails = (props) => {
  return (
    <div>
      <h5 className="card-header">Product: {props.title}</h5>
      <div className='card-body'>
        <p>description: {props.description}</p>
        <p>price: ${props.price}</p>
        <p>Sold by: {props.sellerName}</p>
        <p>createdAt: {props.date}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
