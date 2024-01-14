import { Outlet } from 'react-router-dom';
import Navbar from './_components/navbar';
import Footer from './_components/footer';
import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="w-screen text-lg overflow-x-hidden relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
