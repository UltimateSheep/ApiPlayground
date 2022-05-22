import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App';
// routes
import Layout from './Routes/Pages/Layout';
import Doc from './Routes/Pages/Doc';
import Admin from './Routes/Pages/Admin';
import RobloxApi from './Routes/Api/Js/RobloxApi';
import RobloxUsername from './Routes/Api/Components/RobloxApi/RobloxUsername';
import CovidThailand from './Routes/Api/Js/CovidThailand';
import TodayCovid from './Routes/Api/Components/CovidTh/TodayCovid'
import TodayCovidProvinces from './Routes/Api/Components/CovidTh/TodayCovidProvinces';
import Covid from './Routes/Api/Js/Covid';
import CovidWorld from './Routes/Api/Components/Covid/CovidWorld'
import CovidUs from './Routes/Api/Components/Covid/CovidUs'
import CovidSearch from './Routes/Api/Components/Covid/CovidSearch';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path='doc' element={<Doc />} />
          <Route path='admin' element={<Admin />} />
          {/* Api pages */}
          <Route path="covid-th" element={<CovidThailand />}>
            <Route path='today' element={<TodayCovid />} />
            <Route path='today-provinces' element={<TodayCovidProvinces />} />
          </Route>
          <Route path="covid" element={<Covid />}>
            <Route path="today" element={<CovidWorld />} />
            <Route path="today-states" element={<CovidUs />} />
            <Route path="today-state" element={<CovidSearch />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
