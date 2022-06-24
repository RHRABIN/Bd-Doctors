import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AppointmentModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth)
    const handleSubmit = (event) => {
        event.preventDefault();
        const formatedDate = format(date, 'PP');
        const slot = event.target.slot.value;
        const bookingData = {

            treatment: treatment.name,
            date: formatedDate,
            slot,
            price: treatment.price,
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(bookingData)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('hello', data)
                if (data.success) {
                    toast(`Your booking is succesfully on ${formatedDate} at ${slot}`)
                }
                else {
                    toast.error(`You have already booked on ${data?.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })

    }

    return (
        <div>

            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">{treatment.name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 justify-items-center mt-2' >
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {treatment.slots.map((slot, index) => <option key={index}>{slot}</option>)}

                        </select>
                        <input type="email" name='email' readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' placeholder='name' readOnly value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='address' placeholder="Your address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='phone' placeholder="Your phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;