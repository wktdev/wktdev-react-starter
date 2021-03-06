import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
const NavigationMenu = function(){

	return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link"  to='/'>Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link"  to='/about'>About</Link>
          </li>

        </ul>
      </div>
    </nav>
	)
} 

export default NavigationMenu
