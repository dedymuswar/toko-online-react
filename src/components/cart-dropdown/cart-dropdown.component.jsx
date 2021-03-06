import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map((cartItem) =>
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) :
                        (
                            <span className="empty-cart-message">Your cart is empty</span>
                        )
                }
            </div>
            <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toogleCartHidden())
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapsStateToProps = (state) =>
({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapsStateToProps)(CartDropdown))
