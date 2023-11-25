import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import { Calendar, ChevronDown, Grip, Headphones, Home, Mic, Plus, Settings, Users } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ORGS } from '@/apis/ORGS';
import { CATEGORIES } from '@/apis/CATEGRORIES';

const HEADER = [
  {
    id: 1,
    name: 'Events',
    icon: Calendar,
  },
  {
    id: 2,
    name: 'Browse Channels',
    icon: Grip,
  },
  {
    id: 3,
    name: 'Members',
    icon: Users,
  },
];

export default function Org() {
  const { channelID, orgID } = useParams('/orgs/:orgID/channels/:channelID');
  const navigate = useNavigate();

  const navigateToChannel = (id: string) => {
    navigate(`/orgs/${orgID}/channels/${id}`);
    
  };

  const org = ORGS.find(org => org.id === orgID);

  return (
    <div className="w-full flex">
      <div className="bg-secondary/30 w-64 flex-shrink-0">
        <header className="shadow-lg p-3 flex items-center justify-between">
          <div className="flex gap-2 items-center text-lg">
            <Home />
            <div className="w-40">
              <h1 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">{org?.name}</h1>
            </div>
          </div>
          <ChevronDown />
        </header>
        <div className="h-3/4 overflow-y-auto">
          <div className="text-primary/60 px-2">
            {HEADER.map((header) => (
              <div className="px-3 py-2 flex gap-2 cursor-pointer hover:bg-foreground/10 rounded-sm" key={header.id}>
                <header.icon />
                <p>{header.name}</p>
              </div>
            ))}
          </div>
          <div className="px-2 mt-4 text-primary/60">
            <hr className="h-2 border-primary/60" />
            {CATEGORIES.map((category) => (
              <div key={category.id}>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <ChevronDown className="w-3" />
                    <h1 className="uppercase font-bold">{category.name}</h1>
                  </div>
                  <Plus className="w-5" />
                </div>
                <div className="space-y-2 mt-2">
                  {category.channels.map((channel) => (
                    <div
                      key={channel.id}
                      className={cn(
                        { 'bg-foreground/10 text-primary/90': channel.id === channelID },
                        'flex px-4 py-2 cursor-pointer hover:bg-foreground/10 rounded-sm'
                      )}
                      onClick={() => navigateToChannel(channel.id)}
                    >
                      <channel.icon className="w-4" />
                      <p className="px-2 font-medium">{channel.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-background/60 flex justify-between">
          <div>XunaFu Kuma.xp03</div>
          <div className="flex gap-1">
            <Mic />
            <Headphones />
            <Settings />
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary">
        <Outlet />
      </div>
    </div>
  );
}
