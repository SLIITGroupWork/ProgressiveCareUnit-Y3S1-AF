import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthService from './shared/services/auth.service';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import FirstPage from './components/layouts/FirstPage';
import Dashboard from './components/layouts/Dashboard';
import Login from './components/auth/Login';
import AddUser from './components/users/AddUser';
import QuickPatientRegistration from './components/patient-registrations/QuickPatientRegistration';

        
import Feedback from './components/feedbacks/Feedback';
import DoctorRegistration from './components/doctor/DoctorRegistration';
import NextPatient from './components/doctor/NextPatient';
import NextPatientDetails from './components/doctor/NextPatientDetails';
//import PrescriptionList from './components/Prescription/prescriptionList';
import AddBill from './components/Bill/billNew';
import ViewBill from './components/Bill/billView';
import SearchBill from './components/Bill/billSearch';
import NewPrescription from './components/Prescription/prescriptionNew';
import Export from './components/Bill/BillPDF';



class App extends Component {

    constructor() {
        super();
        
        this.authService = new AuthService();

        this.state = {
            isLoggedIn: this.authService.isLoggedIn
        };
    }
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    
                    {
                        this.state.isLoggedIn ? 
                            <Route exact path="/" component={ Dashboard } /> : 
                            <Route exact path="/" component={ FirstPage } />
                    }                    

                    <div className="container">

                        <Route exact path="/login" component={ Login }/>

                        <Route exact path="/user/add" component={ AddUser }/>

                        <Route exact path="/quick-patient-resitration" component={ QuickPatientRegistration }/>


                        <Route exact path="/feedbacks" component={ Feedback }/>

                        <Route exact path="/doctors/registration" component={ DoctorRegistration }/>

                        <Route exact path="/doctors" component={ NextPatient }/>

                        <Route exact path="/doctors/nextPatient" component={ NextPatientDetails } />


                        <Route exact path="/bill/new" component={ AddBill } />

                        <Route exact path="/bill/view" component={ ViewBill } />

                        <Route exact path="/bill/search" component={ SearchBill } />
                        <Route exact path="/prescription/new" component={ NewPrescription } />
                        <Route exact path="/bill/PDF" component={ Export } />


                    </div>
                    


                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
