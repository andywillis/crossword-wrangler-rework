import { render } from 'preact';
// import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.css';

function getRoot() {
  return (
    <App />
  );
}

render(getRoot(), document.getElementById('root') as HTMLElement);
