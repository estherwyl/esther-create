import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Writing from './pages/Writing';

export default function App() {
  // 'projects' is the default landing page
  const [activePage, setActivePage] = useState('projects');

  // Scroll to top whenever the page changes
  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Nav activePage={activePage} setActivePage={handlePageChange} />

      <main>
        {activePage === 'projects' && <Projects />}
        {activePage === 'writing'  && <Writing  />}
        {activePage === 'about'    && <About    />}
      </main>

      <Footer />
    </>
  );
}
