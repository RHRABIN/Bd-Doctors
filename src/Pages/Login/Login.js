import React from 'react';
import { useForm } from 'react-hook-form'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        gUser,
        gLoading,
        gError,
    ] = useSignInWithEmailAndPassword(auth);
    let setErrorMessage;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user || gUser);
    // handle navigate
    const navigate = useNavigate();
    // catch location from location
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    // console.log(errors.message, gError?.message, error?.message)
    //handle error
    if (gError || error) {
        setErrorMessage = <p className='text-red-500 text-center mb-3'>{gError?.message || error?.message}</p>
    }
    // handle loadin
    if (gLoading || loading) {
        return <Loading></Loading>
    }
    // handle user
    if (token) {
        navigate(from, { replace: true })
    }
    // handle submit
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        // navigate(from, { replace: true })
    }
    //handle google login
    const handleGoogle = async () => {
        await signInWithGoogle();

    }
    return (
        <div className='flex justify-center items-center h-100'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h3 className='text-center text-2xl font-bold'>Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>



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
                        <input type="submit" value={'Login'} className="btn w-full font-bold text-xl  max-w-xs mb-2" />

                    </form>
                    <p>New to doctors portal? <Link to='/signup' className='text-primary'>Create a new account</Link></p>
                    <div className="divider">OR</div>
                    <div className='w-full max-w-xs '>
                        <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full max-w-xs mb-2'>Continue with google</button>
                        <button className='btn btn-outline btn-primary w-full max-w-xs'>Continue with facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;