import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

{/*pass in data*/}
ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
);
