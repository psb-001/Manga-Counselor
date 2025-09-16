import React from 'react';
import { Map } from 'lucide-react';
import { Link } from '../components/common/Link';

export const Sitemap: React.FC = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { href: '/', label: 'Home', japanese: '' },
        { href: '/discover', label: 'Discover', japanese: '' },
        { href: '/popular', label: 'Popular Manga', japanese: '' },
        { href: '/readlater', label: 'Reading List', japanese: '' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy', japanese: '' },
        { href: '/terms', label: 'Terms of Service', japanese: '' },
        { href: '/cookies', label: 'Cookie Policy', japanese: '' },
      ]
    },
    {
      title: 'Support',
      links: [
        { href: '/contact', label: 'Contact Us', japanese: '' },
        { href: '/faq', label: 'FAQ', japanese: '' },
        { href: '/help', label: 'Help Center', japanese: '' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Map className="w-8 h-8 text-red-400" />
          <h1 className="text-3xl font-bold text-white">Sitemap</h1>
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
                      {link.japanese ? (
                        <span className="ml-2 text-xs text-zinc-600 group-hover:text-red-400/70 japanese-text">
                          {link.japanese}
                        </span>
                      ) : null}
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