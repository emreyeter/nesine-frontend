import React from 'react';

import Grid from './components/grid/Grid';
import Header from './components/header/Header';
import { BasketProvider } from './context/providers/BasketProvider';
import './main.css';

function App() {
  return (
    <BasketProvider>
      <Header />
      <Grid />
    </BasketProvider>
  );
}

export default App;
