import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 420);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    // Modern + smooth (مع fallback لو المتصفح مش بيدعم)
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="العودة للأعلى"
      className={[
        // placement
        'fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[55]',
        // size
        'w-12 h-12 md:w-14 md:h-14',
        // style
        'gradient-primary rounded-2xl text-white',
        'shadow-lg shadow-primary-500/25',
        // motion (premium)
        'transition-[transform,opacity,box-shadow] duration-300',
        '[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/30',
        'active:translate-y-0',
        // focus
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-white dark:focus-visible:ring-offset-secondary-900',
        // visibility
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none',
        // to enable group-hover on icon
        'group',
      ].join(' ')}
    >
      <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
