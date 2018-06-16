import React, { Component } from 'react'
import axios from 'axios';

export default class NextPatientDetails extends Component {

    constructor() {
        super();

        this.state = {
            referenceNo: '',
            name: '',
            patientGender: '',
            description: '',
            registeredTime: ''
        }

        // this.onClick = this.onClick.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5556/api/doctor-patients', {
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getNextPatient() {
        axios.get('http://localhost:5556/api/doctors/patients/next', {
            
          })
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {

        return (
            <div className="next-patient-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">View Next Patient Details</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Reference No:</span> {this.state.referenceNo}</label>
                                </div>
                                
                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Name:</span> {this.state.name}</label>
                                </div>

                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Gender:</span> {this.state.patientGender}</label>
                                </div>

                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Description:</span> {this.state.description} </label>
                                </div>

                                <div className="col-lg mt-5">
                                    <input type="submit" className="btn btn-info btn-block" value="Next"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
