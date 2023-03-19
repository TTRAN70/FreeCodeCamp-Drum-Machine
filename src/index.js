import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const head = document.getElementsByTagName('HEAD')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap';
head.appendChild(link);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
