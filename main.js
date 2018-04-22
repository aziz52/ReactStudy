import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App.jsx';
import Button from './Button.jsx';
import Reuse from './Button.jsx';


ReactDOM.render(<App />,document.getElementById('app'));
// ReactDOM.render(<Button/>,document.getElementById('button'));
ReactDOM.render(<Reuse/>,document.getElementById('button'));
