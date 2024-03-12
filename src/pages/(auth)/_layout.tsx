import OrgSidebar from '@/pages/_components/OrgSidebar';
import { getToken } from '@/lib/storage';
import { redirect } from '@/router';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getOrgs } from '@/apis/orgs';

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect('/login');
  }
  return null;
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { data: orgs } = useQuery({
    queryKey: ['orgs'],
    queryFn: () => getOrgs(),
  });

  return (
    <div className="flex h-screen">
      <OrgSidebar orgs={orgs ?? []} />
      <Outlet />
    </div>
  );
}
