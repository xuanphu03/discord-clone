import { Link } from "react-router-dom";
import logo from '@/assets/svgs/logo.svg';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";


export default function Navbar() {
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
      <div className="md:block space-x-8 hidden">
        {NAVLIST.map((item) => (
          <Link to={item.id} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <Button className="rounded-full text-foreground hover:text-main hover:shadow-lg">
          <Link to="/login">Login</Link>
        </Button>

        <Drawer>
          <DrawerTrigger>
            <Menu className="w-10 h-10 md:hidden" />
          </DrawerTrigger>
          <DrawerContent className="w-full">
            <div className="flex justify-between mx-5">
              <Link to="/">
                <img className="max-w-none" src={logo} alt="Logo discord" />
              </Link>
              <DrawerClose className="">
                <X className="w-5 h-5" />
              </DrawerClose>
            </div>
            {NAVLIST.map((item) => (
              <Link to={item.id} key={item.id}>
                {item.name}
              </Link>
            ))}
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
