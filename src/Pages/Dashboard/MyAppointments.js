import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {

                        localStorage.removeItem('accessToken')
                        signOut(auth)
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [])
    return (
        <div>
            <h1>My Appointments: {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index) =>

                                <tr>

                                    <th>{index + 1}</th>
                                    <th>{a.name}</th>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {(a.price && a.paid) && <button className='text-success'>Paid</button>}
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;