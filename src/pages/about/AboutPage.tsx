import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { MissionSection } from './sections/MissionSection';

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <MissionSection />
      </main>
    </PageLayout>
  );
};


