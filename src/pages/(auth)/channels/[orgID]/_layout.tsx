// import { Link, useParams } from '@/router';
import {
  Calendar,
  ChevronDown,
  Grip,
  Headphones,
  Home,
  Mic,

  UsersRound,
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import SettingModal from './_components/SettingModal';
import { useState } from 'react';
import deafen from '@/assets/svgs/deafen.svg';
import mute from '@/assets/svgs/mute.svg';

export default function Org() {
  // const { channelID, orgID } = useParams('/channels/:orgID/:channelID');
  // const navigate = useNavigate();
  const [unMute, setUnMute] = useState(true);
  const [unDeafen, setUnDeafen] = useState(true);
  const [voice, setVoice] = useState(true);

  // const navigateToChannel = (id: string) => {
  //   navigate(`/channels/${orgID}/${id}`);
  // };
  console.log();

  const handleMute = () => {
    setVoice((voice) => !voice);
    if (!unDeafen) {
      setUnMute((mute) => !mute);
      setUnDeafen((deafen) => !deafen);
      setVoice((voice) => !voice);
    } else {
      setUnMute((mute) => !mute);
    }
  };

  const handleDeafen = () => {
    if (!voice) {
      setUnDeafen((deafen) => !deafen);
    } else {
      setUnMute((mute) => !mute);
      setUnDeafen((deafen) => !deafen);
    }
  };

  return (
    <div className="flex">
      <div className="relative bg-primary w-64 flex-shrink-0">
        <header className="shadow-lg p-3 flex items-center justify-between">
          <div className="flex items-center text-lg">
            <div className="flex gap-2 w-40">
              <Home />
              <h1 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {/* {org?.name} */}
              </h1>
            </div>
          </div>
          <ChevronDown />
        </header>
        <div className="h-[calc(100%-6.5rem)] overflow-y-auto text-primary-foreground">
          <div className="px-2">
            <div className="px-3 py-2 flex gap-2 cursor-pointer hover:bg-hover rounded-sm">
              <Calendar />
              <p>Events</p>
            </div>

            <div className="px-3 py-2 flex gap-2 cursor-pointer hover:bg-hover rounded-sm">
              <Grip />
              <p>Browse Channels</p>
            </div>

            {/* <Link
              to="/channels/:orgID/member-safety"
              params={{ orgID }}
              className="px-3 py-2 flex gap-2 cursor-pointer hover:bg-hover rounded-sm"
            >
              <UsersRound />
              <p>Members</p>
            </Link> */}
          </div>
          <div className="px-2 mt-4">
            <hr className="h-2 border-border" />
            {/* {org?.categories.map((category) => (
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
                        {
                          'bg-active text-foreground': channel.id === channelID,
                        },
                        'flex justify-between px-4 py-2 cursor-pointer group hover:bg-hover rounded-sm'
                      )}
                      onClick={() => navigateToChannel(channel.id)}
                    >
                      <div className="flex">
                        <channel.icon className="w-4" />
                        <p className="px-2 font-medium">{channel.name}</p>
                      </div>
                      <UserRoundPlus
                        className={cn(
                          { hidden: channel.id !== channelID },
                          'group-hover:block'
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
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
            <div onClick={handleMute}>
              {unMute ? <Mic className="w-5" /> : <img src={mute} />}
            </div>

            <div onClick={handleDeafen}>
              {unDeafen ? (
                <Headphones className="w-5" />
              ) : (
                <img src={deafen} alt="Deafen" />
              )}
            </div>
            <SettingModal />
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-5.5rem-16rem)]">
        <Outlet />
      </div>
    </div>
  );
}
