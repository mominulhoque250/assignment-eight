import React from 'react';

const SingleProduct = (props) => {
    const { id, image, price, rating, title } = props.product;
    return (
        <div>
            <img src={image} alt="" />
        </div >
    );
};

export default SingleProduct;