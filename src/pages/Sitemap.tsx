import React from 'react';
import { Map } from 'lucide-react';
import { Link } from '../components/common/Link';

export const Sitemap: React.FC = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { href: '/', label: 'Home', japanese: 'ホーム' },
        { href: '/discover', label: 'Discover', japanese: '発見' },
        { href: '/popular', label: 'Popular Manga', japanese: '人気マンガ' },
        { href: '/readlater', label: 'Reading List', japanese: '読書リスト' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy', japanese: 'プライバシーポリシー' },
        { href: '/terms', label: 'Terms of Service', japanese: '利用規約' },
        { href: '/cookies', label: 'Cookie Policy', japanese: 'クッキーポリシー' },
      ]
    },
    {
      title: 'Support',
      links: [
        { href: '/contact', label: 'Contact Us', japanese: 'お問い合わせ' },
        { href: '/faq', label: 'FAQ', japanese: 'よくある質問' },
        { href: '/help', label: 'Help Center', japanese: 'ヘルプ' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Map className="w-8 h-8 text-red-400" />
          <h1 className="text-3xl font-bold text-white">
            Sitemap
            <span className="text-sm text-zinc-400 ml-3 japanese-text">サイトマップ</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map(section => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-zinc-400 hover:text-red-400 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
                        {link.japanese}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};