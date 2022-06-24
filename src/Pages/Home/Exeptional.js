import React from 'react';
import img from '../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton';
const Exeptional = () => {
    return (
        <div className="hero min-h-screen sm:px-6  lg:px-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-12'>
                    <h1 className="text-4xl font-bold">Exeptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exeptional;