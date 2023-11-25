import { CATEGORIES } from "@/apis/CATEGRORIES";
import ChatList from "@/pages/orgs/[orgID]/channels/_components/ChatList";
import MemberList from "@/pages/orgs/[orgID]/channels/_components/MemberList";
import { useParams } from "@/router";
import { Frame, HelpCircle } from "lucide-react";

export default function Channels() {
  const { channelID } = useParams('/orgs/:orgID/channels/:channelID');
  const channelIndex = Number(channelID) - 1;
  const nameChannel = CATEGORIES[0].channels[channelIndex]?.name;
  return (
    <div className="">
      <header className="flex justify-between shadow-lg p-3 text-lg font-bold">
        <div className="flex items-center gap-2">
          <Frame className="w-4" />
          {nameChannel}
        </div>
        <div>
          <HelpCircle />
        </div>
      </header>
      <div className="flex h-[calc(100vh-3.25rem)]">
        <div className="w-full">
          <ChatList />
        </div>
        <div className="w-60 p-4 bg-primary-foreground/30 flex-shrink-0">
          <MemberList />
        </div>
      </div>
    </div>
  );
}
