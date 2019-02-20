import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../shared/routes';

declare global {
  interface Window {
    isServerRendered: () => boolean;
  }
}


export function render(dom: HTMLElement) {
  const ele = (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );

  if (window.isServerRendered && window.isServerRendered()) {
    return ReactDOM.hydrate(ele, dom);
  } else {
    return ReactDOM.render(ele, dom);
  }
}
