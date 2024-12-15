import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-zinc-100">Stay Updated</h4>
      <p className="text-sm text-zinc-400">Get weekly manga recommendations and updates.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-lg
              text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-red-500 
              text-white rounded-md hover:bg-red-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};