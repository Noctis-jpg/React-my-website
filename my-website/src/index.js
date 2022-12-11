import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import { AppRouter } from './routers/AppRouter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />,);reportWebVitals();
