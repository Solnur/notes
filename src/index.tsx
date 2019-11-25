import React from 'react';
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import {routes} from 'src/router/routes';
import { AuthProvider } from 'src/components/auth';
import './index.css';

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </AuthProvider>
    , document.getElementById('root'));
