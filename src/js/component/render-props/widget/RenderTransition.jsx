'use strict';


import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';

export default class RenderTransition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [1, 2],
            isEdit: true
        };
    }

    addItem() {
        const { items } = this.state;
        items.push(items.length + 1);
        this.setState({ items });
    }

    deleteItem() {
        const { items } = this.state;
        this.setState({ items: items.slice(0, items.length - 1) });
    }

    render() {
        return (
            <div>
                <div style={{ margin: 30 }}>
                    <button onClick={() => this.addItem()}>Add</button>
                    <button onClick={() => this.deleteItem()}>Delete</button>
                </div>
                <div className="container">
                    <Transition
                        items={this.state.items}
                        initial={null}
                        from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                        enter={{ height: 50, opacity: 1, background: '#28d79f' }}
                        leave={{ height: 0, opacity: 0, background: '#c23369' }}
                        update={{ background: '#28b4d7' }}
                        trail={200}
                    >
                        {
                            (item) => props => {
                                return (
                                    <div className="todo" style={props}>
                                        {item}
                                    </div>
                                );
                            }
                        }
                    </Transition>
                </div>
            </div>
        );
    }
}
