import React from 'react';
import { Scale } from 'lucide-react';
import { LegalPageLayout } from './components/LegalPageLayout';
import { LastUpdated } from './components/LastUpdated';

export const TermsOfService: React.FC = () => (
  <LegalPageLayout
    title="Terms of Service"
    icon={Scale}
    japaneseTitle="利用規約"
  >
    <LastUpdated date="2025-09-16" />
    
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Service Description</h2>
        <p className="text-zinc-300">
          Manga Counselor provides manga discovery and recommendation features. We do not host
          copyrighted content; links or references are for informational purposes only.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Acceptance of Terms</h2>
        <p className="text-zinc-300">
          By accessing or using Manga Counselor, you agree to be bound by these Terms of Service
          and all applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">User Responsibilities</h2>
        <div className="space-y-4 text-zinc-300">
          <p>As a user of Manga Counselor, you agree to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Use the service for lawful purposes only</li>
            <li>Respect intellectual property rights</li>
            <li>Maintain the security of your account</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Content Guidelines</h2>
        <p className="text-zinc-300">
          All content must comply with our community guidelines and respect copyright laws.
          We reserve the right to remove any content that violates these terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Disclaimer</h2>
        <p className="text-zinc-300">
          The service is provided on an "as is" basis without warranties of any kind. We do not
          guarantee availability, accuracy of recommendations, or uninterrupted service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
        <p className="text-zinc-300">
          Questions about these terms? Contact us at legal@mangacounselor.example.
        </p>
      </section>
    </div>
  </LegalPageLayout>
);