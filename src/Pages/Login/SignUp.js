import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    // update user profile
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let setErrorMessage = "";
    // handle navigate
    const navigate = useNavigate();

    const [token] = useToken(user || gUser);




    // react hook form

    //handle error
    if (gError || error || UpdateError) {
        setErrorMessage = <p className='text-red-500 text-center mb-3'>{error?.message || UpdateError?.message || gError?.message}</p>
    }
    // handle loadin
    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }
    // handle user
    console.log(token)
    if (token) {
        navigate('/appointment')
    }

    // handle submit
    const onSubmit = async (data) => {
        // console.log(data.email, data.password)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log(data);
        // navigate('/appointment')
    }
    //handle google login
    const handleGoogle = async () => {
        await signInWithGoogle();
        // navigate('/appointment')
    }
    return (
        <div className='flex justify-center items-center h-auto '>

            <div className="flex flex-col h-100  lg:flex-row">
                <div className="grid flex-grow  card rounded-box place-items-center">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <h3 className='text-center text-2xl font-bold'>Sign up</h3>
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
                                        {errors.email?.type === 'required' && <p className=" text-red-500">{errors.email.message}</p>}


                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type='email' placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}

                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <p className=" text-red-500">{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p className=" text-red-500">{errors.email.message}</p>}

                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type='password' placeholder="Your password" className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 character or longer'
                                            }
                                        })}

                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <p className=" text-red-500">{errors.password.message}</p>}
                                        {errors.password?.type === 'minLength' && <p className=" text-red-500">{errors.password.message}</p>}

                                    </label>
                                </div>

                                {setErrorMessage}
                                <input type="submit" value={'Sign Up'} className="btn w-full font-bold text-xl  max-w-xs mb-2" />

                            </form>
                            <p>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>


                        </div>
                    </div>
                </div>
                <div className="divider lg:hidden lg:divider-horizontal">OR</div>
                <div className="grid flex-grow  card  rounded-box place-items-center"><div className='w-full max-w-xs '>
                    <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full max-w-xs mb-2'>Continue with google</button>
                    <button className='btn btn-outline btn-primary w-full max-w-xs'>Continue with facebook</button>
                </div></div>
            </div>
        </div>
    );
};

export default SignUp;