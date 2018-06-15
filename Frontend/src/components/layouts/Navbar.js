import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Progressive Care Unit
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/quick-patient-resitration">Resgiter Patient</Link>
                            </li>
                            { /* Dropdown */ }
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    Manage Users
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/user/map-patient-rigistration">Assign Registration</Link>
                                    <Link className="dropdown-item" to="/user/search">Search</Link>
                                    <Link className="dropdown-item" to="/user/add">Add New</Link>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/feedback">
                                    Feedback
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
