import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/HomePage.css'
import '../components/SideBar'
import Sidebar from '../components/SideBar';
import NavBarErp from '../components/NavBarErp';

const HomePage = () => {
  return (
    <div>
      <NavBarErp />
      <Sidebar />
        <div>
            <h1>HomePage</h1>
        </div>
    </div>
  );
};

export default HomePage;