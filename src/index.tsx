import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasketContextProvider from './store/basket-context';

ReactDOM.render(<BasketContextProvider><App /></BasketContextProvider>, document.getElementById('root'));
