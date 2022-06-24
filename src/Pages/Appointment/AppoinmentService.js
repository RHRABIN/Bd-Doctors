import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Service from './Service';

const AppoinmentService = ({ date, setTreatment, isLoading, services }) => {

    // const formatedDate = format(date, 'PP');

    // const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res => res.json())
    // )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className='text-center text-primary text-2xl'>Availabel service on : {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default AppoinmentService;