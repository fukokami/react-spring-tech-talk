'use strict';


import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';

export default class RenderTransition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ['1', '2'],
            isEdit: true
        };
    }

    addItem() {
        const items = this.state.items;
        items.push(this.state.items.length + 1);
        this.setState({ items });
    }

    deleteItem() {
        const items = this.state.items;
        items.pop();
        this.setState({ items });
    }

    render() {
        return (
            <div>
                <div style={{ margin: 30 }}>
                    <button onClick={() => this.addItem()}>Add</button>
                    <button onClick={() => this.deleteItem()}>Delete</button>
                </div>
                <Transition
                    items={this.state.items}
                    initial={null}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    trail={200}
                >
                    {
                        (item, state) => props => {
                            console.log(state);
                            return (
                                <div className="todo" style={props}>
                                    {item}
                                </div>
                            );
                        }
                    }

                </Transition>
            </div>
        );
    }
}
