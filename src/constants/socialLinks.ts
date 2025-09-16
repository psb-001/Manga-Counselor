import type { LucideIcon } from 'lucide-react';
import { Github, Instagram, Linkedin } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  japanese: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/psb-001/Manga-Counselor',
    japanese: 'ギットハブ'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/pratham01012007',
    japanese: 'インスタグラム'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prathamesh-bhujbal-psb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    japanese: 'リンクトイン'
  }
];