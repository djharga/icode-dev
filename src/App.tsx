import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ProgressBar } from './components/layout/ProgressBar';
import { PageTransition } from './components/layout/PageTransition';
import { BackToTop } from './components/layout/BackToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Consultation } from './pages/Consultation';
import { Terms } from './pages/Terms';
import { Offers } from './pages/Offers';
import { Portal } from './pages/Portal';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ProgressBar />
        <BackToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/portal" element={<Portal />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
