import React, { useState } from 'react';
import { Manga } from '../types/manga';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer/Footer';
import { MangaDetails } from './manga/MangaDetails';
import { PopularMangaGrid } from './manga/PopularMangaGrid';
import { ReadLaterList } from './manga/ReadLaterList';
import { DiscoverSection } from './manga/DiscoverSection';
import { TabNavigation, TabType } from './navigation/TabNavigation';
import { ErrorAlert } from './common/ErrorAlert';
import { useManga } from '../hooks/useManga';
import { useRecommendations } from '../hooks/useRecommendations';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<TabType>('discover');
  const [selectedManga, setSelectedManga] = useState<Manga | null>(null);

  const {
    popularManga,
    popularError,
    popularLoading,
    genres,
  } = useManga();

  const {
    recommendations,
    isLoading: recommendationsLoading,
    error: recommendationsError,
    getRecommendations,
  } = useRecommendations();

  return (
    <>
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        <ErrorAlert error={popularError || recommendationsError} />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'discover' && (
          <DiscoverSection
            manga={recommendations}
            genres={genres}
            isLoading={recommendationsLoading}
            onSearch={getRecommendations}
            onMoreInfo={setSelectedManga}
          />
        )}

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
      <Footer />

      {selectedManga && (
        <MangaDetails
          manga={selectedManga}
          onClose={() => setSelectedManga(null)}
        />
      )}
    </>
  );
};

export default MainContent;