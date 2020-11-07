'use strict';

import React, { Component } from 'react';
import { Keyframes, animated, config } from 'react-spring/renderprops';
import delay from 'delay';

const Slots = Keyframes.Spring({

    // Single props
    show: { color: 'red' },
    // Chained animations (arrays)
    showAndHide: [{ color: 'red' }, { color: 'blue' }],
    // Functions with side-effects with access to component props
    wiggle: async (next) => {
        await next({ left: 100, from: { left: 0 }, config: config.wobbly });
        await delay(1000);
        await next({ left: 0, from: { left: 100 }, config: config.wobbly });
    }
});

const Function = Keyframes.Spring(async next => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        await next({
            from: { opacity: 0, width: 50, height: 50, background: 'black' },
            opacity: 1,
            width: 100,
            height: 100,
            background: 'orange',
        });
        await next({
            from: { left: '0%' },
            left: '90%',
            background: 'green',
        });
        next({
            from: { top: '0%' },
            top: '90%',
            background: 'plum',
            config: config.wobbly,
        });
        await delay(100); // don't wait for the animation above to finish, go to the next one in 0.1s
        await next({ left: '0%', background: 'pink' });
        await next({
            top: '0%',
            background: 'violet',
        });
        await next({
            opacity: 0,
            width: 40,
            height: 40,
            background: 'black',
        });
    }
});

export default class RenderKeyframes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 1,
            s: 'show'
        };
    }

    handleOnClick(val) {
        if (typeof (val) === 'number')
            this.setState({ type: val });
    }

    changeState() {
        const { s } = this.state;

        switch (s) {
            case 'show':
                this.setState({ s: 'showAndHide' });
                break;
            case 'showAndHide':
                this.setState({ s: 'wiggle' });
                break;
            case 'wiggle':
                this.setState({ s: 'show' });
                break;
            default:
                this.setState({ s: 'show' });
        }
    }

    render() {
        const { type } = this.state;
        return (
            <div>
                <a className="green" onClick={() => this.handleOnClick(1)}>use slots</a>
                <a className="green" onClick={() => this.handleOnClick(2)}>use function</a>

                <div className="container">
                    {
                        type === 1
                            ? (
                                <>
                                <Slots
                                    reset={true}
                                    state={this.state.s}
                                >
                                    {
                                        props => (
                                            <animated.div style={{ position: 'relative', ...props }} >
                                                Hello
     
                                            </animated.div>
                                        )
                                    }

                                </Slots>
                                <br />
                                <button onClick={() => this.changeState()}>{`Current state: ${this.state.s}`}</button>
                                </>
                            )
                            : (
                                <Function>
                                    {props => (
                                        <animated.div
                                            style={{ position: 'relative', borderRadius: '50%', ...props }}
                                        />
                                    )}
                                </Function>
                            )
                    }
                </div>
            </div>
        );
    }
}