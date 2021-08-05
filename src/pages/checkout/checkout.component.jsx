import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectTotalItems } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.style.scss';

const Checkout = ({ cartItems, totalItems }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">TOTAL : ${totalItems}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalItems: selectTotalItems
})

export default connect(mapStateToProps)(Checkout)
