import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentService from './AppoinmentService';
import AppointmentBanner from './AppointmentBanner';
import AppointmentModal from './AppointmentModal';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    // console.log(formatedDate)

    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppoinmentService date={date} setTreatment={setTreatment} setDate={setDate}
                services={services}
                isLoading={isLoading}
            ></AppoinmentService>
            <Footer></Footer>
            {
                treatment && <AppointmentModal

                    date={date}
                    setTreatment={setTreatment}
                    treatment={treatment}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </div>

    );
};

export default Appointment;