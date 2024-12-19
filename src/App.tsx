import React, { useState } from 'react';
import { Manga } from './types/manga';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer/Footer';
import { MangaDetails } from './components/manga/MangaDetails';
import { PopularMangaGrid } from './components/manga/PopularMangaGrid';
import { ReadLaterList } from './components/manga/ReadLaterList';
import { DiscoverSection } from './components/manga/DiscoverSection';
import { TabNavigation, TabType } from './components/navigation/TabNavigation';
import { ErrorAlert } from './components/common/ErrorAlert';
import { useManga } from './hooks/useManga';
import { useRecommendations } from './hooks/useRecommendations';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { AboutPage } from './pages/about/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}