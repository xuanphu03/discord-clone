import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import { Calendar, ChevronDown, Grip, Headphones, Home, Mic, Plus, UserRoundPlus, Users } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ORGS } from '@/apis/ORGS';
import { CATEGORIES } from '@/apis/CATEGRORIES';
import SettingModal from './_components/SettingModal';

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
  const { channelID, orgID } = useParams('/orgs/:orgID/:channelID');
  const navigate = useNavigate();

  const navigateToChannel = (id: string) => {
    navigate(`/orgs/${orgID}/${id}`);
    
  };

  const org = ORGS.find(org => org.id === orgID);

  return (
    <div className="w-full flex">
      <div className="relative bg-primary w-64 flex-shrink-0">
        <header className="shadow-lg p-3 flex items-center justify-between">
          <div className="flex items-center text-lg">
            <div className="flex gap-2 w-40">
              <Home />
              <h1 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">{org?.name}</h1>
            </div>
          </div>
          <ChevronDown />
        </header>
        <div className="h-[calc(100%-6.5rem)] overflow-y-auto text-primary-foreground">
          <div className="px-2">
            {HEADER.map((header) => (
              <div className="px-3 py-2 flex gap-2 cursor-pointer hover:bg-hover rounded-sm" key={header.id}>
                <header.icon />
                <p>{header.name}</p>
              </div>
            ))}
          </div>
          <div className="px-2 mt-4">
            <hr className="h-2 border-border" />
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
                        { 'bg-active text-foreground': channel.id === channelID },
                        'flex justify-between px-4 py-2 cursor-pointer group hover:bg-hover rounded-sm'
                      )}
                      onClick={() => navigateToChannel(channel.id)}
                    >
                      <div className="flex">
                        <channel.icon className="w-4" />
                        <p className="px-2 font-medium">{channel.name}</p>
                      </div>
                      <UserRoundPlus className={cn({ 'hidden': channel.id !== channelID }, 'group-hover:block')} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full px-4 py-2 bg-third flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU"
              alt="avatar"
              width={35}
            />
            <div>
              <p className="text-sm">XunaFu</p>
              <p className="text-xs">@kuma.xp03</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Mic className="w-5" />
            <Headphones className="w-5" />
            <SettingModal />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
