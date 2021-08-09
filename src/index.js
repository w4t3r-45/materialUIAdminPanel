import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import App from './App';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App /> </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
