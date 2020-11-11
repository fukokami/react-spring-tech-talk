'use strict';


import React, { Component } from 'react';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';


export default class RenderParallax extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                    <ParallaxLayer offset={0} factor={1} style={{ backgroundColor: '#ffa5009c' }} />
                    <ParallaxLayer offset={1} factor={1} style={{ backgroundColor: 'red' }} />
                    <ParallaxLayer offset={2} factor={1} style={{ backgroundColor: 'green' }} />

                    <ParallaxLayer offset={0.5} speed={1} factor={1.5} style={{ backgroundColor: 'yellow', width: '50%' }} />
                    <ParallaxLayer offset={2.35} speed={1} factor={0.3} style={{ backgroundColor: 'blue', width: '30%', borderRadius: '50%', right: 333 }} />
                </Parallax>
            </div>
        );
    }
}