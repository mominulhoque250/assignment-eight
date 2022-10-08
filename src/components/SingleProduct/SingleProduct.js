import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ product, handleAddToCart }) => {


    // const { id, name, price } = props.product;
    //below line its called render
    // console.log(product?.id);
    return (
        <div className='product'>
            <img src={product?.image} alt="" />
            <div className='product-info'>
                <p>{product?.id}</p>
                <p className='product-name'> {product?.title}</p>
                <p className='product-name'> ${product?.price}</p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>

    );
};

export default SingleProduct;