import React from 'react';
import { Link } from 'react-router-dom';
import money from "../assets/download.jpg";
import icon from "../assets/download1.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
     <div className='main'>
     <div className='left'>
        <img src={money} alt='graphics' />
     </div>
     <div className="right">
        <img src={icon} alt='hwo'/>
        <h1>WELCOME TO SURPLUS!</h1>
        <h5>Manage your retirement finances with ease</h5>
        <button><Link to={"/signup"}>Sign Up</Link></button>
        <button><Link to={"/login"}>Login</Link></button>
     </div>
     </div>
    </>
  )
}

export default Home
