import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Explore from './Pages/Explore';
import Health from './Pages/Health';
import Jobs from './Pages/Jobs';
import Policies from './Pages/Policies';
import Community from './Pages/Community';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Explore />} /> 
      <Route path="health" element={<Health />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="policies" element={<Policies />} />
      <Route path="community" element={<Community />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
