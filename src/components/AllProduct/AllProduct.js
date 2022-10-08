import React, { useEffect, useState } from 'react';
import Cart from '../Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart)
    }

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
                            handleAddToCart={handleAddToCart}
                        ></SingleProduct>)
                    }
                </div>
                <div className="cart-container">
                    <h3>This is for Cart:</h3>
                    <Cart
                        cart={cart}
                    ></Cart>


                </div>
            </div>
        </div>
    );
};

export default AllProduct;