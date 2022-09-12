import Home from './src/components/Home';
import {store} from './src/store';
import {Provider} from 'react-redux';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default App;
