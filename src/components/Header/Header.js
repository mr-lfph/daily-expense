import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../Login/Login'
import { useAuth } from '../Login/useAuth';



const Header = (props) => {
    const auth = useAuth()
    const appName = "be better do Best";

    //console.log('userh:', auth.user)

    const handleSignOut = () => {
        auth.signOut().then(res => {
            window.location.pathname = '/';
        })
    }

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
                            <button className="btn">  <i className="fa fa-cart-plus" aria-hidden="true"></i>  </button>
                            {
                                auth.user.name ? <button className="btn" onClick={handleSignOut} >Sign Out</button>
                                    : <div>
                                        <Link to="/Login"> <button className="btn">Log In</button> </Link>
                                        <Link to="/Signup"> <button className="btn">Sign Up</button></Link>
                                    </div>
                            }
                        </div>
                        <div className="d-flex">
                            {
                                auth.user.name ? <span className="logInName">WelCome : {auth.user.name}</span> : ""
                            }
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
