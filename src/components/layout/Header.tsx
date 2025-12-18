import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات', href: '/services' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'الأعمال', href: '/portfolio' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass-strong border-b border-white/10 shadow-lg'
        : 'glass border-b border-white/5'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient transition-all duration-300">icode</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-semibold transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400 scale-105'
                    : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-gradient-to-l from-primary-600 to-primary-400 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="تبديل الوضع"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Link
              to="/consultation"
              className="px-6 py-2.5 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all"
            >
              احجز استشارة
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-secondary-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden glass-strong border-t border-white/10 animate-slide-down">
          <div className="container-custom py-6">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary-700 dark:text-secondary-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <span>{theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري'}</span>
                </button>
              </div>
              <Link
                to="/consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-3 gradient-primary text-white font-semibold rounded-lg text-center"
              >
                احجز استشارة
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
