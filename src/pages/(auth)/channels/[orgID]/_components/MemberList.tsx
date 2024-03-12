// import { useQuery } from 'react-query';
// import PopoverMember from './PopoverMember';
// import { groupBy } from 'lodash-es';
// import { getChannelMembers } from '@/apis/channels';
// import { useParams } from '@/router';

export default function MemberList() {
  // const { channelID, orgID } = useParams(`/channels/:orgID/:channelID`);
  // const { data } = useQuery(['members'], () => getChannelMembers(orgID, channelID));
  return (
    <div className="flex flex-col gap-8">
      {/* {Object.entries(groupBy(data?.data, 'category.name')).map(([category, members]) => (
        <div className="space-y-1" key={category}>
          <p className="font-medium uppercase text-xs">
            {category} - {members.length}
          </p>
          <div className="space-y-2">
            {members.map((member) => (
              <PopoverMember member={member} key={member.id} />
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
}
