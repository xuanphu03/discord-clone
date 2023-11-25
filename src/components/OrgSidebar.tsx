import { OrgSidebarProps } from '@/lib/type';
import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrgSidebar({ orgs }: OrgSidebarProps) {
  const navigate = useNavigate();
  const { orgID } = useParams('/orgs/:orgID/channels/:channelID');

  return (
    <div className="py-6 pr-4 space-y-4">
      {orgs.map((org) => (
        <div className="flex items-center gap-3 group">
          <div
            className={cn(
              { 'bg-primary': org.id === orgID, 'group-hover:h-5': org.id !== orgID },
              'h-14 w-1 rounded-e-3xl group-hover:bg-primary'
            )}
          />
          <img
            onClick={() => navigate(`/orgs/${org.id}`)}
            src={org.icon}
            key={org.id}
            alt={org.name}
            className={cn(
              { 'rounded-lg': org.id === orgID, 'rounded-full': org.id !== orgID },
              'w-14 h-14 cursor-pointer hover:rounded-lg'
            )}
          />
        </div>
      ))}
      <div className="pl-4">
        <div className="w-14 h-14 bg-primary-foreground text-green-500 rounded-full flex items-center justify-center cursor-pointer hover:rounded-lg hover:bg-green-500 hover:text-primary">
          <Plus className="group-hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
}
