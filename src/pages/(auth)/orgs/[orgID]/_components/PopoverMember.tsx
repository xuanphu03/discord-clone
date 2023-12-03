import { ORGS } from '@/apis/ORGS';
import Avatar from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { User } from '@/types/user';
import mutualFriends from '@/assets/svgs/mutualFriends.svg';
import iconDiscord from '@/assets/svgs/iconDiscord.svg';
import { Dot } from 'lucide-react';
import { useParams } from '@/router';
import { Input } from '@/components/ui/input';

interface Props {
  member: User;
}

export default function PopoverMember({ member }: Props) {
  const { orgID } = useParams('/orgs/:orgID/channels/:channelID');
  const orgIndex = Number(orgID) - 1;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="px-2 py-1 flex gap-2 items-center hover:bg-hover rounded-md" key={member.id}>
          <Avatar src={member.avatar} alt={member.displayName} />
          <p style={{ color: member.color }}>{member.displayName}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent side="left" className="mr-5 w-80 p-0 pt-14 relative" style={{ backgroundColor: member.color }}>
        <div className="group absolute flex justify-center items-center top-2 left-4 bg-primary rounded-full w-24 h-24">
          <img className="object-cover w-20 h-20 rounded-full" src={member.avatar} alt={member.displayName} />
          <Dialog>
            <DialogTrigger
              asChild
              className="absolute w-20 h-20 rounded-full items-center justify-center uppercase hidden group-hover:flex group-hover:bg-hover/60"
            >
              <p className="text-[0.625rem] font-bold">View profile</p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div>
                <div className="w-full h-14 absolute rounded-t-lg" style={{ backgroundColor: member.color }} />
                <div className="absolute flex justify-center items-center top-2 left-4 bg-primary rounded-full w-24 h-24">
                  <img className="object-cover w-20 h-20 rounded-full" src={member.avatar} alt={member.displayName} />
                </div>
              </div>
              <div className="bg-primary p-4 pt-28 sm:rounded-lg">
                <div className="bg-black/70 p-2 rounded-md min-h-[257px]">
                  <div>
                    <p className="text-sm font-bold">{member.displayName}</p>
                    <p className="text-xs text-primary-foreground">{member.userName}</p>
                  </div>
                  <Tabs defaultValue="userInfo">
                    <TabsList>
                      <TabsTrigger value="userInfo">User Info</TabsTrigger>
                      <TabsTrigger value="marualServers">Matual Servers</TabsTrigger>
                      <TabsTrigger value="marualFriends">Matual Friends</TabsTrigger>
                    </TabsList>
                    <hr className="-mt-1 mb-4" />
                    <TabsContent value="userInfo" className="space-y-4 px-4 mt-3">
                      <div className="space-y-1">
                        <p className="uppercase font-bold text-xs">Discord member since</p>
                        <p className="text-xs text-primary-foreground">Mar 11, 2020</p>
                      </div>
                      <div className="space-y-1">
                        <p className="uppercase font-bold text-xs">Note</p>
                        <Textarea
                          className="bg-transparent p-0 placeholder:text-xs placeholder:text-primary-foreground"
                          placeholder="Click to add a note"
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="marualServers">
                      <div className="flex h-36 px-2 flex-col overflow-y-auto">
                        {ORGS.map((org) => (
                          <div
                            key={org.id}
                            className="flex p-2 gap-3 items-center hover:bg-hover rounded-lg cursor-pointer"
                          >
                            <img
                              className="object-cover h-10 w-10 flex items-center rounded-lg"
                              src={org.icon}
                              alt={org.name}
                            />
                            <p>{org.name}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="marualFriends" className="m-2">
                      <div className="flex flex-col items-center">
                        <img width={200} src={mutualFriends} alt="Mutual Friends" />
                        <p className="uppercase text-xs">No friends in common</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="bg-primary p-4 pt-14">
          <div className="bg-black/70 space-y-2 p-4">
            <div>
              <p className="font-bold">{member.displayName}</p>
              <p className="text-sm">{member.userName}</p>
            </div>
            <hr />
            <div className="space-y-3 pb-5">
              <div className="space-y-1">
                <p className="uppercase text-xs font-bold">Member since</p>
                <div className="flex items-center">
                  <div className="flex gap-1">
                    <img width={15} src={iconDiscord} alt="icon discord" />
                    <p className="text-xs">Apr 14, 2020</p>
                  </div>
                  <Dot />
                  <div className="flex gap-1">
                    <img className="rounded-full w-4 h-4" src={ORGS[orgIndex].icon} alt="icon discord" />
                    <p className="text-xs">Nov 23, 2023</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="uppercase text-xs font-bold">roles</p>
                <div className="flex gap-1">
                  <div className="w-fit py-1 px-2 flex items-center gap-1 bg-secondary-foreground text-xs rounded-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p>Học viên</p>
                  </div>

                  <div className="w-fit p-1 flex items-center gap-1 bg-secondary-foreground text-xs rounded-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <p>F2</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="uppercase text-xs font-bold">Note</p>
                <Input className="bg-transparent text-xs h-5 p-0" placeholder="Click to add a note" />
              </div>
            </div>
            <Input className="border bg-transparent rounded-sm" placeholder={`Message @${member.displayName}`} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
