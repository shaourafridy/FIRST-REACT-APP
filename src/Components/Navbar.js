import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.theme} position-relative`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
           
          </ul>

          {/* Container for the theme selection */}
          <div className="d-flex align-items-center ms-auto">
            {/* Radio buttons for theme selection */}
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="lightMode" 
                value="navbar-light bg-light" 
                checked={props.theme === 'navbar-light bg-light'} 
                onChange={() => props.changeTheme('navbar-light bg-light')}
              />
              <label className="form-check-label" htmlFor="lightMode">Light</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="darkMode" 
                value="navbar-dark bg-dark" 
                checked={props.theme === 'navbar-dark bg-dark'} 
                onChange={() => props.changeTheme('navbar-dark bg-dark')}
              />
              <label className="form-check-label" htmlFor="darkMode">Dark</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="greenMode" 
                value="navbar-dark bg-success" 
                checked={props.theme === 'navbar-dark bg-success'} 
                onChange={() => props.changeTheme('navbar-dark bg-success')}
              />
              <label className="form-check-label" htmlFor="greenMode">Green</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="yellowMode" 
                value="navbar-dark bg-warning" 
                checked={props.theme === 'navbar-dark bg-warning'} 
                onChange={() => props.changeTheme('navbar-dark bg-warning')}
              />
              <label className="form-check-label" htmlFor="yellowMode">Yellow</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="blueMode" 
                value="navbar-dark bg-primary" 
                checked={props.theme === 'navbar-dark bg-primary'} 
                onChange={() => props.changeTheme('navbar-dark bg-primary')}
              />
              <label className="form-check-label" htmlFor="blueMode">Blue</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="themeOptions" 
                id="redMode" 
                value="navbar-dark bg-danger" 
                checked={props.theme === 'navbar-dark bg-danger'} 
                onChange={() => props.changeTheme('navbar-dark bg-danger')}
              />
              <label className="form-check-label" htmlFor="redMode">Red</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};
