import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SiteRoutes from './siteRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SiteRoutes />
  </React.StrictMode>
);

