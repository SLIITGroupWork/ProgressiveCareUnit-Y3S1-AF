import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

class billDownload extends Component {
    constructor() {
        super();
        this.state = {
            startdate: '',
            endDate:'',
            patientId:'',
            
           
        }
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
        this.handlepatientIdChange = this.handlepatientIdChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleStartDateChange(date) {
        this.setState({
            startdate: date
          });
        console.log(this.state.startdate)
    }
    handleEndDateChange(date) {
        this.setState({
            endDate: date
          });
        console.log(this.state.endDate)
    }
    handlepatientIdChange(e) {
        this.setState({
            patientId: e.target.value
        })
        console.log(this.state.patientId)
    }
    
    handleClick = event => {
        event.preventDefault();
        axios.post('http://localhost:5556/api/billPDF/generateBill'+ patientId, {
           // patientId: this.state.patientId,
            startdate:  this.state.startdate,
            endDate:this.state.endDate,
            patientId:this.state.patientId,
            filename:this.state.patientId,                
            
        })
            .then(res => {
                alert("Bill Successfully downloaded!");
                console.log(res);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        this.setState = {
            startdate: '',
            endDate:'',
            patientId:'',
        }


    }
    render() {
        return (
            <div>

                <div>
                    <div class="well">

                        <a href="#" class="list-group-item list-group-item-danger"><h4><b>Total Bill Generation</b></h4></a>

                    </div>


                    <form>
                        <div className="form-group">
                            <label for="patientId">Patient ID:</label>
                            <input type="patientId" className="form-control" value={this.state.patientId} id="patientId" placeholder="Enter Patient ID" name="patientId" onChange={this.handlepatientIdChange} />
                        </div>                        
                        <div class="form-group">
                            <label for="startDate">Start Date:</label>
                            <DatePicker selected={this.state.startdate}
                                onSelect={this.handleStartDateChange} //when day is clicked
                                onChange={this.handleStartDateChange} //only when value has changed
                            />
                            
                        </div>
                        <div class="form-group">
                            <label for="endDate">End Date:</label>
                            <DatePicker selected={this.state.endDate}
                                onSelect={this.handleEndDateChange} //when day is clicked
                                onChange={this.handleEndDateChange} //only when value has changed
                            />
                            
                        </div>
                                                                                  
                        <button type="button" onClick={this.handleClick} class="btn btn-primary">Generate PDF</button>
                    </form>

                </div>

            </div>





        );
    }
}
export default billDownload;