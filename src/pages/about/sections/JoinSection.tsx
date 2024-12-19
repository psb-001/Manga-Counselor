import React from 'react';
import { Mail } from 'lucide-react';

export const JoinSection: React.FC = () => (
  <section className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-zinc-800 rounded-lg p-8 text-center">
    <h2 className="text-2xl font-bold text-white mb-4">
      Join Our Journey
      <span className="text-sm text-zinc-400 ml-2 japanese-text">私たちの旅に参加</span>
    </h2>
    
    <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
      We're always looking for passionate individuals who love manga and want to help others 
      discover amazing stories. Whether you're a developer, designer, or content curator, 
      there might be a place for you on our team.
    </p>
    
    <a
      href="mailto:careers@mangacounselor.com"
      className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 
        text-white rounded-lg transition-colors"
    >
      <Mail className="w-5 h-5" />
      <span>Get in Touch</span>
    </a>
  </section>
);