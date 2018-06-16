import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import billEdit from './billEdit';
import axios from 'axios';
import { FieldGroup, Panel, ControlLabel, Form, FormGroup, Col, FormControl, Button, Checkbox, HelpBlock, Table } from 'react-bootstrap'


class billView extends Component {
    constructor() {
        super();
        this.state = {
            details: [],
            patientId: '',
            //drugPrice: '',
            hospitalCharges:'',
            laboraryCharges: '',
            OtherCharges: '',
            showComponent:false,
    
        }
        this.getBills = this.getBills.bind(this);
        //this.billEdit=this.billEdit.bind(this);
        this.passupdatedata=this.passupdatedata.bind(this);
    }
    passupdatedata(patientId,hospitalCharges,laboraryCharges,OtherCharges){
        this.setState({
            showComponent:true,
            patientId:patientId,
            hospitalCharges:hospitalCharges,
            laboraryCharges:laboraryCharges,
            OtherCharges:OtherCharges,
        });
    }
    getBills(patientId) {
        axios.get('http://localhost:5556/api/bill/searchBillDetailsByPatientId' + patientId, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                host: '104.236.174.88',
                port: 3128
            }
        })
            .then(response => {
                this.setState({
                    details: response.data,
                });
                console.log(this.state.details)
            }).catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getBills();
    }
    render() {
        var rows = this.state.details.map(function (data, i) {
            return (
                <tr key={i}>
                    <td>{data.patientId}</td>
                    <td>{data.hospitalCharges}</td>                    
                    <td>{data.laboraryCharges}</td>
                    <td>{data.OtherCharges}</td>               
                    
                    <td><Button bsStyle="success" bsSize="small" onClick={() => this.passupdatedata(data.patientId,data.hospitalChargesl,data.laboraryCharges,data.OtherCharges)}>Update</Button></td>
                </tr>
            )
        }.bind(this))

        return (
            <div >
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>PatientID</th>
                            <th>Hospital Charges</th>
                            <th>Laboratory Charges</th>
                            <th>Other Charges</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {this.state.showComponent ? <billEdit patientId={this.state.patientId} hospitalCharges={this.state.hospitalCharges} laboraryCharges={this.state.laboraryCharges} OtherCharges={this.state.OtherCharges} onUpate={this.getBills(this.props.patientId)}/>:null}

                
 
            </div>

        );
    }
}

export default billView;
