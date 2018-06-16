import React, { Component } from 'react'
import ApiService from './../../shared/services/api.service'
import axios from 'axios';

export default class NextPatientDetails extends Component {

    constructor() {
        super();

        this.state = {
            referenceNo: '',
            name: '',
            patientGender: '',
            description: '',
            registeredTime: '',
            items:[]
        }

        // this.onClick = this.onClick.bind(this);
    }

    componentWillMount(){

        // axios.get('http://localhost:5556/api/doctors/patients/next', {
        // })
        // .then(function (response) {
        // })
        // .then()
        // .catch(function (error) {
        //   console.log(error);
        // });

        // this.ApiService.get('http://localhost:5556/api/doctors/patients/next')
        // .then(items=>this.setState({items}));

        //   console.log(this.state.items);


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

    render() {

        var items=this.state.items
        return (
            <div className="next-patient-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">View Next Patient Details</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Reference No:</span> {this.state.items.referenceNo}</label>
                                </div>
                                
                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Name:</span> {this.state.items.name}</label>
                                </div>

                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Gender:</span> {this.state.items.patientGender}</label>
                                </div>

                                <div className="col-lg mt-5">
                                    <label className=""><span class="label label-success">Description:</span> {this.state.items.description} </label>
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
