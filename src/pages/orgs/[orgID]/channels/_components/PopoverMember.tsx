import Avatar from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User } from "@/types/user";

interface Props {
  member: User
}

export default function PopoverMember({ member }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="px-2 py-1 flex gap-2 items-center hover:bg-hover rounded-md" key={member.id}>
          <Avatar src={member.avatar} alt={member.name} />
          <p style={{ color: member.color }}>{member.name}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent side="left" className="mr-5 w-80">
        {member.name}
      </PopoverContent>
    </Popover>
  );
}
