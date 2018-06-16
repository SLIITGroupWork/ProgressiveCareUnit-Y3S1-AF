import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FieldGroup, Panel, ControlLabel, Form, FormGroup, Col, FormControl, Button, Checkbox, HelpBlock, Table } from 'react-bootstrap'


class ClientList extends Component {
    constructor() {
        super();
        this.state = {
            // details: [],
            // ID:'',
            // Name: '',
            // NIC: '',
            // Email: '',
            // Contact: '',
            // District: '',
            // showComponent:false


    
        }
        this.getPrescription = this.getPrescription.bind(this);
        this.handleClickDelete=this.handleClickDelete.bind(this);
        this.passupdatedata=this.passupdatedata.bind(this);
    }
    passupdatedata(userid,email,contact){
        this.setState({
            showComponent:true,
            ID:userid,
            Email:email,
            Contact:contact,
        });console.log(email)
    }
    getPrescription() {
        axios.get('http://localhost:5556/api/prescriptions/searchPrescription/'+PatientName, {
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
    handleClickDelete(){
        alert("Hello world")
    }
    componentDidMount() {
        this.getClients();
    }
    render() {
        var rows = this.state.details.map(function (data, i,handleClickDelete) {
            return (
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data._id}</td>                    
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.district}</td>
                    <td><Button bsStyle="danger" bsSize="small" onClick={() => this.handleClickDelete()}>Delete</Button></td>
                    <td><Button bsStyle="success" bsSize="small" onClick={() => this.passupdatedata(data._id,data.email,data.contact)}>Update</Button></td>
                </tr>
            )
        }.bind(this))

        return (
            <div >
                <div>
                    <h2>Prescription Details</h2>
                    <form class="navbar-form navbar-left" action="/action_page.php">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" name="search" />
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

                <div class="btn-group">
                    <Link to='/prescription/New'><button type="button" class="btn btn-primary">Add New Prescription</button></Link>
                </div>


                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Drug Name</th>
                            <th>Quantity</th>
                            <th>District</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {this.state.showComponent ? <EditClient userid={this.state.ID} email={this.state.Email} contact={this.state.Contact} onUpate={this.getClients}/>:null}
 
            </div>

        );
    }
}
class EditClient extends Component{
    constructor(props){
        super(props);
        this.state={
            emailAddress:this.props.email,
            contactNo:this.props.contact
        }
        this.handelEmailChange=this.handelEmailChange.bind(this);
        this.handelContactChange=this.handelContactChange.bind(this);
        this.handleClickUpdate=this.handleClickUpdate.bind(this);
    }
    handelEmailChange(e){
        this.setState({
            emailAddress:e.target.value,
        })
    }
    handelContactChange(e){
        this.setState({
            contactNo:e.target.value,
        })
    }
    handleClickUpdate(userid) {
        axios.put(`http://localhost:4000/api/clients-update/` + userid, {
            email: this.state.emailAddress,
            contact: this.state.contactNo,

        })
            .then(res => {
                alert("Client Updated");
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
                <ControlLabel>Email Address:</ControlLabel>
                <FormControl value={this.state.emailAddress} id="formControluname" type="text" label="email" placeholder="email address" onChange={this.handelEmailChange} />
                <br/>
                <ControlLabel>Contact: </ControlLabel>
                <FormControl  value={this.state.contactNo} id="formControlpassword" type="text" label="password" placeholder="Contact No" onChange={this.handelContactChange}/>
                <br/>
                {/* <ControlLabel>Category :</ControlLabel>
                <FormControl value={this.state.workingCategory} id="formControlpassword" type="text" label="contact number" placeholder="Category" onChange={this.handelCategoryChange}/>
                <br/> */}
                
                <Button bsStyle="success" bsSize="small" onClick={()=>this.handleClickUpdate(this.props.userid)}>Save Changes</Button>
                
                </form>
                </div>
                </Panel.Body>
            </Panel> 
               </div>
        )
    }
}

export default ClientList;