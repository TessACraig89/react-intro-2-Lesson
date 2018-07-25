import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

{/*pass in data*/}
ReactDOM.render(
  <Hello name={"Nick"} age={24}/>,
  document.getElementById('root')
);
