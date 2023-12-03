import { ORGS } from '@/apis/ORGS'
import OrgSidebar from '@/components/OrgSidebar'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [location]);
  return (
    <div className="flex h-screen">
      <OrgSidebar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
