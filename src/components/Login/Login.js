import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
                <h2>Login </h2>
                <button>Signin with Google</button> 
                <p>or</p>
                <input placeholder="Enter your Email" type="text" className="rounded w-25" /> <br/>
               <input  placeholder="Enter your Password" type="password" className="" /> <br/><br/>
               <button className="btn w-25">Login</button>
        </div>
    );
};

export default Login;