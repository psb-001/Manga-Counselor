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
    <LastUpdated date="2024-03-20" />
    
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
        <div className="space-y-4 text-zinc-300">
          <p>
            We collect information you provide directly to us when using Manga Counselor:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reading preferences and manga lists</li>
            <li>Search history and interactions</li>
            <li>Device information and usage statistics</li>
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
        <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
        <p className="text-zinc-300">
          We implement appropriate security measures to protect your personal information
          against unauthorized access, alteration, or destruction.
        </p>
      </section>
    </div>
  </LegalPageLayout>
);