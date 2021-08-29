import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

const init = () => {
  const target = document.querySelector('.app');
  ReactDOM.render(<App />, target)
}

init();