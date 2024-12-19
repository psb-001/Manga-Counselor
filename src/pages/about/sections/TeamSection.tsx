import React from 'react';
import { Github, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Yuki Tanaka',
    role: 'Founder & Lead Developer',
    japanese: '創設者＆開発リーダー',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop',
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Sakura Yamamoto',
    role: 'Content Curator',
    japanese: 'コンテンツキュレーター',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Kenji Sato',
    role: 'UX Designer',
    japanese: 'UXデザイナー',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const TeamSection: React.FC = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
      Our Team
      <span className="text-sm text-zinc-400 japanese-text">チーム</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.name} className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full aspect-square object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-zinc-400 text-sm mb-1">{member.role}</p>
            <p className="text-zinc-600 text-xs japanese-text mb-4">{member.japanese}</p>
            
            <div className="flex gap-3">
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);