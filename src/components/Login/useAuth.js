import React, { createContext, useState,Context } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from "../../firebaseconfig";



const Auth = () => {
    const createUser = (email, password, name) => {
         firebase.auth().createUserWithEmailAndPassword(email, password, name).then((res)=>{   
         }).then((res) => {console.log(res)})
        .catch((error)=> {
                const msg = error.message;
                console.log(error);
            })
    }

//return  createUser;

}
export default Auth;

