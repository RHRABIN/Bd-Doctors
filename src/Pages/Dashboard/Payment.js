import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51L1pNWGX8qAA1qto0YzN1ln7hEQQpEGcVq4wyW8TYNQBQngeCcKADhwPIQ9GeIMbL1GF8W6jFHiIuDVuxQM3j43j00Nxr4HWt5')
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/bookingbyid/${id}`
    const { data, isLoading } = useQuery('bookingService', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Berear ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' lg:ml-48'>
            <h1>Payment for: {id}</h1>
            <div class="card w-96 bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <h2 class="card-title">{data.name}</h2>
                    <h3>Bookig for <span className='text-red-400'>{data.treatment}</span> on {data.slot}</h3>
                    <p className="text-red-400">Total Bill: ${data.price}</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;