
import * as firebase from 'firebase/app'
import 'firebase/auth';
//import firebaseConfig from "../../firebaseconfig";
import "../../firebaseconfig";
import { useState } from 'react';

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
    const signInWithUserPass=(email,password)=>{
        console.log(email,password)
       return firebase.auth().signInWithEmailAndPassword(email, password)
       .then((resp)=>{
           const signedInUser=resp.user
           setUser(signedInUser)
           user.isSignedIn=true
           user.error=''
         return resp
       })
       .catch(function(error) {
            // Handle Errors here.
            console.log('error')
            user.isSignedIn = false;
            user.error = error.message;
            // ...
          });
    }
    return {
        user,
        createUser,
        signInWithUserPass
    }
}
export default Auth;

