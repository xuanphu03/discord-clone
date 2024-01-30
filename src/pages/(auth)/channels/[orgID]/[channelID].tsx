import { CATEGORIES } from '@/apis/CATEGRORIES';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import ChatList from '@/pages/(auth)/channels/[orgID]/_components/ChatList';
import MemberList from '@/pages/(auth)/channels/[orgID]/_components/MemberList';
import { useParams } from '@/router';
import { Bell, BellOff, Hash, HelpCircle, Inbox, Pin, Search, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import userRequest from '@/assets/svgs/userRequest.svg';
import cleanInbox from '@/assets/svgs/cleanInbox.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Channels() {
  const [mute, setMute] = useState(false);
  const [openMemberList, isOpenMemberList] = useState(true);
  const { channelID } = useParams('/channels/:orgID/:channelID');
  const channelIndex = Number(channelID) - 1;
  const nameChannel = CATEGORIES[0].channels[channelIndex]?.name;

  return (
    <>
      <header className="flex justify-between shadow-lg p-3 text-lg font-bold">
        <div className="flex items-center gap-2">
          <Hash className="w-4" />
          {nameChannel}
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-foreground/60 hover:text-foreground/80" onClick={() => setMute((e) => !e)}>
            {mute ? <BellOff /> : <Bell />}
          </div>

          <Popover>
            <PopoverTrigger className="[&_svg]:data-[state=open]:text-foreground text-foreground/60 hover:text-foreground/80 cursor-pointer">
              <Pin className="rotate-45" />
            </PopoverTrigger>
            <PopoverContent sideOffset={10} className="w-fit p-0">
              <div className="flex justify-between p-4">
                <p className="font-bold">Pinned Messages</p>
              </div>

              <div className="bg-primary pt-20 px-10 pb-5 flex flex-col justify-center items-center gap-2">
                <img src={cleanInbox} alt="Clean inbox" />
                <p className="font-bold">Nothing here yet</p>
                <p className="text-sm text-primary-foreground">
                  Come back for notifications on events, streams, and more.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <UsersRound
            className={cn(
              { 'text-foreground': openMemberList, 'text-foreground/60': !openMemberList },
              'hover:text-foreground/80 cursor-pointer'
            )}
            onClick={() => isOpenMemberList(!openMemberList)}
          />

          <div className="flex bg-third items-center">
            <Input className="bg-transparent h-5 w-32 font-normal focus:w-52" placeholder="Search" />
            <Search className="w-4 text-foreground/60" />
          </div>

          <Popover>
            <PopoverTrigger className="[&_svg]:data-[state=open]:text-foreground text-foreground/60 hover:text-foreground/80 cursor-pointer">
              <Inbox />
            </PopoverTrigger>
            <PopoverContent sideOffset={20} className="w-fit mr-10 p-0">
              <div className="flex justify-between p-4">
                <div className="flex gap-2">
                  <Inbox />
                  <h1 className="font-bold">Inbox</h1>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 rounded-md px-2 bg-secondary-foreground text-xs font-bold">
                        <img src={userRequest} width={15} alt="User request" />
                        <p>0</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Friend Request</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="bg-primary pt-20 px-10 pb-5 flex flex-col justify-center items-center gap-2">
                <img src={cleanInbox} alt="Clean inbox" />
                <p className="font-bold">Nothing here yet</p>
                <p className="text-sm text-primary-foreground">
                  Come back for notifications on events, streams, and more.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          <Link to="https://support.discord.com/hc/vi" target="_blank">
            <HelpCircle className="text-foreground/60 hover:text-foreground/90" />
          </Link>
        </div>
      </header>
      <div className="flex h-[calc(100vh-3.25rem)]">
        <div className="w-full pb-5 flex flex-col justify-between">
          <ChatList />
        </div>
        <div className={cn({ hidden: !openMemberList }, 'w-60 p-4 bg-third/70 flex-shrink-0')}>
          <MemberList />
        </div>
      </div>
    </>
  );
}
