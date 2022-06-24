import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const ManageDoctors = () => {
    const { data, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctors').then(res => res.json()))
    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors {data?.length}</h2>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((a, index) =>

                            <tr>

                                <th>{index + 1}</th>
                                <th>{a.name}</th>
                                <td>{a.speciality}</td>
                                <td>{<btn className='btn btn-xs btn-warning'>Delete</btn>}</td>

                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctors;