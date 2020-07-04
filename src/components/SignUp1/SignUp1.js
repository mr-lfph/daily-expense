import React from 'react';
import Auth from '../Login/useAuth';


const SignUp1 = () => {
    const auth=Auth();
    console.log(auth.createUser("mr.lph@gmail.com","","Mizan"));
    return (
        <div>
            <h2 style={{color:"white"}}>Wao you are user now !!! </h2>
        </div>
    );
};

export default SignUp1;