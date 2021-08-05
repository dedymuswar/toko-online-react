import React from 'react'
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, tombolAddToCart, ...otherProps}) => (
    <button className={`${tombolAddToCart ? 'inverted' : ''} ${isGoogleSignIn ? 'is-google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton
 