import { request } from "@/lib/request";

interface Channel {
  id: string;
  name: string;
}

export const getChannels = async (orgID: string) => {
  return request.get<Channel[]>(`orgs/${orgID}/channels`)
}

interface Member {
  displayName: string;
  username: string;
  avatar: string;
  memberSince: string;
  joinedDiscord: string;
  joinMethod: string;
  roles: string[];
}

export const getChannelMembers = async (orgID: string, channelID: string) => {
  return request.get<Member[]>(`/orgs/${orgID}/channels/${channelID}/members`)
}