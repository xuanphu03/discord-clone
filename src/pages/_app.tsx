import { ORGS } from '@/apis/ORGS'
import OrgSidebar from '@/components/OrgSidebar'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (location.pathname === '/') {
      navigate(`/orgs/${ORGS[0].id}`);
    }
  }, [navigate, location]);
  return (
    <div className="flex h-screen">
      <OrgSidebar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
