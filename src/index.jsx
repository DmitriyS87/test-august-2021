import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
// import { convertToJSON } from './utils/convertCSV';
import { configure } from 'mobx';
import { StylesProvider } from '@material-ui/core/styles';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const Root = () => (
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>
);

const init = () => {
  const target = document.querySelector('.app');
  ReactDOM.render(<Root />, target);
};

init();
