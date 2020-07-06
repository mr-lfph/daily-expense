
import * as firebase from 'firebase/app'
import 'firebase/auth';
//import firebaseConfig from "../../firebaseconfig";
import "../../firebaseconfig";
import { useState } from 'react';

const Auth = (props) => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    // save user info in firestor
    const createUser = (email, password, name) => {
        console.log('calling create user');
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log('resp:', resp);
                const createdUser = { ...user };
                setUser(createdUser);
                createdUser.isSignedIn = true;
                createdUser.error = '';
                // return resp;
            })
            .catch((error) => {
                const createdUser = { ...user };
                setUser(createdUser);
                createdUser.isSignedIn = true;
                createdUser.error = error.message;
                // return msg;

            })
    }
    return {
        createUser
    }
}
export default Auth;

