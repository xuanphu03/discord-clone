import logo from '@/assets/svgs/logo.svg';
import bgBanner from '@/assets/images/bgBanner.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NAVLIST = [
  {
    id: 0,
    name: 'Download',
    path: '/download',
  },
  {
    id: 1,
    name: 'Nitro',
    path: '/nitro',
  },
  {
    id: 2,
    name: 'Discover',
    path: '/discover',
  },
  {
    id: 3,
    name: 'Safety',
    path: '/safety',
  },
  {
    id: 4,
    name: 'Support',
    path: '/support',
  },
  {
    id: 5,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 6,
    name: 'Careers',
    path: '/careers',
  },
];

export default function Main() {
  return (
    <div className="w-screen">
      <header className="bg-main w-full overflow-hidden relative">
        <nav className="max-w-6xl p-5 flex justify-between items-center mx-auto text-background font-medium">
          <img src={logo} alt="Logo discord" />
          <div className="space-x-8">
            {NAVLIST.map((item) => (
              <Link to={item.path}>{item.name}</Link>
            ))}
          </div>
          <Button>Login</Button>
        </nav>
        <div className="flex justify-center">
          <img className="max-w-none" src={bgBanner} alt="Background Banner" />
        </div>
        <div className="w-1/2 max-w-[48.75rem] absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-background text-center">
          <h1 className="text-8xl">Imagine a place...</h1>
          <p className="">
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a
            handful of friends can spend time together. A place that makes it easy to talk every day and hang out more
            often.
          </p>
        </div>
      </header>
    </div>
  );
}
