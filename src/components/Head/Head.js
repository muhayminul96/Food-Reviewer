import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css'

const Head = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-menu'><Link to='home'>Home</Link></div>
            <div className='nav-menu'><Link to='dashboard'>Dashboard</Link></div>
            <div className='nav-menu'><Link to='review'>Review</Link></div>
            <div className='nav-menu'><Link to='blog'>Blog</Link></div>
            <div className='nav-menu'><Link to='about'>About</Link></div>

           
        </div>
    );
};

export default Head;