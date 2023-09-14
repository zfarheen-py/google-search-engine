import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Stateprovider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapping our <App/> component with StateProvider */}
    {/* because we want to provide data to our <App/> component */}
    <Stateprovider initialState={initialState} reducer={reducer}>
      <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Stateprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
