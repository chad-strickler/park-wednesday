import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="fill-verticle">
          <div className="vertical-center ">
            <ul>
              <div className="active row">
                <Link className="nav-link nav-item" to="/">Home <span className="sr-only">(current)</span></Link>
              </div>
              <div className="row">
                <Link className="nav-link nav-item" to="/about">About</Link>
              </div>
              <div className="row">
                <Link className="nav-link nav-item" to="/contact">Contact</Link>
              </div>
            </ul>
          </div>
        </div>
    );
  }
}

export default Navbar;
