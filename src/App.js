import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Header from './components/Dashboard/adminDashboard/Header';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Sidebar />

    </BrowserRouter>
  );
}

export default App;
