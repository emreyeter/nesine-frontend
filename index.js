import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './src/App';

hydrateRoot(document.querySelector('#root'), <App />);
