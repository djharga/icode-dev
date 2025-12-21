// ==============================
// PHASE 2 — /offer (Sales Page) + Tracking (GA4 + Meta Pixel) + Events
// React Router + Vite/React
// ==============================
//
// 1) Create: src/pages/Offer.tsx
// 2) Add route: /offer
// 3) Add tracking snippets (GA4 + Meta Pixel) in index.html
// 4) Add event helpers + fire events on CTA clicks
//
// ملاحظة: هذا التنفيذ “Production-ready baseline” بدون مكتبات زيادة.
// لو عندك React Helmet/SEO system جاهز قول لي وهنربطه.
// ==============================

/* =========================================================
   1) src/pages/Offer.tsx
   ========================================================= */
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Zap, Award, Clock, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

function trackLead(source: string) {
  // GA4 (gtag)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'lead_click', {
      event_category: 'lead',
      event_label: source,
      value: 1,
    });
  }

  // Meta Pixel (fbq)
  if (typeof w.fbq === 'function') {
    w.fbq('track', 'Lead', { source });
  }
}

export function Offer() {
  // ====== CONFIG ======
  const WHATSAPP_PHONE = '201234567890'; // TODO
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أبدأ عرض (موقع خلال 7 أيام).',
      '',
      'الباقة المطلوبة (Basic/Pro/Business):',
      'اسم النشاط:',
      'الهدف (مبيعات/تعريف/حجز):',
      'عدد الصفحات:',
      'هل لديك دومين؟ (نعم/لا):',
      'أمثلة مواقع تعجبك (روابط):',
      'موعد الإطلاق:',
      'الميزانية:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const bullets = [
    { icon: Clock, text: 'تسليم خلال 7 أيام (لنطاق واضح)' },
    { icon: Shield, text: 'أمان أساسي + حماية نماذج التواصل' },
    { icon: Zap, text: 'أداء عالي + Core Web Vitals محسّنة' },
    { icon: Award, text: 'كود نظيف + قابلية توسّع' },
  ];

  const packages = [
    {
      name: 'Basic',
      price: '—', // ضع السعر أو اكتب "ابدأ من ..."
      tagline: 'موقع تعريفي سريع لبدء الظهور وبيع الخدمة',
      includes: [
        'صفحة رئيسية + 3 صفحات',
        'تصميم احترافي RTL',
        'CTA واتساب + نموذج تواصل',
        'SEO أساسي (Title/Meta/OG)',
        'سرعة وتحسين صور',
        'تسليم 7 أيام',
      ],
      best: false,
    },
    {
      name: 'Pro',
      price: '—',
      tagline: 'أفضل خيار: تحويل أعلى + صفحات مقنعة',
      includes: [
        'صفحة رئيسية + 6 صفحات',
        'صفحة عرض /offer جاهزة',
        'تتبع GA4 + Pixel (أحداث Leads)',
        'نموذج Lead مع حقول ذكية',
        'تحسين نصوص البيع (Copy)',
        'تسليم 7–10 أيام',
      ],
      best: true,
    },
    {
      name: 'Business',
      price: '—',
      tagline: 'للشركات: صفحات أكثر + قابلية توسع',
      includes: [
        'حتى 12 صفحة',
        'تصميم Sections إضافية',
        'إعداد Blog/Articles (اختياري)',
        'تهيئة بنية توسّع مستقبلية',
        'تحسينات أمان إضافية',
        'تسليم حسب النطاق',
      ],
      best: false,
    },
  ];

  const faq = [
    {
      q: 'هل فعلاً خلال 7 أيام؟',
      a: 'نعم إذا النطاق محدد (عدد صفحات واضح + محتوى متوفر). لو المحتوى غير جاهز، نبدأ بالهيكل ونكمل فور وصوله.',
    },
    {
      q: 'ما معنى “أو لا تدفع شيئًا”؟',
      a: 'إذا لم نلتزم بموعد التسليم المتفق عليه لنفس النطاق، يتم إلغاء الفاتورة/المستحق لنفس المرحلة حسب الاتفاق المكتوب.',
    },
    {
      q: 'هل السعر شامل الاستضافة والدومين؟',
      a: 'السعر يخص التطوير. الدومين/الاستضافة حسب اختيارك، ويمكننا تجهيزها لك.',
    },
    {
      q: 'هل في دعم بعد الإطلاق؟',
      a: 'نعم دعم أساسي لتصحيح الأخطاء + خيارات صيانة شهرية.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              عرض واحد. نتيجة واحدة.
              <br />
              <span className="text-gradient">موقع شغال خلال 7 أيام</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8">
              لو محتاج موقع “يجيب شغل” مش مجرد شكل… ده العرض المناسب.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackLead('offer_hero_whatsapp')}
              >
                <Button size="lg" icon={ArrowLeft}>
                  ابدأ على واتساب الآن
                </Button>
              </a>

              <Link to="/" onClick={() => trackLead('offer_hero_back_home')}>
                <Button size="lg" variant="outline">
                  رجوع للرئيسية
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 justify-center text-secondary-700 dark:text-secondary-200"
                >
                  <b.icon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              اختر الباقة المناسبة
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              بدون لف ودوران: باقات واضحة + نطاق واضح = تسليم سريع.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((p) => (
              <Card
                key={p.name}
                className={`p-8 text-right ${p.best ? 'ring-2 ring-primary-500' : ''}`}
                hover
              >
                {p.best && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
                    الأكثر طلبًا
                  </div>
                )}

                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-secondary-900 dark:text-white">
                  {p.price}
                  <span className="text-base font-medium text-secondary-500 dark:text-secondary-400 mr-2">
                    / مشروع
                  </span>
                </div>
                <p className="mt-3 text-secondary-600 dark:text-secondary-300">{p.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {p.includes.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                      <span className="text-secondary-700 dark:text-secondary-200">{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackLead(`offer_package_${p.name.toLowerCase()}`)}
                  >
                    <Button size="lg" icon={ArrowLeft}>
                      ابدأ {p.name} الآن
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE + SCOPE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-10 text-right" hover>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-7 h-7 text-primary-600" />
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  الضمان
                </h3>
              </div>
              <p className="text-secondary-700 dark:text-secondary-200 leading-relaxed">
                إذا لم نلتزم بموعد التسليم المتفق عليه لنفس نطاق العمل المكتوب، يتم إلغاء مستحقات
                نفس المرحلة حسب الاتفاق. بدون نقاش.
              </p>
            </Card>

            <Card className="p-10 text-right" hover>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-7 h-7 text-primary-600" />
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  ماذا نحتاج منك؟
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'اسم النشاط + الهدف الرئيسي للموقع',
                  'عدد الصفحات المطلوبة',
                  'شعار/ألوان (إن وجدت)',
                  'محتوى مبدئي (حتى نقاط)',
                  '3 مواقع تحب ستايلها',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                    <span className="text-secondary-700 dark:text-secondary-200">{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              إجابات مباشرة.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faq.map((f) => (
              <Card key={f.q} className="p-8 text-right" hover>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  {f.q}
                </h3>
                <p className="text-secondary-700 dark:text-secondary-200 leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead('offer_footer_whatsapp')}
            >
              <Button size="lg" icon={ArrowLeft}>
                ابدأ على واتساب الآن
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   2) Add route: src/App.tsx (example)
   =========================================================
   أضف استيراد Offer + Route /offer
========================================================= */

// import { Offer } from './pages/Offer';
// ...
// <Route path="/offer" element={<Offer />} />

/* =========================================================
   3) Tracking Snippets: index.html
   =========================================================
   ضع GA4 + Meta Pixel داخل <head>.
   استبدل IDs.
========================================================= */

//
// --- GA4 ---
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
// </script>
//
// --- Meta Pixel ---
// <script>
//   !function(f,b,e,v,n,t,s)
//   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//   n.queue=[];t=b.createElement(e);t.async=!0;
//   t.src=v;s=b.getElementsByTagName(e)[0];
//   s.parentNode.insertBefore(t,s)}(window, document,'script',
//   'https://connect.facebook.net/en_US/fbevents.js');
//   fbq('init', 'XXXXXXXXXXXXXXX');
//   fbq('track', 'PageView');
// </script>
// <noscript>
//   <img height="1" width="1" style="display:none"
//   src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1"/>
// </noscript>

/* =========================================================
   4) Add CTA to Home: زر يودّي /offer
   =========================================================
   حط زر إضافي في Hero (اختياري) يفتح /offer.
========================================================= */

// <Link to="/offer">
//   <Button size="lg" variant="outline">شوف العرض السريع</Button>
// </Link>