import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, useParams } from '@/router';
import { HelpCircle, Inbox, UsersRound } from 'lucide-react';
import userRequest from '@/assets/svgs/userRequest.svg';
import cleanInbox from '@/assets/svgs/cleanInbox.svg';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { useQuery } from 'react-query';
import { getOrgMembers } from '@/apis/channels';
import { useLocation } from 'react-router-dom';

export default function MemberSafety() {
  const { orgID } = useParams('/channels/:orgID/member-safety');
  const location = useLocation();
  const { data: memberResult } = useQuery(['members'], () => getOrgMembers(orgID));
  return (
    <>
      <header className="flex justify-between shadow-lg p-3 text-lg font-bold">
        <div className="flex items-center gap-2">
          <UsersRound className="w-4" />
          Members
        </div>
        <div className="flex gap-3 items-center">
          {location.state?.channel && (
            <Link
              to="/channels/:orgID/:channelID"
              params={{ orgID: orgID, channelID: location.state.channel.id }}
              className="text-xs text-white border border-gray-300 p-2"
            >
              Return to {location.state.channel.name}
            </Link>
          )}

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

          <div>
            <HelpCircle className="text-foreground/60 hover:text-foreground/90" />
          </div>
        </div>
      </header>
      <div className="bg-secondary h-[calc(100%-3.25rem)] p-7">
        <div className="bg-primary rounded-lg">
          <div className="p-5">
            <h1 className="font-bold">Recent Members</h1>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="uppercase text-2.75 font-bold">
                <TableHead className="flex items-center gap-5">
                  <Checkbox className="outline outline-primary-foreground outline-1 data-[state=checked]:bg-main data-[state=checked]:text-white" />
                  Name
                </TableHead>
                <TableHead>Member since</TableHead>
                <TableHead>Joined discord</TableHead>
                <TableHead>Join method</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Signals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {memberResult?.data?.map((member) => (
                <TableRow key={member.id} className="">
                  <TableCell className="flex items-center gap-5">
                    <Checkbox className="outline outline-primary-foreground outline-1 data-[state=checked]:bg-main data-[state=checked]:text-white" />
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center">
                        <img src={member.avatar} alt={member.displayName} />
                      </div>
                      <div>
                        <p className="text-base">{member.displayName}</p>
                        <p className="text-xs">{member.username}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.memberSince}</TableCell>
                  <TableCell>{member.joinedDiscord}</TableCell>
                  <TableCell>{member.joinMethod}</TableCell>
                  <TableCell>{member.roles}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
