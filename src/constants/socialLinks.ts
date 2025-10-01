import { DivideIcon as LucideIcon, Github, Instagram, Linkedin } from 'lucide-react';

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
    href: 'https://github.com/psb-001',
    japanese: 'ギットハブ'
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/prathamesh-bhujbal-psb',
    japanese: 'リンクトイン'
  },
  { 
    icon: Instagram,
    label: 'Instagram', 
    href: 'https://www.instagram.com/pratham01012007',
    japanese: 'インスタグラム'
  }
];