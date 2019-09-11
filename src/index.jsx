import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';

import Container from './Container';
import theme from './styles/theme';
import './styles/global.css';
import store from './redux/store';

function App() {
    return (
        <ReduxProvider store={store}>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className='App-header' >
                        <Container />
                    </div>
                </MuiThemeProvider>
            </Router>
        </ReduxProvider>
    );
}

export default App;
