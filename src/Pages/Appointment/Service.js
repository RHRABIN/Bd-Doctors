import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name, price } = service;

    return (
        <div>
            <div className="card lg:w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                    <p>{
                        slots.length ?
                            slots[0]
                            :
                            <span className='text-red-600'>Try to another Date</span>
                    }</p>
                    <p>{(slots.length)} {(slots.length > 1) ? 'spaces' : 'space'} are available</p>
                    <small>Price: ${price}</small>
                    <div className="card-actions justify-center">


                        <label for="appointment-modal" disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-secondary uppercase">Book Service</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;