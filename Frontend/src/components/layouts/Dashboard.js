import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../shared/services/auth.service';
import PatientList from '../patient-registrations/PatientList';

export default class Dashboard extends Component {

    constructor() {
        super();
        
        this.authService = new AuthService();

        this.state = {
            isLoggedIn: this.authService.isLoggedIn,
            fullName: this.authService.firstName + ' ' + this.authService.lastName
        };
    }

    render() {

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            <p className="lead text-muted">Welcome { this.state.fullName }</p>

                            <div className="btn-group mb-4" role="group">
                                <Link to="/quick-patient-resitration" className="btn btn-light">
                                    <i className="fas fa-user-circle text-info mr-1"></i> 
                                    Register Patient</Link>
                                <Link to="/user/add" className="btn btn-light">
                                    <i className="fas fa-user-plus text-info mr-1"></i>
                                    Add User</Link>
                                <Link to="/user/map-patient-rigistration" className="btn btn-light">
                                    <i className="fas fa-angle-double-right text-info mr-1"></i>
                                    Assign Registration</Link>
                            </div>

                            <PatientList />

                            {/* <div>
                                <h4 className="mb-2">Education Credentials</h4>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>School</th>
                                            <th>Degree</th>
                                            <th>Years</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Northern Essex</td>
                                            <td>Associates</td>
                                            <td>
                                                02-03-2007 - 01-02-2009
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
