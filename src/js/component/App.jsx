'use strict';


import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import RenderSpring from './render-props/widget/RenderSpring.jsx';
import RenderTrait from './render-props/widget/RenderTrait.jsx';
import RenderTransition from './render-props/widget/RenderTransition.jsx';
import RenderKeyframes from './render-props/widget/RenderKeyframes.jsx';

export default function App() {

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