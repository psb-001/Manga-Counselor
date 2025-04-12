import { DivideIcon as LucideIcon, Twitter, Github, Youtube, MessagesSquare } from 'lucide-react';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { BlueskyIcon } from '../components/icons/BlueskyIcon';

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  japanese: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    icon: Twitter, 
    label: 'Twitter', 
    href: 'https://twitter.com/mangacounselor',
    japanese: 'ツイッター'
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/mangacounselor',
    japanese: 'ギットハブ'
  },
  { 
    icon: BlueskyIcon,
    label: 'Bluesky', 
    href: 'https://bsky.app/profile/mangacounselor.bsky.social',
    japanese: 'ブルースカイ'
  },
  { 
    icon: TelegramIcon,
    label: 'Telegram',
    href: 'https://t.me/mangacounselor',
    japanese: 'テレグラム'
  },
  {
    icon: MessagesSquare,
    label: 'Discord',
    href: 'https://discord.gg/mangacounselor',
    japanese: 'ディスコード'
  }
];