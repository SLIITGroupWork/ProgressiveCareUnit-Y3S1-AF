import React, { Component } from 'react'

export default class OnePatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.patient.referenceNo}</td>
                <td>{this.props.patient.name}</td>
                <td>{this.props.patient.description}</td>
                <td>{this.props.patient.patientStatus}</td>
                <td>{this.props.patient.patientGender}</td>
                <td>{this.props.patient.priority}</td>
                <td>
                    <button className="btn btn-warning">
                        Assign User
                    </button>
                </td>
            </tr>
        )
    }
}
