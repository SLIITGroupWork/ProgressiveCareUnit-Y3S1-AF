import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../shared/services/auth.service';

class Navbar extends Component {

    constructor() {

        super();

        this.authService = new AuthService();

        this.state = {
            isLoggedIn: this.authService.isLoggedIn,
            loggedUsername: this.authService.username,
            logout: this.authService.logout
        };
    }

    renderLoginAndLogout() {

        if (this.state.isLoggedIn) {

            return (
                <a className="nav-link" onClick={this.state.logout}>
                    <span className="fas fa-sign-out-alt"></span>Logout
                </a>
            );
        }
        else {

            return (
                <Link className="nav-link" to="/login">
                    <span className="fas fa-sign-in-alt mr-1"></span>Login
                </Link>
            );
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
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
                            { /* Dropdown */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    Manage Users
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/user/map-patient-rigistration">Assign Registration</Link>
                                    <Link className="dropdown-item" to="/user/search">Search User</Link>
                                    <Link className="dropdown-item" to="/user/add">Add New Users</Link>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/feedbacks">
                                    <span className="fas fa-comments mr-1"></span>Feedback
                                </Link>
                            </li>
                            <li className="nav-item">
                                {
                                    this.renderLoginAndLogout()
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
