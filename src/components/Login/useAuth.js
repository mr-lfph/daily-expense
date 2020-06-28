import React, { createContext, useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from "../../firebaseconfig";

firebase.initializeApp(firebaseConfig);
//const AuthContext = createContext();

const Auth = () => {
    const [createUserr, setCreateUserr] = useState(null);
    //  register user with email and password
    console.log('auth');
    const createUse = async (email, password, name) => {
        console.log('auth11');
        await firebase.auth().createUserWithEmailAndPassword(email, password, name)
        .then(res=>{
            setCreateUserr=res;
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            setCreateUserr=null;
        });
        setCreateUserr=createUse;
    }
    
    return { createUserr };
    console.log(createUserr);
}
export default Auth;

