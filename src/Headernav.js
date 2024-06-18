// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand navbar-dark bg-primary"> <a href="#menu-toggle" id="menu-toggle" className="navbar-brand"><span className="navbar-toggler-icon"></span></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"> <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Link</a> </li>
                </ul>
                <form className="form-inline my-2 my-md-0"> </form>
            </div>
        </nav>
        <div id="wrapper" className="toggled">
            
            <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
      <li className="sidebar-brand">
        <a href="#">Course Manager Portal</a>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#" className="coursessession">Courses & Sessions <i class="fa fa-caret-down" aria-hidden="true"></i>
        </Link>
      </li>
      <li className="dropdown coursessessiondropdown">
      <Link to="/addonlinecourse">Add New Online Course</Link>
      <Link to="/addnewtraining">Add New Training Course</Link>
      <Link to="/addnewtrainingonline">Add New Training/Online Course</Link>
      </li>
    </ul>
            </div> 
            
        </div>
        </header>
    );
};

export default Header;
