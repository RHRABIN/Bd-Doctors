import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
const CheckoutForm = ({ data }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('')


    const { price, name, email } = data;

    useEffect(() => {
        fetch(`http://localhost:5000/stripe-payment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSuccess('')
        }
        else {
            setCardError('');
            console.log(paymentIntent)
            setSuccess('You payment is completed!')
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {cardError && <p className='text-red-400 mt-2 mb-2'>{cardError}</p>}
                {success && <p className='text-green-400 mt-2 mb-2'>{success}</p>}
                <button type="submit" className='mt-8 ml-32 btn btn-xs btn-success' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;