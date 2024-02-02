import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
    
        useEffect(() => {
            const auth = localStorage.getItem("mydb123.data");
            if (auth) {
                navigate('/');
            } 
        })
    
    
        const hdLogin = async () => {
            let result = await fetch('http://localhost:4000/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            result = await result.json();
            console.log(result);
            localStorage.setItem('mydb123.data', JSON.stringify(result))
            if (result) {
                navigate('/');
            } else {
                alert("Plees enter correct details")
            }
        }
    return (
        <div className='container container-lg1'>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control co1" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input  value={password} onChange={(e) => setPassword(e.target.value)} type="current-password" className="form-control co1" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <button onClick={hdLogin} type="submit" className="btn btn-primary btnm">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;