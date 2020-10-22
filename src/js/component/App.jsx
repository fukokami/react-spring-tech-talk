'use strict';


import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Hook from './hooks/Hook.jsx';
import RenderProps from './render-props/RenderProps.jsx';

export default function App() {

    return (
        <div>

            <Link className="red" to="/hook">Hook</Link>
            &nbsp;
            <Link className="red" to="/render-prop">RenderProps</Link>

            <br/>
            <Switch>
                <Route path="/hook" component={Hook}/>
                <Route path="/render-prop" component={RenderProps}/>
            </Switch>
        </div>
    );
    
}