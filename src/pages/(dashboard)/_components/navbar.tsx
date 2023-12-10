import { Link } from "react-router-dom";
import logo from '@/assets/svgs/logo.svg';
import { Button } from '@/components/ui/button';


export default function navbar() {
  const NAVLIST = [
    {
      id: '/download',
      name: 'Download',
    },
    {
      id: '/nitro',
      name: 'Nitro',
    },
    {
      id: '/discover',
      name: 'Discover',
    },
    {
      id: '/safety',
      name: 'Safety',
    },
    {
      id: '/support',
      name: 'Support',
    },
    {
      id: '/blog',
      name: 'Blog',
    },
    {
      id: '/careers',
      name: 'Careers',
    },
  ];
  
  return (
    <nav className="absolute z-10 top-4 px-4 left-1/2 translate-x-[-50%] w-full max-w-6xl flex justify-between items-center text-background font-bold text-base">
      <Link to="/">
        <img className="max-w-none" src={logo} alt="Logo discord" />
      </Link>
      <div className="space-x-8">
        {NAVLIST.map((item) => (
          <Link to={item.id} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
      <Button className="rounded-full text-foreground hover:text-main hover:shadow-lg">Login</Button>
    </nav>
  );
}
