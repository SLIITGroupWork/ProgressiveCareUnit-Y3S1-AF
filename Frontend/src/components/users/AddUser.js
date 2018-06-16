import React, { Component } from 'react'
import PCUService from '../../shared/services/pcu.service';
import DangerTip from '../message-tips/DangerTip';

export default class AddUser extends Component {

    constructor() {
        super();

        this.pcuService = new PCUService();

        this.state = {
            firstName: '',
            lastName: '',
            nic: '',
            gender: '',
            contact: '',
            isValid: false,
            errorMessage: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

        setTimeout(() => {
            let isValid = true;

            for (let property in this.state) {

                if (this.state.hasOwnProperty(property)) {

                    if (property === 'isValid' || property === 'errorMessage')
                        continue;

                    let val = this.state[property];

                    if (val === null || val === undefined || val === '') {
                        isValid = false;
                        break;
                    }
                }
            }

            if (this.state.errorMessage) {
                this.setState({
                    isValid: isValid,
                    errorMessage: null
                });
            }
            else {
                this.setState({ isValid: isValid });
            }

        }, 100);
    }

    onSubmit(e) {

        e.preventDefault();

        if (this.state.isValid) {

            let rquest = {
                data: this.state
            }

            delete rquest.data.isValid;
            delete rquest.data.errorMessage;

            this.pcuService.addNewUser(rquest).then(usersResponse => {

                if (usersResponse.isSuccess) {

                    this.clearForm(null);
                }
                else {
                    this.setState({
                        errorMessage: usersResponse.message
                    })
                }
            });
        }
    }

    clearForm(e) {

        this.setState({
            firstName: '',
            lastName: '',
            nic: '',
            gender: '',
            contact: '',
            isValid: false,
            errorMessage: null
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

                                <div className="row mt-5">

                                    <div className="col-lg-6 mt-1">
                                        <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                                    </div>

                                    <div className="col-lg-6 mt-1">
                                        <input type="submit" className="btn btn-info btn-block" disabled={!this.state.isValid} />
                                    </div>

                                    {
                                        this.state.errorMessage ? 
                                        (
                                            <div className="col-lg-12 mt-3">
                                                <DangerTip title="Failed!" description={this.state.errorMessage} /> 
                                            </div>
                                        ) : null
                                    }
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
