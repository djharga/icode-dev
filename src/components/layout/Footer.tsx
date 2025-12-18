import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'تطوير المواقع', href: '/services#websites' },
    { name: 'تطوير التطبيقات', href: '/services#apps' },
    { name: 'الأنظمة المخصصة', href: '/services#systems' },
    { name: 'الاستشارات التقنية', href: '/services#consulting' },
  ];

  const company = [
    { name: 'من نحن', href: '/about' },
    { name: 'الأعمال', href: '/portfolio' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'العروض', href: '/offers' },
  ];

  const support = [
    { name: 'تواصل معنا', href: '/contact' },
    { name: 'احجز استشارة', href: '/consultation' },
    { name: 'الشروط والأحكام', href: '/terms' },
    { name: 'لوحة العميل', href: '/portal' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">icode</span>
            </Link>
            <p className="text-secondary-400 leading-relaxed mb-6">
              استوديو برمجة احترافي متخصص في بناء المواقع، التطبيقات، والأنظمة المخصصة بأعلى معايير الجودة.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2 text-secondary-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>القاهرة، مصر</span>
              </div>
              <a
                href="https://wa.me/201507619503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">+20 150 761 9503</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/201507619503"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="واتساب"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">الخدمات</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">الشركة</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">الدعم</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-400">
            <p className="text-center md:text-right">جميع الحقوق محفوظة © icode 2025</p>
            <div className="flex items-center gap-2 text-sm">
              <span>صُنع بـ</span>
              <span className="text-primary-400">❤️</span>
              <span>في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
