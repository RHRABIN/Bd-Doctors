import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //error varibale
    let setErrorMessage;
    //handle loading 
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        setErrorMessage = <p>{error?.message}</p>
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }
    return (
        <div className='w-full max-w-xs '>
            <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full max-w-xs mb-2'>Continue with google</button>
            <button className='btn btn-outline btn-primary w-full max-w-xs'>Continue with facebook</button>
        </div>
    );
};

export default SocialLogin;