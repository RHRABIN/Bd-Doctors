import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You can not add admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully add admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button> : 'Admin'}</td>
            <td><button className='btn btn-xs'>Remove User</button></td>


        </tr>
    );
};

export default UserRow;