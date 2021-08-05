import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';
import './checkout-item.style.scss';


const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="img" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps) (CheckoutItem)
