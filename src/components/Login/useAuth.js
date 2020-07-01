import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from "../../firebaseconfig";



const Auth = () => {
    // const email="mr.lfph@gmail.com"
    // const password="Ph@558906"
    // const name="LfPh";
        
        const createUser = (email, password, name) => {
            console.log(email,password,name);
            console.log('called create user');
         firebase.auth().createUserWithEmailAndPassword(email, password, name)
         .then((res)=>{})
         .then((res) => {
            console.log('called');
             console.log('res:',res);
            return res.user;

            })
        .catch((error)=> {
                const msg = error.message;
                console.log('error',error);
                return error.message;
            })
    }
    console.log('cruser', createUser)

 return { 
     createUser
    }

}
export default Auth;

