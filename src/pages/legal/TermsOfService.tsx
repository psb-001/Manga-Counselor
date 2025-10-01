import React from 'react';
import { Scale } from 'lucide-react';
import { LegalPageLayout } from './components/LegalPageLayout';
import { LastUpdated } from './components/LastUpdated';

export const TermsOfService: React.FC = () => (
  <LegalPageLayout
    title="Terms of Service"
    icon={Scale}
  >
    <LastUpdated date="2024-03-20" />
    
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Acceptance of Terms</h2>
        <p className="text-zinc-300">
          By accessing or using MangaCounselor, you agree to be bound by these Terms of Service
          and all applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">User Responsibilities</h2>
        <div className="space-y-4 text-zinc-300">
          <p>As a user of MangaCounselor, you agree to:</p>
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
        <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
        <p className="text-zinc-300">
          Questions about these terms? Contact us at
          <span className="mx-1 text-white">support@mangacounselor.com</span>.
        </p>
      </section>
    </div>
  </LegalPageLayout>
);