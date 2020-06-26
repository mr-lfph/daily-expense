import React from 'react';

const Signup = () => {
    return (
        <div className="container">
            <h2>Sign Up / Registration Here </h2>
            <br />
            {/* <div className="col-3 mx-auto">
                 
                <div className="row">
                    Name <input placeholder="Your User Name"></input>
                </div>
                <div className="row">
                    Email <input placeholder="Email"></input>
                </div>
                <div className="row">
                    Password
                    <input placeholder="Password"></input>
                </div>
            </div>
            */}

            <div className="col-12">
                <div className="row justify-content-center ">
                    <div className="col-3 text-right">Name</div>
                    <div className="col-3 text-left">
                        <input placeholder="Your User Name"></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 text-right">Email</div>
                    <div className="col-3 text-left">
                        <input placeholder="Email"></input>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3 text-right">Password</div>
                    <div className="col-3 text-left">
                                            
                        <input type="password" placeholder="Password"></input>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;