'use strict';

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import UseSpring from './widget/UseSpring.jsx';
import UseTrait from './widget/UseTrait.jsx';

export default function Hook() {

    return (
        <div>

            <Link className="blue" to="/hook/useSpring">useSpring</Link>
            &nbsp;
            <Link className="blue" to="/hook/useTrait">useTrait</Link>

            <br />
            <Switch>
                <Route path="/hook/useSpring" component={UseSpring} />
                <Route path="/hook/useTrait" component={UseTrait} />
            </Switch>
        </div>
    );
}