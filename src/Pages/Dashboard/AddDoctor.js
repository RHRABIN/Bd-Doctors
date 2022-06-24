import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/servicename').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const imageStorageKey = "b4c116253bc813b71c0b6c9cfa8a03e9";
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result)
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Added Doctor succesfully')
                            }
                            else {
                                toast.error('Failed to add the doctor')
                            }

                        })
                }

            })

    }
    return (
        <div className='mt-4 mb-4'>
            <div>
                <h2 className="text-2xl">Add a new Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' placeholder="Type here" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}

                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <p className=" text-red-500">{errors.name.message}</p>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' placeholder="Your email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })}

                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <p className=" text-red-500">{errors.email.message}</p>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Speciality</span>
                        </label>
                        <select {...register("speciality")} className="input input-bordered w-full max-w-xs">
                            {services.map(service => <option value={service.name}>{service.name}</option>)}
                        </select >


                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type='file' placeholder="Your Image" className="input p-2 input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}

                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <p className=" text-red-500">{errors.image.message}</p>}
                        </label>
                    </div>

                    <input type="submit" value={'Add'} className="btn w-full font-bold text-xl  max-w-xs mb-2" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;