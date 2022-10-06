import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {


    // const { id, name, price } = props.product;
    //below line its called render
    // console.log(product?.id);
    return (
        <div className='product'>
            <img src={product?.image} alt="" />
            <div className='product-info'>
                <h4>{product?.id}</h4>
                <p className='product-name'> {product?.title}</p>
                <p className='product-name'> ${product?.price}</p>

            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>

    );
};

export default SingleProduct;