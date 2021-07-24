import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) =>
(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN&nbsp;OUT</div> :
                    <Link className="option" to="/signIn">SIGN&nbsp;IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : (<CartDropdown />)
        }
    </div>
)

const mapsStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapsStateToProps)(Header)
