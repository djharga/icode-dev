// src/components/layout/Footer.tsx (UPGRADED — conversion-first + trust + premium)
// Drop-in replace. نفس روابطك + أقوى Funnel + عناصر ثقة + CTA واضح.

import { Link, useLocation } from 'react-router-dom';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Timer,
  Gauge,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Funnel (موحّد)
  const waPhone = '201507619503';
  const waText = encodeURIComponent(
    [
      'مرحبًا، عايز أبدأ مشروع مع icode.',
      '',
      'نوع المشروع:',
      'الهدف (مبيعات/حجز/تعريف):',
      'عدد الصفحات/الأقسام:',
      'هل المحتوى جاهز؟ (نعم/جزئي/لا):',
      'موعد الإطلاق:',
      'ميزانية تقريبية:',
      'لينكات/مراجع (اختياري):',
    ].join('\n')
  );
  const waHref = `https://wa.me/${waPhone}?text=${waText}`;

  const email = 'icode.contact@gmail.com';
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
    { name: 'عرض 7 أيام', href: '/offer' },
  ];

  const support = [
    { name: 'تواصل معنا', href: '/contact' },
    { name: 'احجز استشارة', href: '/consultation' },
    { name: 'الشروط والأحكام', href: '/terms' },
  ];

  // تحسين: هاش (#) الأفضل يكون <a> مش <Link> عشان الـ scroll
  const HashLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isHash = to.includes('#');
    if (!isHash) {
      return (
        <Link to={to} className="text-secondary-300/80 hover:text-white transition-colors">
          {children}
        </Link>
      );
    }
    return (
      <a href={to} className="text-secondary-300/80 hover:text-white transition-colors">
        {children}
      </a>
    );
  };

  // لإخفاء CTA لو أنت بالفعل في offer/consultation (تقليل تكرار)
  const hidePrimaryCta =
    location.pathname.startsWith('/offer') || location.pathname.startsWith('/consultation');

  return (
    <footer className="relative bg-secondary-950 text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-40" />
      </div>

      {/* Top CTA strip (Premium, Conversion-first) */}
      {!hidePrimaryCta && (
        <div className="relative border-b border-white/10">
          <div className="container-custom py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-white/80 mb-2">جاهز تبدأ بدون تشتت؟</p>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                  خلّي التنفيذ يمشي بخطة واضحة — وابدأ خلال دقائق.
                </h3>
                <p className="mt-2 text-white/75">
                  إمّا تفتح <span className="font-bold">عرض 7 أيام</span> لو نطاقك واضح، أو تبعت التفاصيل على واتساب.
                </p>

                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    { icon: Timer, text: 'تسليم بموعد' },
                    { icon: Gauge, text: 'أداء عالي' },
                    { icon: ShieldCheck, text: 'أمان أساسي' },
                  ].map((b, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
                    >
                      <b.icon className="w-4 h-4 text-primary-300" />
                      {b.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/offer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold gradient-primary hover:shadow-lg hover:shadow-primary-500/25 transition-all hover-glow"
                  aria-label="افتح عرض 7 أيام"
                >
                  افتح عرض 7 أيام <ArrowLeft className="w-4 h-4" />
                </Link>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                  aria-label="تواصل واتساب"
                >
                  واتساب الآن <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro trust line */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success-400" />
                <span>نطاق واضح = تنفيذ أسرع. التزامنا مرتبط بتعاونك في المحتوى والموافقات.</span>
              </div>
              <div className="text-white/50">بدون مكالمات إجبارية — تواصل مباشر.</div>
            </div>
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="relative">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand + Trust + Contacts */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-5 group" aria-label="الذهاب للرئيسية">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-extrabold tracking-tight">icode</span>
              </Link>

              <p className="text-secondary-300/80 leading-relaxed mb-6">
                بنبني مواقع وتطبيقات وأنظمة “تشتغل” وتجيب نتيجة: Funnel واضح، سرعة، واستقرار.
                شغلنا مبني على نطاق مكتوب + تسليمات قابلة للقياس.
              </p>

              {/* Trust bullets */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: ShieldCheck, text: 'اتفاق نطاق قبل التنفيذ + سياسة تغيير واضحة' },
                  { icon: Timer, text: 'تسليمات مرحلية + مراجعات ضمن النطاق' },
                  { icon: Gauge, text: 'تحسين أداء وتجربة مستخدم (Conversion-first)' },
                ].map((x, i) => (
                  <div key={i} className="flex items-start gap-2 text-secondary-300/80">
                    <x.icon className="w-5 h-5 mt-0.5 text-primary-300 flex-shrink-0" />
                    <span>{x.text}</span>
                  </div>
                ))}
              </div>

              {/* Contacts */}
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-secondary-300/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>القاهرة، مصر</span>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-secondary-300/70 hover:text-white transition-colors"
                  aria-label="تواصل واتساب"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span dir="ltr">+20 150 761 9503</span>
                </a>

                <a
                  href={mailHref}
                  className="flex items-center gap-2 text-secondary-300/70 hover:text-white transition-colors"
                  aria-label="راسلنا عبر البريد"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span dir="ltr">{email}</span>
                </a>
              </div>

              {/* CTA buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl font-bold border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
                  aria-label="واتساب"
                >
                  واتساب
                </a>

                <Link
                  to="/consultation"
                  className="px-4 py-2.5 rounded-xl font-bold gradient-primary hover-glow transition-all"
                  aria-label="احجز استشارة"
                >
                  احجز استشارة
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-extrabold mb-5">الخدمات</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <HashLink to={item.href}>{item.name}</HashLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-sm font-bold text-white mb-2">مناسب لو:</div>
                <div className="text-sm text-white/70 leading-relaxed">
                  عندك هدف واضح (حجز/مبيعات/تعريف) وعايز موقع سريع يلمّ Leads مباشرة.
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-extrabold mb-5">الشركة</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-secondary-300/80 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/offer"
                  className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors font-bold"
                  aria-label="افتح عرض 7 أيام"
                >
                  افتح عرض 7 أيام <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Support + Mini trust */}
            <div>
              <h3 className="text-lg font-extrabold mb-5">الدعم</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-secondary-300/80 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-sm font-extrabold text-white mb-3">سياسة تنفيذ محترمة</div>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    'نثبت النطاق قبل البدء.',
                    'أي إضافة = Change Request مكتوب.',
                    'تسليمات مرحلية + قبول واضح.',
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success-400 mt-0.5" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-4 py-2.5 rounded-xl font-bold border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-center"
                  >
                    اسأل على واتساب
                  </a>
                  <Link
                    to="/terms"
                    className="w-full px-4 py-2.5 rounded-xl font-bold border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-center"
                  >
                    الشروط والأحكام
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/55">
              <p className="text-center md:text-right">
                جميع الحقوق محفوظة © icode {currentYear}
              </p>
              <p className="text-center md:text-left text-sm">
                تنفيذ منتجات رقمية باعتمادية عالية — Funnel + Performance + Stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
