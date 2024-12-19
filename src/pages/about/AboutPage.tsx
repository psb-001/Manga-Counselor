import React from 'react';
import { Users, BookOpen, Globe2, Heart } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { TeamSection } from './sections/TeamSection';
import { MissionSection } from './sections/MissionSection';
import { StatsSection } from './sections/StatsSection';
import { JoinSection } from './sections/JoinSection';

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <MissionSection />

        {/* Stats Grid */}
        <StatsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Join Us Section */}
        <JoinSection />
      </div>
    </PageLayout>
  );
};