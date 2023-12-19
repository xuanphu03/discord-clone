import { Outlet } from 'react-router-dom'
import Navbar from './_components/navbar';
import Footer from './_components/footer';


export default function _layout() {


  return (
    <div className="w-screen text-lg overflow-x-hidden relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
