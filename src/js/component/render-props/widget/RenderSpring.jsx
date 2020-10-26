'use strict';

import React, { Component } from 'react';

import { Spring, config } from 'react-spring/renderprops';


export default class RenderSpring extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReserve: false,
            config: config.default
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

    handleOnClick(val) {
        switch (val) {
            case 1:
                this.setState({  config: config.default });
                break;
            case 2:
                this.setState({ config: config.gentle });
                break;
            case 3:
                this.setState({ config: { mass: 2.5, tension: 90, friction: 2.5 } });
                break;
            default:
                this.setState({ config: config.default });
                break;
        }
    }

    render() {
        return (
            <div>
                <a className="green" onClick={() => this.handleOnClick(1)}>config.default</a>
                <a className="green" onClick={() => this.handleOnClick(2)}>config.gentle</a>
                <a className="green" onClick={() => this.handleOnClick(3)}>config.custom</a>
                <span>{JSON.stringify(this.state.config)}</span>
                <div className="container">
                    <div className="x">
                        <div className="line"></div>
                    </div>
                    <div className="y">
                        <div className="line"></div>
                    </div>
                    <Spring
                        from={{ top: '0px', number: 0 }}
                        to={{ top: '450px', number: 450 }}
                        config={this.state.config}
                        // immediate={true}
                        reset={true}
                        // reverse={this.state.isReserve}
                        onStart={this.handleOnstart.bind(this)}
                        onRest={this.handleOnRest.bind(this)}
                        onFrame={this.handleOnFrame.bind(this)}
                    >
                        {props => <div className="square" style={props}>{props.number.toFixed(2)}</div>}
                    </Spring>
                </div>
            </div>
        );
    }
}
