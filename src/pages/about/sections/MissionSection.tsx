import React from 'react';
import { BookHeart } from 'lucide-react';

export const MissionSection: React.FC = () => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-8">
      <BookHeart className="w-10 h-10 text-red-400" />
      <div>
        <h1 className="text-3xl font-bold text-white">
          About マンガカウンセラー
        </h1>
        <p className="text-zinc-400 mt-1">Your Personal Manga Guide</p>
      </div>
    </div>

    <div className="prose prose-invert max-w-none">
      <p className="text-lg text-zinc-300 leading-relaxed">
        Founded in 2024, マンガカウンセラー (Manga Counselor) was born from a passion 
        for connecting readers with stories that resonate with them. We believe that 
        the right manga can inspire, comfort, and transform lives.
      </p>
      
      <p className="text-lg text-zinc-300 leading-relaxed mt-4">
        Our mission is to make manga discovery personalized and meaningful. Using advanced 
        recommendation algorithms and deep understanding of genres and themes, we help readers 
        find their next favorite series.
      </p>
    </div>
  </section>
);