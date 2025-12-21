// src/components/layout/Header.tsx (FULL UPDATED — conversion-first + a11y + premium behavior)
// تغييرات محسوبة:
// - CTA أقوى + زر واتساب سريع (مباشر تحويل)
// - Active state أدق + aria-current
// - إغلاق المينيو بالـ ESC + منع سكرول الخلفية أثناء فتح المينيو
// - تحسينات a11y (aria-expanded/controls/labels)
// - هيدر أنعم عند الـ scroll + shadow مضبوط
// - لا افتراضات خارج الملف (بدون اعتماد على ملفات أخرى)

import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code2, PhoneCall } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true } as any);
    return () => window.removeEventListener('scroll', handleScroll as any);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [mobileMenuOpen]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const navigation = useMemo(
    () => [
      { name: 'الرئيسية', href: '/' },
      { name: 'الخدمات', href: '/services' },
      { name: 'الأسعار', href: '/pricing' },
      { name: 'الأعمال', href: '/portfolio' },
      { name: 'من نحن', href: '/about' },
      { name: 'تواصل', href: '/contact' },
    ],
    []
  );

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const consultationCtaText = 'احجز استشارة';

  const waPhone = '201507619503';
  const waText = encodeURIComponent(
    [
      'عايز أبدأ مشروع.',
      '',
      'نوع المشروع:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const waHref = `https://wa.me/${waPhone}?text=${waText}`;

  return (
    <header
      className={[
        'fixed top-0 right-0 left-0 z-50',
        'transition-all duration-300',
        scrolled
          ? 'glass-strong border-b border-white/10 shadow-soft'
          : 'glass border-b border-white/5',
      ].join(' ')}
    >
      <nav className="container-custom" aria-label="التنقل الرئيسي">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="الذهاب للرئيسية">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient transition-all duration-300">
              icode
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'text-base font-semibold relative group',
                    'transition-all duration-300',
                    active
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400',
                  ].join(' ')}
                >
                  {item.name}
                  <span
                    className={[
                      'absolute -bottom-1 right-0 h-0.5 bg-gradient-to-l from-primary-600 to-primary-400',
                      'transition-all duration-300',
                      active ? 'w-full' : 'w-0 group-hover:w-full',
                    ].join(' ')}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="تبديل الوضع"
              type="button"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* WhatsApp quick */}
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-all"
              aria-label="تواصل واتساب"
            >
              <PhoneCall className="w-4 h-4" />
              <span>واتساب</span>
            </a>

            {/* Primary CTA */}
            <Link
              to="/consultation"
              className="px-6 py-2.5 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all hover-glow"
              aria-label={consultationCtaText}
            >
              {consultationCtaText}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="lg:hidden relative z-50 glass-strong border-t border-white/10"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة الهاتف"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'text-lg font-semibold py-2 rounded-lg px-2',
                        'transition-colors',
                        active
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50/60 dark:bg-secondary-800/60'
                          : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800/60',
                      ].join(' ')}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="flex items-center justify-between pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    type="button"
                  >
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    <span>{theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري'}</span>
                  </button>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>واتساب</span>
                  </a>
                </div>

                <Link
                  to="/consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-6 py-3 gradient-primary text-white font-semibold rounded-lg text-center hover-glow"
                  aria-label={consultationCtaText}
                >
                  {consultationCtaText}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
