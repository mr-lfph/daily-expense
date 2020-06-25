import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="row d-flex ">
                <div className="col hla">
                    <img  alt="Expense" className="rounded-circle" />
                    <span>WelCome </span>
                </div>

                <div className="col">
                    <div className="header-right">
                        
                        <div className="d-flex">
                            <button className="btn">Sign Up</button>
                            <button className="btn">Log In</button>
                            <button className="btn">
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="d-flex">
                         <p>Welcome Mr user name </p>
                        </div>
                    </div>
                </div>

            </div>
            <nav><a>Home</a> <a>About</a></nav>
        </div>
    )
}

export default Header
