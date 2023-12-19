import { Hash, Volume2 } from "lucide-react";

export const CATEGORIES = [
  {
    id: 1,
    name: 'Text channels',
    channels: [
      {
        id: '1',
        icon: Hash,
        name: 'general',
      },
      {
        id: '2',
        icon: Hash,
        name: 'Music',
      },
    ],
  },
  {
    id: 2,
    name: 'Voice channels',
    channels: [
      {
        id: '3',
        icon: Volume2,
        name: 'general',
      },
      {
        id: '4',
        icon: Volume2,
        name: 'Music',
      },
    ],
  },
  {
    id: 3,
    name: 'Announcements',
    channels: [
      {
        id: '5',
        icon: Hash,
        name: 'Job',
      },
      {
        id: '6',
        icon: Hash,
        name: 'Learn',
      },
    ],
  },
  {
    id: 4,
    name: 'Class',
    channels: [
      {
        id: '7',
        icon: Hash,
        name: 'F0',
      },
      {
        id: '8',
        icon: Hash,
        name: 'F1',
      },
    ],
  },
];
