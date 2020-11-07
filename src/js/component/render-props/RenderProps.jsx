'use strict';

import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RenderSpring from './widget/RenderSpring.jsx';
import RenderTrait from './widget/RenderTrait.jsx';
import RenderKeyframes from './widget/RenderKeyframes.jsx';

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <Link className="blue" to="/render-prop/useSpring">Spring</Link>
                &nbsp;
                <Link className="blue" to="/render-prop/useTrait">Trait</Link>
                &nbsp;
                <Link className="blue" to="/render-prop/useKeyframes">Keyframes</Link>

                <br />
                <Switch>
                    <Route path="/render-prop/useSpring" component={RenderSpring} />
                    <Route path="/render-prop/useTrait" component={RenderTrait} />
                    <Route path="/render-prop/useKeyframes" component={RenderKeyframes} />
                </Switch>
            </div>
        );
    }
}
