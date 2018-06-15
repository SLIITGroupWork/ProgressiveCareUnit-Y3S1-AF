import React, { Component } from 'react';
import axios from 'axios';

class prescriptionNew extends Component {
    constructor() {
        super();
        this.state = {
            patientId: '',
            doctorId: '',
            drugNames: [{drugname:''}],
            quantities: [{quantity:''}],
            descriptions: [{description:''}],
           
        }
        this.handlepatientIdChange = this.handlepatientIdChange.bind(this)
        this.handleDoctorIdChange = this.handleDoctorIdChange.bind(this)
        this.handleRemoveDrugHolder = this.handleRemoveDrugHolder.bind(this)
        this.handleDrugHolderNameChange = this.handhandleDrugHolderNameChangelePwdChange.bind(this)
        this.handleAddDrugholder = this.handleAddDrugholder.bind(this)
        this.handleQuantityHolderNameChange = this.handleQuantityHolderNameChange.bind(this)
        this.handleDescriptionHolderNameChange = this.handleDescriptionHolderNameChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handlepatientIdChange(e) {
        this.setState({
            patientId: e.target.value
        })
        console.log(this.state.patientId)
    }
    handleDoctorIdChange(e) {
        this.setState({
            doctorId: e.target.value
        })
        console.log(this.state.doctorId)
    }
    handleRemoveDrugHolder = (idx) => () => {
        this.setState({ drugNames: this.state.drugNames.filter((s, sidx) => idx !== sidx) });
    }
    handleDrugHolderNameChange = (idx) => (evt) => {
        const newDrugNames = this.state.drugNames.map((drugNames, sidx) => {
          if (idx !== sidx) return drugNames;
          return { ...drugNames, drugname: evt.target.value };
        });
        
        this.setState({ shareholders: newShareholders });
    }
    handleAddDrugholder = () => {
        this.setState({ drugNames: this.state.drugNames.concat([{ drugname: '' }]) });
    }
    handleQuantityHolderNameChange = (idx) => (evt) => {
        const newDrugNames = this.state.quantities.map((quantities, sidx) => {
          if (idx !== sidx) return quantities;
          return { ...quantities,   quantity: evt.target.value };
        });
        
        this.setState({ shareholders: newShareholders });
    }
    handleDescriptionHolderNameChange = (idx) => (evt) => {
        const newDrugNames = this.state.descriptions.map((descriptions, sidx) => {
          if (idx !== sidx) return descriptions;
          return { ...descriptions, description: evt.target.value };
        });
        
        this.setState({ shareholders: newShareholders });
    } 
    
    
    handleClick = event => {
        event.preventDefault();
        axios.post('http://localhost:5556/api/prescriptions/addPrescription', {
            patientId: this.state.patientId,
            doctorId: this.state.doctorId,
            drugNames: this.state.drugNames,
            quantities: this.state.quantities,
            descriptions: this.state.descriptions,
            
        })
            .then(res => {
                alert("Prescription Successfully Added!");
                console.log(res);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState = {
            patientId: '',
            doctorId: '',
            drugNames: [],
            quantities: [],
            descriptions: [],
           
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
                            <input type="patientId" className="form-control" value={this.state.patientId} id="patientId" placeholder="Enter Patient ID" name="name" onChange={this.handleNameChange} />
                        </div>
                        <div class="form-group">
                            <label for="doctorId">Doctor ID:</label>
                            <input type="doctorId" class="form-control" value={this.state.doctorId} id="doctorId" placeholder="Enter Doctor Dd" name="doctorId" onChange={this.handleDoctorIdChange} />
                        </div>
                        <form>
                            {this.state.drugNames.map((drugNames ,idx)=>{
                                    
                                <div className="drugHolder">
                                    <table>
                                        <input type="text" placeholder='Drug Name' onChange={this.handleDrugHolderNameChange(idx)} />
                                        <input type="text" placeholder='Drug quantity' onChange={this.handleQuantityHolderNameChange(idx)} />
                                        <input type="text" placeholder='Drug description' onChange={this.handleDescriptionHolderNameChange(idx)} />
                                    
                                        <button type="button" onClick={this.handleRemoveDrugHolder(idx)} className="small">-</button>
                                    </table>
                                </div>                                   
                                    

                            })}
                            <button type="button" onClick={this.handleAddDrugholder} className="small">Add Drugholder</button>
                        </form>
                                    
                        <button type="button" onClick={this.handleClick} class="btn btn-primary">Add New</button>
                    </form>

                </div>

            </div>





        );
    }
}
export default prescriptionNew;