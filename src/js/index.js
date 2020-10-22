'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './component/App.jsx';

function render() {
    ReactDOM.render(
        (
            <HashRouter>
                <App />
            </HashRouter>
        ),
        document.getElementById('app')
    );
}

async function main() {
    render();
}

main();