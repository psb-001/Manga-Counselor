import { LucideIcon, Twitter, Github, Youtube } from 'lucide-react';
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
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/mangacounselor',
  },
  { 
    icon: BlueskyIcon,
    label: 'Bluesky', 
    href: 'https://bsky.app/profile/mangacounselor.bsky.social',
  },
  { 
    icon: TelegramIcon,
    label: 'Telegram',
    href: 'https://t.me/mangacounselor',
  }
];