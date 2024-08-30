import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/about';

import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('navbar-light bg-light'); // Initialize with light theme
  const [alert, setAlert] = useState(null);

  // Memoize showAlert function using useCallback
  const showAlert = useCallback((message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }, []);

  // Utility function to update the body classes
  const updateBodyClasses = (newTheme) => {
    const bodyClasses = ['bg-dark', 'bg-light', 'bg-success', 'bg-warning', 'bg-primary', 'bg-danger', 'text-light'];
    bodyClasses.forEach(cls => document.body.classList.remove(cls)); // Remove all potential classes

    switch (newTheme) {
      case 'navbar-dark bg-dark':
        document.body.classList.add('bg-dark', 'text-light');
        break;
      case 'navbar-dark bg-success':
        document.body.classList.add('bg-success', 'text-light');
        break;
      case 'navbar-dark bg-warning':
        document.body.classList.add('bg-warning', 'text-light');
        break;
      case 'navbar-dark bg-primary':
        document.body.classList.add('bg-primary', 'text-light');
        break;
      case 'navbar-dark bg-danger':
        document.body.classList.add('bg-danger', 'text-light');
        break;
      default:
        document.body.classList.add('bg-light');
    }
  };

  // Use useCallback to memoize the changeTheme function
  const changeTheme = useCallback((newTheme) => {
    setTheme(newTheme);
    updateBodyClasses(newTheme); // Update body classes based on the theme
    showAlert(`${newTheme.split(' ')[1].split('-')[1].charAt(0).toUpperCase() + newTheme.split(' ')[1].split('-')[1].slice(1)} mode is enabled`, "success");
  }, [showAlert]);

  useEffect(() => {
    changeTheme(theme); // To apply the initial theme
  }, [theme, changeTheme]);

  return (
    <> 
      <Router>
        <Navbar title="TATARA" theme={theme} changeTheme={changeTheme} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text To Analyze" theme={theme} changeTheme={changeTheme} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
