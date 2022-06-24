import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import IsAdmin from './IsAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = IsAdmin(user);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || admin) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAdmin;