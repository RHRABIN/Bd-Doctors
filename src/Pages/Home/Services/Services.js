import React from 'react';
import Service from './Service';
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
const Services = () => {
    const totalServices = [
        { _id: 1, img: floride, title: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem, ullam eveniet vel animi atque.' },
        { _id: 2, img: cavity, title: 'Cavity Filling', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem, ullam eveniet vel animi atque.' },
        { _id: 3, img: whitening, title: 'Teeth Whitening', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem, ullam eveniet vel animi atque.' },
    ]
    return (
        <div className='mt-20 px-12'>
            <h3 className='text-primary text-2xl text-center font-bold'>OUR SERVICES</h3>
            <h2 className='text-4xl text-center'>Service We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    totalServices.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;