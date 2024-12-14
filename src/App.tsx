import React, { useState } from 'react';
import { Manga } from './types/manga';
import { Header } from './components/layout/Header';
import { MangaDetails } from './components/manga/MangaDetails';
import { PopularMangaGrid } from './components/manga/PopularMangaGrid';
import { ReadLaterList } from './components/manga/ReadLaterList';
import { TabNavigation } from './components/navigation/TabNavigation';
import { useManga } from './hooks/useManga';

function App() {
  const [activeTab, setActiveTab] = useState<'popular' | 'readlater'>('popular');
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);

  const {
    popularManga,
    popularError,
    popularLoading,
  } = useManga();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {popularError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{popularError}</p>
          </div>
        )}

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'popular' && (
          <PopularMangaGrid
            manga={popularManga}
            isLoading={popularLoading}
            onMoreInfo={setSelectedManga}
          />
        )}

        {activeTab === 'readlater' && (
          <ReadLaterList onMangaSelect={setSelectedManga} />
        )}
      </main>

      {selectedManga && (
        <MangaDetails
          manga={selectedManga}
          onClose={() => setSelectedManga(null)}
        />
      )}
    </div>
  );
}

export default App;