import React, { useEffect, useState } from 'react';

const IsAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdmingLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.admin)
                    setAdmingLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoading]
};

export default IsAdmin;