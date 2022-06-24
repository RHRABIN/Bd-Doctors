import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';
const ContacForm = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className=' mt-20 py-14 px-12'
        >
            <h4 className='text-center text-primary'>Contact Us</h4>
            <h3 className='text-center font-xl text-white'>Stay connected with us</h3>
            <div className=''>
                <div className='grid grid-cols-1 justify-items-center'>
                    <input type="text" placeholder="Your Name " className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs my-2" />
                    <textarea className=" textarea textarea-bordered h-24  w-full max-w-xs my-2" placeholder="Write your comments"></textarea>
                    <PrimaryButton >Submit</PrimaryButton>
                </div>
            </div>

        </section>
    );
};

export default ContacForm;