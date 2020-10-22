'use strict';

import React, { Component } from 'react';

import { Spring, config } from 'react-spring/renderprops';


export default class RenderSpring extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReserve: false,
        };
    }

    handleOnstart() {
        console.log('onStart');
    }

    handleOnRest() {
        console.log('onRest');
        this.setState({ isReserve: !this.state.isReserve });
    }

    handleOnFrame() {
        console.log('onFrame');
    }

    render() {
        return (
            <div className="container">
                <div className="x">
                    <div className="line"></div>
                </div>
                <div className="y">
                    <div className="line"></div>
                </div>
                <Spring
                    from={{ top: '0px', number: 0 }}
                    to={{ top: '900px', number: 900 }}
                    // config={config.wobbly}
                    // immediate={true}
                    reset={true}
                    reverse={this.state.isReserve}
                    onStart={this.handleOnstart.bind(this)}
                    onRest={this.handleOnRest.bind(this)}
                    onFrame={this.handleOnFrame.bind(this)}
                >
                    {props => <div className="square" style={props}>{Math.round(props.number)}</div>}
                </Spring>
            </div>
        );
    }
}
