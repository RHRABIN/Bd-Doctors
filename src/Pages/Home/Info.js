import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    const CardDetails = [
        { _id: 1, img: clock, title: 'Opening Hours', className: 'bg-gradient-to-r from-secondary to-primary', description: 'We will opening soon. Stay with us' },
        { _id: 2, img: marker, title: 'Visit Our location', className: 'bg-accent', description: 'We will opening soon. Stay with us' },
        { _id: 3, img: phone, title: 'Contac us now', className: 'bg-gradient-to-r from-secondary to-primary', description: '+88908977809' },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            {
                CardDetails.map(card => <InfoCard key={card._id} card={card}></InfoCard>)
            }


        </div>
    )
};

export default Info;