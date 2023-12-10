import { ORGS } from '@/apis/ORGS'
import OrgSidebar from '@/pages/_componnents/OrgSidebar'
import { getToken } from '@/lib/storage'
import { redirect } from '@/router'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export function Loader() {
  const isAuth = getToken()
  if (!isAuth) {
    return redirect('/login')
  }
  return null
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="flex h-screen">
      <OrgSidebar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
