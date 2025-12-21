// src/components/layout/Footer.tsx (FULL UPDATED — SEO links + trust + conversion + no fake socials)
// تغييرات محسوبة:
// - نفس الشكل العام لكن أنضف + روابط فعلية (بدون توجيه الناس لصفحات github.com / linkedin.com العامة)
// - إضافة mailto + تحسين واتساب برسالة جاهزة
// - تحسين a11y + rel=me + aria-labels
// - سنة ديناميكية + إزالة قلب (ممكن يقتل "الطابع الرسمي") واستبداله بنص احترافي
// - إضافة شريط "روابط سريعة" وتحويل صامت (زر استشارة + واتساب)
// - لا افتراضات خارج الملف

import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const waPhone = '201507619503';
  const waText = encodeURIComponent(
    [
      'مرحبًا، عايز أستفسر عن خدمة من icode.',
      '',
      'نوع المشروع:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const waHref = `https://wa.me/${waPhone}?text=${waText}`;

  const email = 'icode.contact@gmail.com'; // غيّره لإيميلك الرسمي عند جاهزيته
  const mailHref = `mailto:${email}?subject=${encodeURIComponent('استفسار عن خدمات icode')}`;

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

  const quick = [
    { name: 'ابدأ الآن', href: '/consultation' },
    { name: 'اطلب عرض سعر', href: '/contact' },
    { name: 'شاهد الأعمال', href: '/portfolio' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand + Trust */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group" aria-label="الذهاب للرئيسية">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">icode</span>
            </Link>

            <p className="text-secondary-400 leading-relaxed mb-6">
              استوديو برمجة احترافي متخصص في بناء المواقع، التطبيقات، والأنظمة المخصصة بمعايير تنفيذ عالية
              وتركيز على النتائج.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2 text-secondary-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>القاهرة، مصر</span>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label="تواصل واتساب"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">+20 150 761 9503</span>
              </a>

              <a
                href={mailHref}
                className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label="راسلنا عبر البريد"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">{email}</span>
              </a>
            </div>

            {/* Conversion buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg font-semibold bg-secondary-800 hover:bg-secondary-700 transition-colors"
                aria-label="واتساب"
              >
                واتساب
              </a>

              <Link
                to="/consultation"
                className="px-4 py-2.5 rounded-lg font-semibold gradient-primary hover-glow transition-all"
                aria-label="احجز استشارة"
              >
                احجز استشارة
              </Link>
            </div>

            {/* Optional: socials (ضع روابطك الحقيقية أو احذف القسم) */}
            {/* 
              ملاحظة: لا تضع روابط عامة مثل https://github.com — هذا يقلل الثقة.
              عندما يكون عندك روابط فعلية استخدم:
              <a href="https://linkedin.com/in/USERNAME" rel="me noopener noreferrer" ...> 
            */}
          </div>

          {/* Services */}
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

          {/* Company */}
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

          {/* Support + Quick */}
          <div>
            <h3 className="text-lg font-bold mb-6">الدعم</h3>
            <ul className="space-y-3 mb-8">
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

            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quick.map((item) => (
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

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-400">
            <p className="text-center md:text-right">
              جميع الحقوق محفوظة © icode {currentYear}
            </p>
            <p className="text-center md:text-left text-sm">
              تنفيذ منتجات رقمية باعتمادية عالية.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 