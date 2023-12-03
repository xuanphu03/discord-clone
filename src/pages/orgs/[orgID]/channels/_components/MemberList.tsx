import PopoverMember from "./PopoverMember";

const CATEGORIES = [
  {
    id: 1,
    categoryName: 'Đà Nẵng',
    members: [
      {
        id: 1,
        displayName: 'Shin',
        userName: 'shinosuke123',
        avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
        color: '#2fffff',
      },
      {
        id: 2,
        displayName: 'XunaFu',
        userName: 'kuma.xp03',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
        color: '#2faf9f',
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Gamer',
    members: [
      {
        id: 1,
        displayName: 'Shin',
        userName: 'shinosuke123',
        avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
        color: '#56d6fd',
      },
      {
        id: 2,
        displayName: 'XunaFu',
        userName: 'kuma.xp03',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
        color: '#56d6fd',
      },
      {
        id: 2,
        displayName: 'ShibaInu',
        userName: 'akaimaru',
        avatar:
          'https://th.bing.com/th?q=HSL-35&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=strict&t=1&mw=247',
        color: 'red',
      },
    ],
  },
];

export default function MemberList() {
  return (
    <div className="flex flex-col gap-8">
      {CATEGORIES.map((category) => (
        <div className="space-y-1" key={category.id}>
          <p className="font-medium uppercase text-xs">{category.categoryName} - {category.members.length}</p>
          <div className="space-y-2">
            {category.members.map((member) => (
              <PopoverMember member={member} key={member.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
