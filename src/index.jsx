import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
// import { convertToJSON } from './utils/convertCSV';

const init = () => {
  // convertToJSON('../src/mocks/crocs_data.csv');
  const target = document.querySelector('.app');
  ReactDOM.render(<App />, target);
};

init();
