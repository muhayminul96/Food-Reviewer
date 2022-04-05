import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Head.css'

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        
      </div>
    );
  }
  

const Head = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-menu'><CustomLink to='home'>Home</CustomLink></div>
            <div className='nav-menu'><CustomLink to='review'>Review</CustomLink></div>
            <div className='nav-menu'><CustomLink to='dashboard'>Dashboard</CustomLink></div>
            <div className='nav-menu'><CustomLink to='blog'>Blog</CustomLink></div>
            <div className='nav-menu'><CustomLink to='about'>About</CustomLink></div>

           
        </div>
    );
};

export default Head;