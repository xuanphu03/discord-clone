import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import usa from '@/assets/images/usa.png';
import vietnam from '@/assets/images/vietnam.png';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import logo from '@/assets/svgs/logo.svg';
import { Button } from '@/components/ui/button';

export default function footer() {
  return (
    <footer className="dark p-24 bg-primary text-foreground">
      <div className="mx-auto max-w-7xl ">
        <div className="flex justify-between">
          <div>
            <Select>
              <SelectTrigger className="bg-transparent border-none p-0">
                <SelectValue placeholder={'Change language'} />
              </SelectTrigger>
              <SelectContent className="text-foreground">
                <SelectItem value="english">
                  <div className="flex items-center gap-2">
                    <img width={25} src={usa} alt="America" />
                    <p>English, USA</p>
                  </div>
                </SelectItem>
                <SelectItem value="vietnamese">
                  <div className="flex items-center gap-2">
                    <img width={25} src={vietnam} alt="Việt Nam" />
                    <p>Tiếng Việt</p>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-4">
              <Twitter />
              <Instagram />
              <div className="flex items-end border border-foreground rounded">
                <Facebook className="h-5 w-6" />
              </div>
              <Youtube />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-14">
            <div className="text-base">
              <h2 className="text-main">Product</h2>
              <ul>
                <li>
                  <Link to="/download">Download</Link>
                </li>
                <li>
                  <Link to="/nitro">Nitro</Link>
                </li>
                <li>
                  <Link to="#">Status</Link>
                </li>
                <li>
                  <Link to="#">App Directory</Link>
                </li>
                <li>
                  <Link to="#">New Mobile Experience</Link>
                </li>
              </ul>
            </div>
            <div className="text-base">
              <h2 className="text-main">Company</h2>
              <ul>
                <li>
                  <Link to="/#">About</Link>
                </li>
                <li>
                  <Link to="/#">Jobs</Link>
                </li>
                <li>
                  <Link to="#">Brand</Link>
                </li>
                <li>
                  <Link to="#">Newsroom</Link>
                </li>
                <li>
                  <Link to="#">Fall Release</Link>
                </li>
              </ul>
            </div>
            <div className="text-base">
              <h2 className="text-main">Resources</h2>
              <ul>
                <li>
                  <Link to="/#">College</Link>
                </li>
                <li>
                  <Link to="/#">Support</Link>
                </li>
                <li>
                  <Link to="#">Safety</Link>
                </li>
                <li>
                  <Link to="#">Feedback</Link>
                </li>
                <li>
                  <Link to="#">StreamKit</Link>
                </li>
                <li>
                  <Link to="#">Creators</Link>
                </li>
                <li>
                  <Link to="#">Community</Link>
                </li>
                <li>
                  <Link to="#">Developers</Link>
                </li>
                <li>
                  <Link to="#">Gaming</Link>
                </li>
                <li>
                  <Link to="#">Official 3rd Party Merch</Link>
                </li>
              </ul>
            </div>
            <div className="text-base">
              <h2 className="text-main">Policies</h2>
              <ul>
                <li>
                  <Link to="/#">Terms</Link>
                </li>
                <li>
                  <Link to="/#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Cookie Settings</Link>
                </li>
                <li>
                  <Link to="#">Guidelines</Link>
                </li>
                <li>
                  <Link to="#">Acknowledgements</Link>
                </li>
                <li>
                  <Link to="#">Licenses</Link>
                </li>
                <li>
                  <Link to="#">Company Information</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-main h-1" />
        <div className="flex justify-between">
          <img src={logo} alt="logo Discord" />
          <Button className="bg-main rounded">Open Discoed</Button>
        </div>
      </div>
    </footer>
  );
}
