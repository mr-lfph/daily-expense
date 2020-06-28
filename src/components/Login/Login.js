import React from 'react';
import './Login.css';
import img from '../../image/gg.png'

 

const Login = () => {
     
    return (
        <div>
                <br/>
                
                <button className="btn w-25">Signin with <img className="googleIcon" src={img}  alt=""/> Google</button> <br/>
                <p>or</p>
                <input placeholder="Enter your Email" type="text" className="rounded w-25" /> <br/>
               <input  placeholder="Enter your Password" type="password" className="rounded w-25" /> <br/><br/>
               <button className="btn w-25">Login</button>
        </div>
    );
};

export default Login;