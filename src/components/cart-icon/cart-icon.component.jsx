import React from 'react'
import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={props.toogleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{props.cartCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
