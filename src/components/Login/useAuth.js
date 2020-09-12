
import React, { useContext, useEffect } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth';
//import firebaseConfig from "../../firebaseconfig";
import "../../firebaseconfig";
import { createContext, useState } from 'react';

const AuthContext = createContext()

export const AuthContexProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth} >{props.childreen}</AuthContext.Provider>
}

//create custom hook 
export const useAuth = () => {
    return useContext(AuthContext)
}

const getUser = user => {
    const { displayName, email, photoURL } = user
    return { name: displayName, email: email, photo: photoURL }
}


const Auth = (props) => {
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        photo: ''
    })

    // save user info in firestor
    const createUser = (email, password, displayName) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log('resp:', resp);
                const createdUser = { ...user };
                setUser(createdUser);
                createdUser.isSignedIn = true;
                createdUser.error = '';

                const dn = firebase.auth().currentUser;
                dn.updateProfile({
                    displayName: displayName

                })
                createdUser.displayName = displayName

                return resp;
            })
            .catch((error) => {
                const createdUser = { ...user };
                setUser(createdUser);
                createdUser.isSignedIn = true;
                createdUser.error = error.message;
                // return msg;

            })
    }
    const signInWithUserPass = (email, password) => {
        console.log(email, password)
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((resp) => {
                const signedInUser = getUser(resp.user)
                setUser(signedInUser)
                user.isSignedIn = true
                user.error = ''

                return resp
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('error')
                user.isSignedIn = false;
                user.error = error.message;
                // ...
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        })
    },[])

    return {
        user,
        createUser,
        signInWithUserPass
    }
}
export default Auth;

