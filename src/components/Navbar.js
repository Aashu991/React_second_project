import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem("mydb123.data");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div className='ctn'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    {auth ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link co' to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link co' to="/about" >About</Link>
                            </li>
                            <li className="nav-item left1">
                                <Link onClick={logout} className='nav-link co' to="/signup" >Logout({JSON.parse(auth).email})</Link>
                            </li> 
                            </ul> :
                            <ul className="navbar-nav">
                            <li className="nav-item left">
                                <Link className='nav-link co' to="/signup" >SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link co' to="/login" >Login</Link>
                            </li>
                        </ul>
                    }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
