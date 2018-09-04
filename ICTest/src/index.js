import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auction from './components/Auction'
import Dashboard from './components/Dashboard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
