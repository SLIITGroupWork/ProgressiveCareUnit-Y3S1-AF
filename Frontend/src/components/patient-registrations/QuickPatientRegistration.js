import React, { Component } from 'react'
import PCUService from '../../shared/services/pcu.service';
import DangerTip from '../message-tips/DangerTip';

const patientStatusConsts = require('../../consts/patient-registration.consts').patientStatus;

export default class QuickPatientRegistration extends Component {

    constructor() {
        super();

        this.pcuService = new PCUService();

        this.state = {
            name: '',
            description: '',
            contact: '',
            patientGender: '',
            patientStatus: patientStatusConsts.INWARD,
            isTreated: false,
            priority: 1,
            isValid: false,
            errorMessage: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {

        if (e.target.name === 'isTreated') {
            
            this.setState({
                isTreated: !this.state.isTreated
            });
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        setTimeout(() => {
            let isValid = true;

            for (let property in this.state) {

                if (this.state.hasOwnProperty(property)) {
                    
                    if (property === 'isTreated' || property === 'errorMessage')
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

            let request = {
                data: this.state
            }

            delete request.data.isValid;

            this.pcuService.addPatientRegistration(request).then(patientRegistrationResponse => {
                
                if (patientRegistrationResponse.isSuccess) {
                    this.clearForm(null);
                }
                else {
                    this.setState({
                        errorMessage: patientRegistrationResponse.message
                    });
                }
            });
        }
    }

    clearForm(e) {

        this.setState({
            name: '',
            description: '',
            contact: '',
            patientGender: '',
            patientStatus: patientStatusConsts.INWARD,
            isTreated: false,
            priority: 1,
            isValid: false,
            errorMessage: null
        });
    }

    render() {

        return (
            <div className="patient-register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">Add Patient Registration</h1>

                            <p className="lead text-center mb-5">Add new patient registration to the system</p>

                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="Name" name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-md"
                                        placeholder="Description" name="description"
                                        value={this.state.description}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="gender1">
                                            <input type="radio" className="form-check-input" id="gender1"
                                                name="patientGender" value="MALE"
                                                checked={this.state.patientGender === 'MALE'}
                                                onChange={this.onChange} />Male
                                        </label>
                                    </div>

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="gender2">
                                            <input type="radio" className="form-check-input" id="gender2"
                                                name="patientGender" value="FEMALE"
                                                checked={this.state.patientGender === 'FEMALE'}
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

                                <div className="form-group">

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="patientStatus1">
                                            <input type="radio" className="form-check-input" id="patientStatus1"
                                                name="patientStatus" value={patientStatusConsts.INWARD}
                                                checked={this.state.patientStatus === patientStatusConsts.INWARD}
                                                onChange={this.onChange} />Inward
                                            </label>
                                    </div>

                                    <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="patientStatus2">
                                            <input type="radio" className="form-check-input" id="patientStatus2"
                                                name="patientStatus" value={patientStatusConsts.ADMINITTED}
                                                checked={this.state.patientStatus === patientStatusConsts.ADMINITTED}
                                                onChange={this.onChange} />Admitted
                                            </label>
                                    </div>

                                    {/* <div className="form-check-inline">
                                        <label className="form-check-label" htmlFor="patientStatus3">
                                            <input type="radio" className="form-check-input" id="patientStatus3"
                                                name="patientStatus" value={patientStatusConsts.DISCHARGED}
                                                checked={this.state.patientStatus === patientStatusConsts.DISCHARGED}
                                                onChange={this.onChange} />Discharged
                                            </label>
                                    </div> */}

                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input form-check-input" name="isTreated"
                                            value="true"
                                            checked={this.state.isTreated} onClick={this.onChange} />Is Treated (Whether patient treated or not)
                                    </label>
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="priority">Priority</label>
                                    <select className="form-control" id="priority" name="priority" onChange={this.onChange} value={this.state.priority}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-6 mt-1">
                                        <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                                    </div>

                                    <div className="col-lg-6 mt-1">
                                        <input type="submit" className="btn btn-info btn-block" disabled={!this.state.isValid}/>
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
        )
    }
}
