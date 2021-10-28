import './App.scss';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './context/auth';
import { Home } from './pages';
import { ROUTES } from './utils/constants';

function App(): React.ReactElement {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <div className="App">
                        <Route path={ROUTES.HOME} component={Home} exact />
                    </div>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
