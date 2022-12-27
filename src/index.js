import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateComponent } from './context/context';
import App2 from './accessMassiv/App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateComponent>
  </React.StrictMode>
);


