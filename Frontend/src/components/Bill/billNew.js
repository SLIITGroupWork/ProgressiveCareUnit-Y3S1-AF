import React, { Component } from 'react';
import axios from 'axios';

class billNew extends Component {
    constructor() {
        super();
        this.state = {
            patientId: '',
            //drugPrice: '',
            hospitalCharges:'',
            laboraryCharges: '',
            OtherCharges: '',
           
        }
        this.handlepatientIdChange = this.handlepatientIdChange.bind(this)
        this.handleHospitalChargesChange = this.handleHospitalChargesChange.bind(this)
        this.handlelaboraryChargesChange = this.handlelaboraryChargesChange.bind(this)
        this.handleOtherChargesChange = this.handleOtherChargesChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handlepatientIdChange(e) {
        this.setState({
            patientId: e.target.value
        })
        console.log(this.state.patientId)
    }
    handleHospitalChargesChange(e) {
        this.setState({
            hospitalCharges: e.target.value
        })
        console.log(this.state.hospitalCharges)
    }
    handlelaboraryChargesChange(e) {
        this.setState({
            laboraryCharges: e.target.value
        })
        console.log(this.state.laboraryCharges)
    } 
     
    handleOtherChargesChange(e) {
        this.setState({
            OtherCharges: e.target.value
        })
        console.log(this.state.OtherCharges)
    }
    // onSubmit(event){
    //     event.preventDefault();
    //     event.stopPropagation();
    //     if (this.drugName && this.drugDosage && this.drugFrequency ) {
    //       let drug = {
    //         patientId: this.state.patientId,
    //         //drugPrice: this.state.drugPrice,
    //         hospitalCharges: this.state.hospitalCharges,
    //         laboraryCharges: this.state.laboraryCharges,
    //         OtherCharges: this.state.OtherCharges,           
                
            
    //       }
            
    //        this.drugs = this.state.prescription.drugs;
    //       this.drugs.push(drug);

    //       this.setState({prescription: {drugs : this.drugs}});
            
    //         //this.state.prescription.drugs.push(drug);

    //         this.props.updatePrescription(this.state.prescription);

    //         alert("Successfully inserted.....!")
    //     }
    // }
    
    
    handleClick = event => {
        event.preventDefault();
        //event.stopPropagation();
        axios.post('http://localhost:5556/api/bill/addNewBillDetails', {
            patientId: this.state.patientId,
            //drugPrice: this.state.drugPrice,
            hospitalCharges: this.state.hospitalCharges,
            laboraryCharges: this.state.laboraryCharges,
            OtherCharges: this.state.OtherCharges,           
                
            
        })
            .then(res => {
                alert("Bill Successfully Added!");
                console.log(res);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState = {
            patientId: '',
            //drugPrice: '',
            hospitalCharges:'',
            laboraryCharges: '',
            OtherCharges: '',
           
        }


    }
    render() {
        return (
            <div>

                <div>
                    <div class="well">

                        <a href="#" class="list-group-item list-group-item-danger"><h4><b>Add New</b></h4></a>

                    </div>


                    <form>
                        <div className="form-group">
                            <label for="patientId">Patient ID:</label>
                            <input type="patientId" className="form-control" value={this.state.patientId} id="patientId" placeholder="Enter Patient ID" name="name" onChange={this.handlepatientIdChange} />
                        </div>                        
                        <div class="form-group">
                            <label for="hospitalCharges">Hospital Charges:</label>
                            <input type="number" class="form-control" value={this.state.hospitalCharges} id="hospitalCharges" placeholder="Enter Hosplital Charges" name="hospitalCharges" onChange={this.handleHospitalChargesChange} />
                        </div>
                        <div class="form-group">
                            <label for="laboraryCharges">Doctor ID:</label>
                            <input type="number" class="form-control" value={this.state.laboraryCharges} id="laboraryCharges" placeholder="Enter Laboratory Charges" name="laboraryCharges" onChange={this.handlelaboraryChargesChange} />
                        </div>
                        <div class="form-group">
                            <label for="OtherCharges">Doctor ID:</label>
                            <input type="number" class="form-control" value={this.state.OtherCharges} id="OtherCharges" placeholder="Enter Other Charges" name="OtherCharges" onChange={this.handleOtherChargesChange} />
                        </div>
                                                            
                        <button type="button" onClick={this.handleClick.bind(this)} class="btn btn-primary">Add New</button>
                    </form>

                </div>

            </div>





        );
    }
}
export default billNew;