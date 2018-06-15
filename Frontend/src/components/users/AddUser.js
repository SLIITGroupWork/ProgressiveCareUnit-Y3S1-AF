import React, { Component } from 'react'

export default class AddUser extends Component {

    render() {

        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">Add New User</h1>

                            <p className="lead text-center mb-5">Add new user to the system</p>

                            <form>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md" placeholder="First Name" name="firstName" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md" placeholder="Last Name" name="lastName" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md" placeholder="NIC" name="nic" />
                                </div>

                                <div className="form-group">

                                    <div className="form-check-inline">
                                        <label className="form-check-label" for="gender1">
                                            <input type="radio" className="form-check-input" id="gender1" name="gender" value="MALE" />Male
                                        </label>
                                    </div>

                                    <div className="form-check-inline">
                                        <label className="form-check-label" for="gender2">
                                            <input type="radio" className="form-check-input" id="gender2" name="gender" value="FEMALE" />Female
                                        </label>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md" placeholder="Contact" name="contact" />
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mt-5">
                                        <button className="btn btn-secondary btn-block">Clear</button>
                                    </div>

                                    <div className="col-lg-6 mt-5">
                                        <input type="submit" className="btn btn-info btn-block" />
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
