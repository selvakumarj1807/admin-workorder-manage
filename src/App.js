import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import  Footer  from './components/Dashboard/adminDashboard/footer/Footer';

import BackToTop from './components/Dashboard/adminDashboard/backToTop/BackToTop';

import Header from './components/Dashboard/adminDashboard/Header';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <br></br>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
