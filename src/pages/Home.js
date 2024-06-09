import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/01.jpg';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}> 
        <div className="headerContainer" >
            <h1>Xi'an Foods </h1>
            <p> 美的很！</p>
            <Link to="/menu">
                <button> Order Now</button>
            </Link>
           
        </div>
    </div>
  )
}

export default Home