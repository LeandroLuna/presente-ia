import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './views/Home';
import { GiftsProvider } from './contexts/gifts';

function App() {
  function AppProviders({ children }) {
    return (
      <ChakraProvider>
        <GiftsProvider>{children}</GiftsProvider>
      </ChakraProvider>
    );
  }

  return (
    <AppProviders>
        <Home/>
    </AppProviders>
  );
}

export default App;
