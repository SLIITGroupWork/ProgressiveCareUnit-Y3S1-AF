import React, { Component } from 'react';
import axios from 'axios';


class prescriptionNew extends Component {
    constructor() {
        super();
        this.state = {
            patientId: '',
            doctorId: '',
            drugname:'',
            quantity:'',
            description:'',
            drugNames: [{drugname:''}],
            quantities: [{quantity:''}],
            descriptions: [{description:''}],
           
        }
        this.handlepatientIdChange = this.handlepatientIdChange.bind(this)
        this.handleDoctorIdChange = this.handleDoctorIdChange.bind(this)
        this.handleRemoveDrugHolder = this.handleRemoveDrugHolder.bind(this)
        this.handleDrugHolderNameChange = this.handleDrugHolderNameChange.bind(this)
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
        
        this.setState({ drugNames: newDrugNames });
    }
    handleAddDrugholder = () => {
        this.setState({ drugNames: this.state.drugNames.concat([{ drugname: '' }]) });
    }
    handleQuantityHolderNameChange = (idx) => (evt) => {
        const newQuantity = this.state.quantities.map((quantities, sidx) => {
          if (idx !== sidx) return quantities;
          return { ...quantities,   quantity: evt.target.value };
        });
        
        this.setState({ quantities: newQuantity });
    }
    handleDescriptionHolderNameChange = (idx) => (evt) => {
        const newDescription = this.state.descriptions.map((descriptions, sidx) => {
          if (idx !== sidx) return descriptions;
          return { ...descriptions, description: evt.target.value };
        });
        
        this.setState({ descriptions: newDescription });
    } 
    
    
    handleClick = event => {
        //event.preventDefault();
        console.log("check")
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
            drugname:'',
            quantity:'',
            description:'',
            drugNames: [{drugname:''}],
            quantities: [{quantity:''}],
            descriptions: [{description:''}],
           
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
                            <input type="patientId" className="form-control" value={this.state.patientId} id="patientId" placeholder="Enter Patient ID" name="patientId" onChange={this.handlepatientIdChange} />
                        </div>
                        <div class="form-group">
                            <label for="doctorId">Doctor ID:</label>
                            <input type="doctorId" class="form-control" value={this.state.doctorId} id="doctorId" placeholder="Enter Doctor Dd" name="doctorId" onChange={this.handleDoctorIdChange} />
                        </div>
                        <div>
                        <label for="Drugs">Drugs :</label><br></br>
                        
                            {this.state.drugNames.map((drugname ,idx)=>{
                                    
                                <div className="drugname">
                                    
                                        <label for="Drugs">Drug Name :</label>
                                        <input type="text" placeholder={`drugname #${idx + 1} drugname`} onChange={this.handleDrugHolderNameChange(idx)} />
                                        <label for="Drugs">quantity :</label>
                                        <input type="text" placeholder='Drug quantity' onChange={this.handleQuantityHolderNameChange(idx)} />
                                        <label for="Drugs">Description :</label>
                                        <input type="text" placeholder='Drug description' onChange={this.handleDescriptionHolderNameChange(idx)} />
                                    
                                        <button type="button" onClick={this.handleRemoveDrugHolder(idx)} className="btn btn-primary">-</button>
                                    
                                </div>                            
                                    

                            })}
                            <button type="button" onClick={this.handleAddDrugholder} className="btn btn-primary">Add Drugholder</button>
                    
                        </div>
                        <div>
                        <br></br>       
                        <button type="button" onSubmit={this.handleClick(this)} class="btn btn-primary">Add New</button>
                        </div>
                    </form>

                </div>

            </div>





        );
    }
}
export default prescriptionNew;