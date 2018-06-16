import React, { Component } from 'react'

export default class AddUser extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            nic: '',
            gender: '',
            contact: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();
    }

    clearForm(e) {

        this.setState({
            firstName: '',
            lastName: '',
            nic: '',
            gender: '',
            contact: ''
        });
    }

    render() {

        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">Add New User</h1>

                            <p className="lead text-center mb-5">Add new user to the system</p>

                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="First Name" name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="Last Name" name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="NIC" name="nic"
                                        value={this.state.nic}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="gender1">
                                            <input type="radio" className="form-check-input" id="gender1"
                                                name="gender" value="MALE"
                                                checked={this.state.gender === 'MALE'}
                                                onChange={this.onChange} />Male
                                        </label>
                                    </div>

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="gender2">
                                            <input type="radio" className="form-check-input" id="gender2"
                                                name="gender" value="FEMALE"
                                                checked={this.state.gender === 'FEMALE'}
                                                onChange={this.onChange} />Female
                                        </label>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="Contact" name="contact"
                                        value={this.state.contact}
                                        onChange={this.onChange} />
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mt-5">
                                        <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
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
