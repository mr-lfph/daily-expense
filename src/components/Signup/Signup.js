import React, { useState } from 'react';
import auth from '../Login/useAuth';
 


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onchangeHandler = e => {

        const { name, value } = e.target;
        if (name === 'name') {
            setName(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const createUser = async e => {
        e.preventDefault();
        console.log('create');

      
         const user = auth.createUserr(email, password, name);
       console.log(user);
    }
    return (
        <div className="container">
            <h2>Sign Up / Registration Here </h2>
            <br />
            <form onSubmit={createUser}>
                <div className="col-12">
                    <div className="row justify-content-center ">
                        <div className="col-3 text-right">Name</div>
                        <div className="col-3 text-left">
                            <input name="name" value={name} placeholder="User Name" required onChange={onchangeHandler}></input>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 text-right">Email</div>
                        <div className="col-3 text-left">
                            <input name="email" value={email} placeholder="Email" required onChange={onchangeHandler}></input>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-3 text-right">Password</div>
                        <div className="col-3 text-left">
                            <input name="password" value={password} type="password" required placeholder="Password" onChange={onchangeHandler}></input>
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
        </div>

    );
};

export default Signup;