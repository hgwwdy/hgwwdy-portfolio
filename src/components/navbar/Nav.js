import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary c-nav">
        <div className="container">
          <NavLink className="navbar-brand" to="#">HG<span style={{color:"#408bcd"}}>WW</span>DY</NavLink>
          <button 
            className={`navbar-toggler ${isToggled ? 'toggled' : ''}`} 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded={isToggled} 
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center ">
              <NavLink 
                className="nav-link fy-7" 
                exact 
                to="/" 
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink 
                className="nav-link" 
                to="/about" 
                activeClassName="active"
              >
                About me
              </NavLink>
              <NavLink 
                className="nav-link" 
                to="/projects" 
                activeClassName="active"
              >
                Projects
              </NavLink>
              <NavLink 
                className="nav-link" 
                to="/contact" 
                activeClassName="active"
              >
                Contact
              </NavLink>
              <li className='g-l'>
                <a href="https://github.com/hgwwdy">
                  <i class="fa-brands fa-square-github"></i></a>
              </li>
              <li className='g-l'>
                <a href='https://www.linkedin.com/in/hibst-getachew'> 
                  <i class="fa-brands fa-linkedin"></i>  </a></li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
