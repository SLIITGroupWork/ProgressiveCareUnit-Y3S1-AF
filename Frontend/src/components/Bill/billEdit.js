import React, { Component } from 'react';
import axios from 'axios';
import { FieldGroup, Panel, ControlLabel, Form, FormGroup, Col, FormControl, Button, Checkbox, HelpBlock, Table } from 'react-bootstrap'

class EditBill extends Component{
    constructor(props){
        super(props);
        this.state={
            hospitalCharges:this.props.hospitalCharges,
            laboraryCharges:this.props.laboraryCharges,
            OtherCharges:this.props.OtherCharges,
            patientId:this.props.patientId,
        }
        this.handelHospitalChargesChange=this.handelHospitalChargesChange.bind(this);
        this.handelLaboratoryChargesChange=this.handelLaboratoryChargesChange.bind(this);
        this.handelOtherChargesChange=this.handelOtherChargesChange.bind(this);
        this.handleClickUpdate=this.handleClickUpdate.bind(this);
    }
    handelHospitalChargesChange(e){
        this.setState({
            hospitalCharges:e.target.value,
        })
    }
    handelLaboratoryChargesChange(e){
        this.setState({
            laboraryCharges:e.target.value,
        })
    }
    handelOtherChargesChange(e){
        this.setState({
            OtherCharges:e.target.value,
        })
    }
    handleClickUpdate(patientId) {
        axios.put(`http://localhost:5556/api/bill/editBillDetails` + patientId, {
            hospitalCharges: this.state.hospitalCharges,
            laboraryCharges: this.state.laboraryCharges,
            OtherCharges:this.state.OtherCharges

        })
            .then(res => {
                alert("Bill Updated");
                this.props.onUpate();
                console.log(res);
                console.log(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
          <div className="App-body">
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Edit</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <div className="App-body">
                <form >
                <ControlLabel>Hospital Charges:</ControlLabel>
                <FormControl value={this.state.hospitalCharges} id="formControlhospitalcharges" type="text" label="hospitalCharges" placeholder="Hospital charges" onChange={this.handelHospitalChargesChange} />
                <br/>
                <ControlLabel>Laboratory Charges: </ControlLabel>
                <FormControl  value={this.state.laboraryCharges} id="formControllaborarycharges" type="text" label="laboraryCharges" placeholder="Laboratory charges" onChange={this.handelLaboratoryChargesChange}/>
                <br/>
                <ControlLabel>Other Charges: </ControlLabel>
                <FormControl  value={this.state.OtherCharges} id="formControlothercharges" type="text" label="OtherCharges" placeholder="Other charges" onChange={this.handelOtherChargesChange}/>
                <br/>
                              
                <Button bsStyle="success" bsSize="small" onClick={()=>this.handleClickUpdate(this.props.patientId)}>Save Changes</Button>
                
                </form>
                </div>
                </Panel.Body>
            </Panel> 
               </div>
        )
    }
}

export default EditBill;