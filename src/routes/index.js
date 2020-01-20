import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AclRouter from 'react-acl-router';
import Main from '../screens/children';
import NotFound from '../screens/notfound';
import { isAuthenticated } from './../services/auth';
import { privateRoutes, publicRoutes } from './routes';

const Routes = () => {
    return (
        <BrowserRouter>
            <AclRouter
                authorities={isAuthenticated().role}
                authorizedRoutes={privateRoutes}
                authorizedLayout={Main}
                normalRoutes={publicRoutes}
                normalLayout={Main}
                notFound={NotFound}
            />
        </BrowserRouter>
    );
}

export default Routes;
