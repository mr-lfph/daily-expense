import React, { useState } from 'react';
import Auth from '../Login/useAuth';

const Signup = (props) => {
    const auth = Auth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let isSignIn=false;
    let errorMessage="";
    const onchangeHandler = e => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const createdUser = e => {
        e.preventDefault();

        auth.createUser(email, password)
            .then(res => {
                if (res) {
                    console.log('signup res:',res)
                    isSignIn=true;
                    errorMessage="";
                   }
            }).catch(er => {
                console.log('signup errorss:', er.message)
                errorMessage=er.message;
                isSignIn=false;
            });
    }
    return (
        <div className="container">
            <h2>Sign Up / Registration Here </h2>
            <br />
            <form onSubmit={createdUser}>
                <div className="col-12">
                    <div className="row justify-content-center ">
                        <div className="col-3 text-right">Name</div>
                        <div className="col-3 text-left">
                            <input type="text" name="name" placeholder="User Name" onBlur={onchangeHandler} required></input>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 text-right">Email</div>
                        <div className="col-3 text-left">
                            <input type="text" name="email" placeholder="Email" onBlur={onchangeHandler} required></input>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-3 text-right">Password</div>
                        <div className="col-3 text-left">
                            <input type="password" name="password" placeholder="Password" onBlur={onchangeHandler} required ></input>
                        </div>
                    </div>
                    <br />
                    <div className="row ">
                        <div className="col-5"></div>
                        <div className="col-4">
                            <button type="submit" className="btn w-100" >SignUp</button>
                            {/* onClick={createUser} */}
                        </div>

                    </div>

                </div>
            </form>
        
            {
            isSignIn? <p style={{color:'green'}} >User Created Successfully</p>:<p style={{color:'red'}}> {errorMessage} </p>
           
           }
            <p>{console.log(props.msg)}</p>
        </div>

    );
};

export default Signup;