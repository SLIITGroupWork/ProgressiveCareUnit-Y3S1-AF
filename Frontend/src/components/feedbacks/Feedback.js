import React, { Component } from 'react';

export default class Feedback extends Component {

    constructor() {
        super();

        this.state = {
            description: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        
        e.preventDefault();
    }

    render() {

        return (
            <div className="feedback">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">

                            <h1 className="display-4 text-center">Feedback</h1>
                            
                            <p className="lead text-center">Give us your compliments and complaints</p>
                            
                            <form onSubmit={ this.onSubmit }>
                                
                                <div className="form-group">
                                    <textarea className="form-control" rows="5"
                                        placeholder="Type here ..." name="description" 
                                        value={ this.state.description } 
                                        onChange={ this.onChange }/>
                                </div>
                                
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            
                            </form>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
