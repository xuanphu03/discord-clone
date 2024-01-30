import { request } from "@/lib/request";

interface Channel {
  id: string;
  name: string;
}

export const getChannels = async (orgID: string) => {
  return request.get<Channel[]>(`orgs/${orgID}/channels`)
}