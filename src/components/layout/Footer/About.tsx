import React from 'react';
import { Scroll } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Scroll className="w-6 h-6 text-red-400" />
        </div>
        <h3 className="text-xl font-bold text-zinc-100">
          マンガ<span className="text-red-400">ハブ</span>
        </h3>
      </div>
      <div className="space-y-4">
        <p className="text-zinc-400 leading-relaxed">
          Your ultimate destination for discovering and tracking manga. We help you find 
          your next favorite series and keep track of your reading progress.
        </p>
        <p className="text-sm text-zinc-600 japanese-text leading-relaxed">
          マンガを発見し、追跡するための究極の目的地。
          次のお気に入りシリーズを見つけ、読書の進捗状況を把握するお手伝いをします。
        </p>
      </div>
    </div>
  );
};