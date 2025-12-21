// src/pages/Offers.tsx  (FULL UPDATED - PHASE 2 ALIGNMENT)
// الهدف: صفحة /offers تبقى "بوابة" وتحوّل الناس لصفحة /offer (عرض واحد قاتل)
// + إصلاح التواريخ + إزالة عملات/شروط غير منطقية للسوق عندك + CTA واتساب/offer بدل contact
// + Events للـ GTM dataLayer

import { Link } from 'react-router-dom';
import { Tag, Clock, TrendingUp, Sparkles, ArrowLeft, CheckCircle, Shield, Zap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function pushDL(event: string, payload: Record<string, unknown> = {}) {
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ event, ...payload });
}

export function Offers() {
  // ====== CONFIG ======
  // IMPORTANT: لا تكتب "2024-12-31" لأنها منتهية (اليوم 2025-12-21)
  // استخدم "محدود" أو تاريخ مستقبلي حقيقي أو "حسب توفر السعة"
  const currentOffers = [
    {
      title: 'عرض 7 أيام (الأساسي)',
      badge: 'الأقوى',
      description: 'موقع شغال خلال 7 أيام — أو لا تدفع شيئًا (لنطاق واضح).',
      highlight: 'مناسب للمشاريع اللي محتاجة ظهور ومبيعات بسرعة',
      terms: [
        'ينطبق على مواقع جديدة فقط (Landing/Company/Service).',
        'النطاق ثابت: عدد صفحات محدد + محتوى مبدئي متوفر.',
        'التسليم خلال 7 أيام عمل من اعتماد المحتوى والخطة.',
        'الضمان مرتبط بنفس النطاق المكتوب (بدون توسعات أثناء التنفيذ).',
      ],
      validUntil: 'حسب توفر السعة (Limited slots)',
      targetAudience: 'شركات ناشئة، متاجر، عيادات، خدمات محلية',
      featured: true,
      ctaTo: '/offer',
      ctaLabel: 'افتح العرض الآن',
    },
    {
      title: 'باقة النمو (Pro)',
      badge: 'تحويل أعلى',
      description: 'صفحة عرض /offer + تتبع GA4 + تحسين نصوص البيع.',
      highlight: 'أفضل خيار لو هدفك Leads + قياس النتائج',
      terms: [
        'يشمل إعداد أحداث Leads عبر GTM (dataLayer).',
        'تحسين Copy للهيرو + CTA + أقسام الثقة.',
        'دعم فني بعد الإطلاق (حسب الباقة).',
      ],
      validUntil: 'هذا الشهر فقط (أو حتى اكتمال السعة)',
      targetAudience: 'من يريد نظام بيع واضح + قياس وتحسين',
      featured: true,
      ctaTo: '/offer',
      ctaLabel: 'ابدأ Pro',
    },
    {
      title: 'صيانة شهرية',
      badge: 'مستمر',
      description: 'تطوير + إصلاحات + تحسينات أداء وأمان بشكل دوري.',
      highlight: 'مناسب لمن لديه موقع شغال ويريد تطوير مستمر',
      terms: [
        'ساعات شهرية محددة حسب الخطة.',
        'أولوية في التنفيذ حسب SLA.',
        'تقارير شهرية (اختياري).',
      ],
      validUntil: 'متاح دائمًا',
      targetAudience: 'شركات تحتاج تطويراً مستمراً',
      featured: false,
      ctaTo: '/consultation',
      ctaLabel: 'ناقش الصيانة',
    },
  ];

  const seasonalOffers = [
    {
      title: 'عرض رمضان',
      description: 'خصم/إضافات حسب السعة والمشاريع المقبولة.',
      icon: Sparkles,
      status: 'قريباً',
    },
    {
      title: 'عرض نهاية السنة',
      description: 'عروض على الباقات مع إضافات SEO/Tracking.',
      icon: TrendingUp,
      status: 'قريباً',
    },
  ];

  const benefits = [
    'الخصم لا يغيّر الجودة ولا يقلل المعايير.',
    'نفس معايير الكود والنظافة والاختبار.',
    'ضمان على التسليم ضمن النطاق المتفق عليه.',
    'دعم بعد الإطلاق حسب الخطة.',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Tag className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">العروض</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              اختصر الطريق. افتح عرض “7 أيام” وابدأ فورًا.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'offers_hero' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <Link
                to="/consultation"
                onClick={() => pushDL('nav_click', { target: '/consultation', source: 'offers_hero' })}
              >
                <Button size="lg" variant="outline">
                  احجز استشارة
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Zap, text: 'تنفيذ سريع' },
                { icon: Shield, text: 'أمان أساسي' },
                { icon: CheckCircle, text: 'ضمان واضح' },
              ].map((b, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-white/90">
                  <b.icon className="w-5 h-5" />
                  <span className="text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OFFERS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              العروض الحالية
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              اختار عرض واضح وابدأ التنفيذ مباشرة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  offer.featured ? 'ring-2 ring-accent-500 scale-105' : ''
                }`}
                hover={false}
              >
                {offer.featured && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 gradient-accent text-white text-sm font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {offer.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">{offer.description}</p>

                  <div className="mt-4 inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 rounded-xl text-sm font-semibold">
                    {offer.highlight}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">شروط العرض:</h4>
                  <ul className="space-y-2">
                    {offer.terms.map((term, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300"
                      >
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                    <span className="text-secondary-600 dark:text-secondary-400">متاح:</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">
                      {offer.validUntil}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>مناسب لـ:</strong> {offer.targetAudience}
                  </div>
                </div>

                <Link
                  to={offer.ctaTo}
                  className="block"
                  onClick={() =>
                    pushDL('offer_card_click', {
                      offer_title: offer.title,
                      target: offer.ctaTo,
                      source: 'offers_page',
                    })
                  }
                >
                  <Button className="w-full" variant={offer.featured ? 'primary' : 'outline'} icon={ArrowLeft}>
                    {offer.ctaLabel}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              عروض موسمية قادمة
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">ترقب العروض حسب السعة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="p-8" hover>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <offer.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-3">{offer.description}</p>
                    <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold">
                      {offer.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center" gradient>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                هل تؤثر العروض على الجودة؟
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
                لا. نفس معايير الجودة. الفرق فقط في النطاق/السعة/التوقيت.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-success-500" />
                    <span className="text-lg text-secondary-700 dark:text-secondary-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/offer"
                  onClick={() => pushDL('nav_click', { target: '/offer', source: 'offers_quality' })}
                >
                  <Button size="lg" icon={ArrowLeft}>
                    افتح عرض 7 أيام
                  </Button>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => pushDL('nav_click', { target: '/contact', source: 'offers_quality' })}
                >
                  <Button size="lg" variant="outline">
                    تواصل
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* NEWSLETTER (disabled by default) */}
      {/* ملاحظة: النشرة البريدية بدون Backend = شكل فقط ويقلل الثقة.
          لو عايزها، نربطها بـ Supabase/Resend في مرحلة لاحقة.
      */}
    </div>
  );
}
