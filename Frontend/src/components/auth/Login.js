import React, { Component } from 'react';
import { Redirect } from 'react-router'

import PCUService from '../../shared/services/pcu.service';
import AuthSerive from '../../shared/services/auth.service';
import DangerTip from '../message-tips/DangerTip';

export default class Login extends Component {

    constructor() {
        super();

        this.authSerive = new AuthSerive();
        this.pcuService = new PCUService();

        this.state = {
            username: '',
            password: '',
            invalidCredentials: false,
            isLoggedIn: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        if (this.authSerive.isLoggedIn) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        const loginRequest = {
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }

        this.pcuService.userLogin(loginRequest).then(loginResponse => {
            
            if (loginResponse.isSuccess) {
                window.location.href = '/';
            }
            else {
                this.setState({ password: '', invalidCredentials: true });
            }
        });
    }

    render() {

        if (this.state.isLoggedIn) {
            return <Redirect to="/" push={true} />
        }
      
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-4 text-center">Sign In</h1>

                            <p className="lead text-center">Login to Progressive Care Unit account</p>

                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input type="username" className="form-control form-control-lg"
                                        placeholder="Username" name="username"
                                        value={this.state.username}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                        placeholder="Password" name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                </div>

                                <input type="submit" className="btn btn-info btn-block mt-4" />

                            </form>


                            {
                                this.state.invalidCredentials ? <DangerTip title="Invalid Credentials" description="Invalid username or password. Please try again" /> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
