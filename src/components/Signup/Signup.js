import React, { useState } from 'react';
import Auth from '../Login/useAuth';
import firebase from "../../firebaseconfig";
import { Link, Redirect } from 'react-router-dom';
 
import Home from '../Home/Home';




const Signup = () => {
    const auth=Auth();
   // console.log(auth.createUser("mr.lph@gmail.com","Ph@558906","Mizan"));
    
    
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

    const createdUser = async e => {
        e.preventDefault();
       console.log('calling');
            const user = await auth.createUser(email, password, name)
            .then(res=>{
                
                console.log('user:',res.user)
                console.log('create usersss:',res.createUser);
                
            }).catch(e =>{
                    console.log('errorss',e.message)
            });

     }

        //create user 
        // firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        //         console.log('response:', res.user);
        //     }).catch(e => {
        //         console.log('errorMessage: ', e.message);
        //     });

        //signInuser
    //   await  firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(res => {
    //             if (res.user) {console.log('user found: ',res.user)
    //             return <Home></Home>
    //         }else {
    //                 console.log('paoa jai ni ');
    //             }
    //         })
    //         .catch(e => {
    //             console.log('error', (e.message))
    //         });
    // }


    return (
        <div className="container">
            <h2>Sign Up / Registration Here </h2>
            <br />
            <form onSubmit={createdUser}>
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