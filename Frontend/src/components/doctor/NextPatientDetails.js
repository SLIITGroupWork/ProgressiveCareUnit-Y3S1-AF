import React, { Component } from 'react'

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

    changeStatus() {

        this.setState({
            status : 'RESTING'
        });
    }

    getNextPatient() {

    }

    render() {

        return (
            <div className="next-patient-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">View Next Patient Details</h1>

                            <div className="col-lg mt-5">
                                <label className=""><span class="label label-success">Reference No:</span> </label>
                            </div>
                            
                            <div className="col-lg mt-5">
                                <label className=""><span class="label label-success">Name:</span> </label>
                            </div>

                            <div className="col-lg mt-5">
                                <label className=""><span class="label label-success">Gender:</span> </label>
                            </div>

                            <div className="col-lg mt-5">
                                <label className=""><span class="label label-success">Description:</span> </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
