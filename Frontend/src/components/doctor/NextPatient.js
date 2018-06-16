import React, { Component } from 'react'

export default class NextPatient extends Component {

    constructor() {
        super();

        this.state = {
            status: ''
        }

        // this.onClick = this.onClick.bind(this);
    }

    changeStatus() {

        this.setState({
            status : 'RESTING'
        });
    }

    getNextPatient() {

    }

    render() {

        return (
            <div className="next-patient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-5 text-center mt-3">Next Patient</h1>

                            <p className="lead text-center mb-5">Next Patient is waiting for you </p>

                            <div className="col-lg mt-5">
                                <button className="btn-lg btn-primary btn-block" onClick={this.getNextPatient}>Next Patient</button>
                            </div>
                            
                            <div className="col-lg mt-5">
                                <button className="btn-lg btn-danger btn-block" onClick={this.changeStatus}>Rest</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
