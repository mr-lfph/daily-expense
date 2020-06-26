import React from 'react'
import img1 from '../../image/NTt.png'
import './Home.css'

const Home=()=> {
    return (
        <div>
                <h2>WelCome Home , We are here waiting for you</h2>
                <img src={img1} alt="logo" className="rounded-circle"/>
        </div>
    )
}

export default Home
