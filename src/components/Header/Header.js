import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../Login/Login'
//import { useAuth } from '../Login/useAuth';


const Header = (props) => {
   // const auth=useAuth() 

    //console.log(auth)

    const userName = "Mizanur Rahman";
    const appName = "be better do Best";
    return (
        <div className="container">
            <div className="row d-flex ">
                <div className="col hla">
                    <img alt="Expense" className="himg rounded-circle" />
                   WelCome 2 <span className="logInName"> {appName}</span>
                   {/* <button>SignInWithGoogle</button> */}
                </div>
                <div className="col">
                    <div className="header-right">
                        <div className="d-flex">
                          
                            <Link to="/Signup"> <button className="btn">Sign Up</button></Link>
                            <Link to="/Login"> <button className="btn">Log In</button> </Link>
                            <button className="btn">
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="d-flex">

                            <p>Welcome <span className="logInName">{userName}</span> </p>
                        </div>
                    </div>
                </div>

            </div>
            <nav>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                


            </nav>
        </div>
    )
}

export default Header
