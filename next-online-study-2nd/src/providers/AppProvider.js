// src/providers/AppProvider.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { Provider as ReduxProvider } from 'react-redux';
// import { QueryClientProvider } from 'react-query';
// import store from '../store';
// import queryClient from '../queryClient';

const AppProvider = ({ children }) => {
  return (
    /* <ReduxProvider store={store}>
       <QueryClientProvider client={queryClient}> */
        <ChakraProvider>
          {children}
        </ChakraProvider>
    /*   </QueryClientProvider>
     </ReduxProvider> */
  );
};

export default AppProvider;