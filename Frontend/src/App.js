import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import FirstPage from './components/layouts/FirstPage';
import Login from './components/auth/Login';
import AddUser from './components/users/AddUser';
import QuickPatientRegistration from './components/patient-registrations/QuickPatientRegistration';

//import PrescriptionList from './components/Prescription/prescriptionList';
import AddBill from './components/Bill/billNew';
import ViewBill from './components/Bill/billView';
import SearchBill from './components/Bill/billSearch';
import NewPrescription from './components/Prescription/prescriptionNew';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    
                    <Route exact path="/" component={ FirstPage } />

                    <div className="container">

                        <Route exact path="/login" component={ Login }/>

                        <Route exact path="/user/add" component={ AddUser }/>

                        <Route exact path="/quick-patient-resitration" component={ QuickPatientRegistration }/>

                        <Route exact path="/bill/new" component={ AddBill } />

                        <Route exact path="/bill/view" component={ ViewBill } />
                        
                        <Route exact path="/bill/search" component={ SearchBill } />
                        <Route exact path="/prescription/new" component={ NewPrescription } />

                    </div>
                    


                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
