import React, { Component } from 'react'

export default class DoctorRegistration extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            nic: '',
            phoneNumber: '',
            specialization: ''
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
            phoneNumber: '',
            specialization: ''
        });
    }

    render() {

        return (
            <div className="doctor-registration">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">Doctor Registration</h1>

                            <p className="lead text-center mb-5">Please fill this form for registeration</p>

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
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="Phone Number" name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" rows="5"
                                        placeholder="Specializations ..." name="specialization" 
                                        value={ this.state.specialization } 
                                        onChange={ this.onChange }/>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mt-5">
                                        <input type="submit" className="btn btn-info btn-block" />
                                    </div>

                                    <div className="col-lg-6 mt-5">
                                        <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
