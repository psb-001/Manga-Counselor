import React from 'react';
import { Shield } from 'lucide-react';
import { LegalPageLayout } from './components/LegalPageLayout';
import { LastUpdated } from './components/LastUpdated';

export const PrivacyPolicy: React.FC = () => (
  <LegalPageLayout
    title="Privacy Policy"
    icon={Shield}
    japaneseTitle="プライバシーポリシー"
  >
    <LastUpdated date="2025-09-16" />
    
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
        <p className="text-zinc-300">
          Manga Counselor helps you discover manga. We do not serve ads and we do not sell
          your personal information. This policy explains what we collect and how we use it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
        <div className="space-y-4 text-zinc-300">
          <p>We collect minimal information to provide recommendations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reading preferences and your read‑later list (stored locally on your device)</li>
            <li>Search queries and on‑site interactions (used to improve recommendations)</li>
            <li>Basic device and usage data (e.g., browser type, pages viewed) for performance</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
        <div className="space-y-4 text-zinc-300">
          <p>Your information helps us:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide personalized manga recommendations</li>
            <li>Improve our services and user experience</li>
            <li>Protect against misuse and maintain security</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Ads and Data Sales</h2>
        <p className="text-zinc-300">
          We do not display third‑party ads and we do not sell your personal information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Cookies and Local Storage</h2>
        <div className="space-y-4 text-zinc-300">
          <p>
            We use essential cookies and local storage to remember your preferences and read‑later
            list. You can clear these at any time via your browser settings; doing so may reset your
            preferences.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
        <p className="text-zinc-300">
          We implement appropriate security measures to protect your personal information
          against unauthorized access, alteration, or destruction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
        <p className="text-zinc-300">
          We retain data only as long as necessary to provide the service. Local data stored in your
          browser persists until you clear it or uninstall the browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
        <p className="text-zinc-300">
          Depending on your location, you may have rights to access, correct, or delete your data.
          For requests, please contact us using the details below.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
        <p className="text-zinc-300">
          Questions about this policy? Contact us at support@mangacounselor.example.
        </p>
      </section>
    </div>
  </LegalPageLayout>
);