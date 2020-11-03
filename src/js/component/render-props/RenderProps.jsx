'use strict';

import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RenderSpring from './widget/RenderSpring.jsx';
import RenderTrait from './widget/RenderTrait.jsx';
import RenderTransition from './widget/RenderTransition.jsx';
import RenderKeyframes from './widget/RenderKeyframes.jsx';

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <Link className="blue" to="/render-prop/Spring">Spring</Link>
                &nbsp;
                <Link className="blue" to="/render-prop/Trait">Trait</Link>
                &nbsp;
                <Link className="blue" to="/render-prop/Transition">Transition</Link>
                &nbsp;
                <Link className="blue" to="/render-prop/Keyframes">Keyframes</Link>

                <br />
                <Switch>
                    <Route path="/render-prop/Spring" component={RenderSpring} />
                    <Route path="/render-prop/Trait" component={RenderTrait} />
                    <Route path="/render-prop/Transition" component={RenderTransition} />
                    <Route path="/render-prop/Keyframes" component={RenderKeyframes} />
                </Switch>
            </div>
        );
    }
}
