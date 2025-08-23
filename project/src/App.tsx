import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Members from './components/Members';
import Achievements from './components/Achievements';
import Results from './components/Results';
import Announcements from './components/Announcements';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'events':
        return <Events />;
      case 'members':
        return <Members />;
      case 'achievements':
        return <Achievements />;
      case 'results':
        return <Results />;
      case 'announcements':
        return <Announcements />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Hero onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;