import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const http = require('http');

const server = http.createServer((req,res)=>{
    // Handle request and response
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
