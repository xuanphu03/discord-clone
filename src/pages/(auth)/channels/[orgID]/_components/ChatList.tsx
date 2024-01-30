import { CATEGORIES } from '@/apis/CATEGRORIES';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useParams } from '@/router';
import { Gift, Hash, Plus, Slash, Smile, Sticker, Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const MESSAGES = [
  {
    id: 1,
    sender: {
      name: 'Inu Shiba',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5mtjxpAVAe11WGg2JNdR-imdm04QxHo3QA&usqp=CAU',
      color: 'red-500',
    },
    message: 'Đi đâu đấy?',
  },
  {
    id: 2,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Đánh cầu lông đê!!!',
  },
  {
    id: 3,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Ngủ luôn cũng được :))',
  },
  {
    id: 3,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Ngủ luôn cũng được :))',
  },
  {
    id: 3,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Ngủ luôn cũng được :))',
  },
  {
    id: 3,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Ngủ luôn cũng được :))',
  },
  {
    id: 3,
    sender: {
      name: 'XunaFu',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
      color: 'green-500',
    },
    message: 'Ngủ luôn cũng được :))',
  },
];

export default function ChatList() {
  const chatListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState(MESSAGES);

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current?.value.trim() !== '') {
      flushSync(() => {
        setMessage([
          ...message,
          {
            id: message.length + 1,
            sender: {
              name: 'XunaFu',
              avatar:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
              color: 'green-500',
            },
            message: inputRef.current!.value,
          },
        ]);
      });
      inputRef.current!.value = '';
      chatListRef.current?.scrollTo({
        top: chatListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const { channelID } = useParams('/channels/:orgID/:channelID');
  const channelIndex = Number(channelID) - 1;
  const nameChannel = CATEGORIES[0].channels[channelIndex]?.name;

  return (
    <>
      <div className="overflow-y-auto" ref={chatListRef}>
        {message.map((message) => (
          <div className="flex gap-4 my-3 px-5 py-1 hover:bg-hover" key={message.id}>
            <div>
              <img className="rounded-full" src={message.sender.avatar} alt={message.sender.name} width={40} />
            </div>
            <div>
              <p className={`text-${message.sender.color} font-bold`}>{message.sender.name}</p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mx-4 px-4 bg-input rounded-md">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-foreground/60 rounded-full flex-shrink-0 w-5 h-5 p-0 border-none hover:bg-foreground/90"
              variant="outline"
            >
              <Plus className="w-4 text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mb-3 ml-32">
            <DropdownMenuItem className="flex flex-col items-start gap-1">
              <div className="flex">
                <Upload className="mr-2 h-4 w-4" />
                <span className="text-primary-foreground">Upload a File</span>
              </div>
              <div className="text-xs flex gap-2">
                <p className="text-primary-foreground">Tip: Double click the</p>
                <Plus className="bg-primary-foreground rounded-full w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Hash className="mr-2 h-4 w-4" />
              <span className="text-primary-foreground">Create Thread</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="mr-2 h-4 w-4 bg-foreground flex items-center rounded-sm">
                <Slash className="h-3 text-primary" />
              </div>
              <span className="text-primary-foreground">Use Apps</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          className="bg-transparent text-base"
          ref={inputRef}
          onKeyUp={handleChange}
          placeholder={`Message #${nameChannel}`}
        />
        <div className="flex gap-2">
          <Gift />
          <Sticker />
          <Smile />
        </div>
      </div>
    </>
  );
}
