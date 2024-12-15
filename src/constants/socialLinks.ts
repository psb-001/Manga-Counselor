import { LucideIcon, Twitter, Github, Youtube } from 'lucide-react';

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
    href: 'https://twitter.com/mangahub',
    japanese: 'ツイッター'
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/mangahub',
    japanese: 'ギットハブ'
  },
  { 
    icon: Twitter, // Using Twitter icon for Bluesky as it's similar
    label: 'Bluesky', 
    href: 'https://bsky.app/profile/mangahub.bsky.social',
    japanese: 'ブルースカイ'
  }
 
];