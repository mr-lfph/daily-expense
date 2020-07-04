import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from "../../firebaseconfig";



const Auth = () => {
    const [user, setUser] = useState(null)  
    // save user info in firestor
    const createUser = (email, password, name) => {
        console.log('calling create user');
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log('resp:', resp);               
                return resp;
            })
            .catch((error) => {
                const msg = error.message;
                console.log('error', msg);

            })
    }
    return {
        createUser
    }
}
export default Auth;

