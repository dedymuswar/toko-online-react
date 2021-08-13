import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JNCMZHfY5vf7Hczq2B7dagQRjg7W05PFhNdZJ66wKfKsfSlOgccnAc9DOOGns2hs1ttVBVP9jJ4H6IC5BP4BCFz008g9AF4vG'

    const onToken = (token) => {
        console.log(token);
        alert('Pembayaran Sukses!')
    }
    return (
        <div>
            <StripeCheckout
            label='Pay Now'
            name='Dedy Muswar shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton
