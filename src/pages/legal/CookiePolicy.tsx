import React from 'react';
import { Cookie } from 'lucide-react';
import { LegalPageLayout } from './components/LegalPageLayout';
import { LastUpdated } from './components/LastUpdated';

export const CookiePolicy: React.FC = () => (
  <LegalPageLayout
    title="Cookie Policy"
    icon={Cookie}
    japaneseTitle="クッキーポリシー"
  >
    <LastUpdated date="2025-09-16" />
    
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">What Are Cookies</h2>
        <p className="text-zinc-300">
          Cookies are small text files stored on your device that help us provide and improve
          our services by remembering your preferences and usage patterns.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">How We Use Cookies</h2>
        <div className="space-y-4 text-zinc-300">
          <p>We use essential cookies and local storage for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Remembering your reading preferences</li>
            <li>Maintaining your session and authentication</li>
            <li>Analyzing site usage and performance</li>
            <li>Personalizing your experience</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">No Third‑Party Ads</h2>
        <p className="text-zinc-300">
          We do not run third‑party advertising cookies or tracking pixels.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>
        <p className="text-zinc-300">
          You can control and/or delete cookies through your browser settings. However,
          removing cookies may affect your experience on our site.
        </p>
      </section>
    </div>
  </LegalPageLayout>
);