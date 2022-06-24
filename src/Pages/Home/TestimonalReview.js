import React from 'react';

const TestimonalReview = ({ review }) => {
    const { img, name, description, location } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-bage-200  shadow-xl">
                <div className="card-body">
                    {/* <h2 className="card-title">Card title!</h2> */}
                    <p>{description}</p>
                    <div className="card-actions items-center mt-6">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="avata" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h4>{name}</h4>
                            <h5>{location}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonalReview;