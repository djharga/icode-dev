// src/App.tsx  (FULL UPDATED)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ProgressBar } from './components/layout/ProgressBar';
import { PageTransition } from './components/layout/PageTransition';
import { BackToTop } from './components/layout/BackToTop';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

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

// NEW: Offer (single killer offer page)
import { Offer } from './pages/Offer';

import SEO from './seo';

// ---- Tracking helpers (GA4 via GTM + Meta Pixel optional) ----
declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: any[]) => void;
  }
}

function pushDL(event: string, payload: Record<string, unknown> = {}) {
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ event, ...payload });
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* SEO المركزي */}
        <SEO />

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

                {/* موجودة عندك */}
                <Route path="/offers" element={<Offers />} />

                {/* NEW: صفحة عرض واحد /offer */}
                <Route
                  path="/offer"
                  element={
                    <Offer />
                  }
                />

                <Route path="/portal" element={<Portal />} />

                {/* OPTIONAL: 404 */}
                <Route
                  path="*"
                  element={
                    <div className="section-padding">
                      <div className="container-custom text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                          الصفحة غير موجودة
                        </h1>
                        <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                          تحقق من الرابط أو ارجع للرئيسية.
                        </p>
                        <a
                          href="/"
                          onClick={() => pushDL('nav_click', { target: 'home_from_404' })}
                        >
                          رجوع للرئيسية
                        </a>
                      </div>
                    </div>
                  }
                />
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