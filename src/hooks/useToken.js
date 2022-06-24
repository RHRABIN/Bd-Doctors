import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log('inside token', user?.user?.email)
        const email = user?.user?.email;
        // console.log(email)
        const currentUser = { email: email };
        // console.log(currentUser)
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data?.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user]);
    return [token];
}
export default useToken;