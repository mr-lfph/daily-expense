import React, { useState } from 'react';
import './Login.css';
import img from '../../image/gg.png'
import Auth from './useAuth'




const Login = (props) => {

    const auth = Auth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eid, setEid] = useState('')
    
    const onchangeHandler = e => {
       const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value)          
        }
        if (name === 'password') {
            setPassword(value)         
        }
    }
    
    const handleSignIn = e =>{
        e.preventDefault();
        e.target.reset()
     return  auth.signInWithUserPass(email, password).then(
            res => {
               //console.log('res:', res)
               const emailid=res.user.email
               setEid(emailid)
            
                return res
            }
           
        ).catch(err=> {
            console.log(err)
        })
    }
    return (
        <div><br />
            <form onSubmit={handleSignIn}>
            <button className="btn w-25">Signin with <img className="googleIcon" src={img} alt="" /> Google</button> <br />
            <p>or</p>
            <input placeholder="Enter your Email" type="text" name="email" className="rounded w-25" onBlur={onchangeHandler} /> <br />
            <input placeholder="Enter your Password" type="password" name="password" className="rounded w-25" onBlur={onchangeHandler} /> <br /><br />
            <button type="submit"  className="btn w-25" >Login</button>
            </form>
                       
            {             
                eid === "" ? "": (<p style={{ color: 'white' }}>Logged in Successfully</p> )
                
            }
           
        </div>
    );
};

export default Login;