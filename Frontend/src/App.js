import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import FirstPage from './components/layouts/FirstPage';
import Login from './components/auth/Login';
import AddUser from './components/users/AddUser';
import QuickPatientRegistration from './components/patient-registrations/QuickPatientRegistration';

import Feedback from './components/feedbacks/Feedback';
import DoctorRegistration from './components/doctor/DoctorRegistration';
import NextPatient from './components/doctor/NextPatient';
import NextPatientDetails from './components/doctor/NextPatientDetails';


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

                        <Route exact path="/feedbacks" component={ Feedback }/>

                        <Route exact path="/doctors/registration" component={ DoctorRegistration }/>

                        <Route exact path="/doctors" component={ NextPatient }/>

                        <Route exact path="/doctors/nextPatient" component={ NextPatientDetails } />

                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
