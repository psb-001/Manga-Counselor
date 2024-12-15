import React from 'react';
import { Scroll } from 'lucide-react';

export const FooterBranding: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-lg backdrop-blur-sm">
          <Scroll className="w-8 h-8 text-red-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">
            マンガ<span className="text-red-400">ハブ</span>
          </h3>
          <p className="text-sm text-zinc-400">Discover Your Next Adventure</p>
        </div>
      </div>
      
      <p className="text-zinc-400 leading-relaxed max-w-md">
        Your gateway to the fascinating world of manga. We help you discover 
        stories that resonate with your interests and keep track of your reading journey.
      </p>
      
      <p className="text-sm text-zinc-600 japanese-text leading-relaxed">
        マンガの魅力的な世界への入り口。あなたの興味に合った物語を見つけ、
        読書の旅を記録するお手伝いをします。
      </p>
    </div>
  );
};