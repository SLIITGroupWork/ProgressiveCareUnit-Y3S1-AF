import React, { Component } from 'react'
import PCUService from '../../shared/services/pcu.service';
import OnePatient from './OnePatient';
import DangerTip from '../message-tips/DangerTip';

export default class PatientList extends Component {

    constructor() {
        super();

        this.pcuService = new PCUService();

        this.state = {
            patients: []
        };

        this.getRequiredData();
    }

    getRequiredData() {

        this.pcuService.getAllPatientRegistrations().then(patientRegistrationsResponse => {

            if (patientRegistrationsResponse.isSuccess) {
                this.setState({
                    patients: patientRegistrationsResponse.data,
                    errorMessage: null
                });
            }
            else {
                this.setState({
                    patients: [],
                    errorMessage: patientRegistrationsResponse.message
                });
            }
        });
    }

    listRender() {

        let paientJSX = [];

        for (let ind = 0, len = this.state.patients.length; ind < len; ind++) {

            paientJSX.push(<OnePatient key={this.state.patients[ind].referenceNo} patient={this.state.patients[ind]} />);
        }

        return paientJSX;
    }

    render() {

        return (
            <div>
                <h4 className="mb-2">Registered Patients</h4>

                {
                    this.state.errorMessage ?
                        (
                            <div className="col-lg-12 mt-3">
                                <DangerTip title="Failed!" description={this.state.errorMessage} />
                            </div>
                        ) : null
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>ReferenceNo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>PatientStatus</th>
                            <th>Priority</th>
                            <th>Gender</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.patients.length > 0) ? 
                                    this.listRender() : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
