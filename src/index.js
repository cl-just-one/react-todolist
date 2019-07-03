import React from 'react';
import ReactDOM from 'react-dom';

// import './Transtion.css'

import './index.css';
import App from './App';

// import Transtion from './Transtion'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Transtion />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
