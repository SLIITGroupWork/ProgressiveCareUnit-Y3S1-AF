import React, { Component } from 'react'

export default class DangerTip extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: props.title,
            description: props.description
        };
    }

    render() {
        return (
            <div className="alert alert-danger mt-2">
                <strong>{this.state.title}</strong> {this.state.description}.
            </div>
        );
    }
}
