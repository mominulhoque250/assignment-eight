import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Products Store</h1>
            <p>Choose Four Item</p>

            <div className='store-container'>
                <div className="product-container">
                    {
                        // products.length &&
                        products.map(product => <SingleProduct
                            key={product.id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
                <div className="cart-container">
                    <h3>This is for Cart:</h3>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;