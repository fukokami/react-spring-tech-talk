'use strict';

import React, { Component } from 'react';

import { Trail } from 'react-spring/renderprops';
export default class RenderTrait extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            items: ['item1', 'item2', 'item3', 'item4', 'item5']
        };
    }

    handleOnClick() {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        return (
            <div className="container"
            >
                <Trail
                    reverse={this.state.toggle}
                    initial={null}
                    items={this.state.items}
                    from={{ opacity: 0, x: 0 }}
                    to={{ opacity: this.state.toggle ? 1 : 0.25, x: this.state.toggle ? 0 : 100 }}>
                    {
                        (item) => ({ x, opacity }) =>
                            (<div
                                className="box"
                                onClick={this.handleOnClick.bind(this)}
                                style={{ opacity: opacity, transform: `translate3d(${x}%,0,0)` }}
                            >
                                {item}
                            </div>)
                    }

                </Trail>
            </div>
        );
    }
}
