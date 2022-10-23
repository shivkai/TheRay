import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <GoogleOAuthProvider clientId={"114250867045-h3jlop0n66mt8o3chpikiqq1eitkte9v.apps.googleusercontent.com"}>
   <BrowserRouter>
   <App />
   </BrowserRouter>
   // </GoogleOAuthProvider>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
