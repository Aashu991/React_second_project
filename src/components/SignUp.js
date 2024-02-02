import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const SaveData = async () => {
        let result = await fetch('http://localhost:4000/insert_data', {
            method: 'post',
            body: JSON.stringify({ email, password, address, address2, city, state, zip }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('mydb123.data',JSON.stringify(result))
        if(result){
            navigate('/');
        };
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("mydb123.data");
        if(auth){
           navigate('/');
        }
    })

    return (
        <div className='container container-lg1'>
            <form className="row g-3">
            <div className="col-12">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control co1" id="inputAddress" placeholder="Enter Name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control co1" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="current-password" className="form-control co1" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control co1" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control co1" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control co1" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select value={state} onChange={(e) => setState(e.target.value)} id="inputState" className="form-select co1">
                        <option defaultValue=''>...</option>
                        <option defaultValue='Bihar'>Bihar</option>
                        <option defaultValue='Maharastra'>Maharastra</option>
                        <option defaultValue='UtterPredesh'>UtterPredesh</option>
                        <option defaultValue='Asham'>Asham</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" className="form-control co1" id="inputZip" />
                </div>
                <div className="col-12">
                    <button onClick={SaveData} type="submit" className="btn btn-primary btnm">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
