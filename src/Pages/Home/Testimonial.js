import React from 'react';
import img1 from '../../assets/images/people1.png';
import img2 from '../../assets/images/people2.png';
import img3 from '../../assets/images/people3.png';
import TestimonalReview from './TestimonalReview';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    const reviews = [
        { _id: 1, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: img1, name: 'Winson Herry', location: 'Calefornia' },
        { _id: 2, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: img2, name: 'William Henry', location: 'Calefornia' },
        { _id: 3, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: img3, name: 'Jhonson Nila', location: 'Calefornia' },
    ]
    return (
        <section className='mt-20 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary'>Testimonal</h3>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-5 px-10'>
                {
                    reviews.map(review => <TestimonalReview key={review._id} review={review}></TestimonalReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;