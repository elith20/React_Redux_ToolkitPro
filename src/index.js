import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store/store';
import { Provider } from 'react-redux';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Registration/> */}
      {/* <Home/> */}
    </Provider>
  </React.StrictMode>
);
