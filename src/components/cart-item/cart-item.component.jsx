import React from 'react'
import './cart-item.style.scss';

const CartItem = ({item}) => {
    // console.log(item);
    const {imageUrl, name, price, quantity} = item
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" srcset="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
