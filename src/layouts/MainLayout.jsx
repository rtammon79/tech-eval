//import outlet to render all children route's elements
//that get applied in the main (App.jsx)
import { Outlet } from 'react-router-dom';
//import navbar here so that it will be in the Parent route and displayed on all pages
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default MainLayout;
