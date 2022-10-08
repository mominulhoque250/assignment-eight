import React from 'react';

const Cart = ({ cart }) => {

    console.log(cart)
    return (
        <div className='cart-area'>
            <p>{cart?.title}</p>
        </div>
    );
};

export default Cart;