'use strict';

import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function UseSpring() {

    const spring = useSpring({
        from: { top: '0px', number: 0 },
        to: { top: '450px', number: 450 },
        reset: true
    });

    // const [spring, set] = useSpring(() => ({
    //     from: { top: '0px', number: 0 },
    // }));

    // useEffect(() => {
    //     set({ top: '450px', number: 450 });
    // });

    return (
        <div className="container">
            <div className="x">
                <div className="line"></div>
            </div>
            <div className="y">
                <div className="line"></div>
            </div>
            <animated.div className="square" style={spring}>{spring.number}</animated.div>
        </div>
    );
}
