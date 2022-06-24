import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl" alt='chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;