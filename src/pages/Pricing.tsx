// src/pages/Pricing.tsx (FULL UPDATED — Global-grade + Funnel + No $ + EGP + GTM)
// هدف الصفحة: تحويل واضح إلى (/offer) أو WhatsApp فقط + إزالة تسعير بالدولار
// Copy-Paste جاهز

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Star, Shield, Zap, Timer } from 'lucide-react';
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

type Tier = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  features: string[];
  duration: string;
  support: string;
  recommended?: boolean;
};

export function Pricing() {
  // ===== Funnel config =====
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = useMemo(
    () =>
      encodeURIComponent(
        [
          'عايز عرض سعر.',
          '',
          'نوع المشروع:',
          'الباقة (إن وجدت):',
          'عدد الصفحات/الأقسام:',
          'هل يوجد دومين/استضافة؟',
          'موعد الإطلاق:',
          'ميزانية تقريبية:',
          'تفاصيل مختصرة:',
        ].join('\n')
      ),
    []
  );
  const WHATSAPP_LINK = useMemo(
    () => `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`,
    [WHATSAPP_PREFILL]
  );

  // ===== Pricing (EGP) =====
  // ملاحظة: الأرقام أمثلة منطقية للسوق المصري — عدّلها حسب سياستك إن لزم.
  const pricingTiers: Tier[] = [
    {
      id: 'basic',
      name: 'الباقة الأساسية',
      subtitle: 'للموقع التعريفي والصفحات البسيطة',
      price: '4,999 جنيه',
      priceNote: 'نطاق محدد — موقع واحد',
      features: [
        'موقع 3–5 صفحات (رئيسية + خدمات + من نحن + تواصل + صفحة إضافية)',
        'تصميم متجاوب لجميع الأجهزة',
        'SEO أساسي (Meta + OG + سرعة + فهرسة)',
        'نموذج تواصل واحد + ربط واتساب',
        'إعدادات أمان أساسية + SSL',
        'تسليم ملفات المشروع + إرشادات تشغيل',
        'دعم فني 14 يوم بعد التسليم',
      ],
      duration: '5–10 أيام عمل',
      support: 'واتساب (ساعات العمل)',
    },
    {
      id: 'pro',
      name: 'الباقة الاحترافية',
      subtitle: 'للشركات والأعمال الجادة',
      price: '12,999 جنيه',
      priceNote: 'الأكثر طلباً — موقع واحد',
      features: [
        'عدد صفحات أكبر + أقسام تسويقية كاملة',
        'تجربة مستخدم محسّنة (Funnel + CTAs + Sections منظمة)',
        'SEO متقدم (هيكلة + صفحات خدمة + داخلي)',
        'نماذج متعددة (تواصل/استشارة) + تخزين Leads (Supabase)',
        'تحسين أداء وتحميل + Lazy loading',
        'تهيئة GTM Events أساسية للقياس',
        'جولتان مراجعة أثناء التنفيذ',
        'دعم فني 30 يوم بعد التسليم',
      ],
      duration: '10–20 يوم عمل',
      support: 'واتساب سريع + أولوية أعلى',
      recommended: true,
    },
    {
      id: 'advanced',
      name: 'الباقة المتقدمة',
      subtitle: 'لمواقع كبيرة / متطلبات خاصة',
      price: '24,999 جنيه',
      priceNote: 'حسب النطاق — موقع واحد',
      features: [
        'تصميم مخصص بالكامل + نظام أقسام قابل للتوسع',
        'لوحة إدارة/بوابة (حسب الحاجة) أو تكاملات خارجية',
        'SEO احترافي + تحسين صفحات متعددة',
        'تحليلات متقدمة + Events أدق (حسب مسار المستخدم)',
        'أمان أعلى (مراجعة إعدادات + Hardening أساسي)',
        'مستندات تسليم (Runbook) + تدريب مختصر',
        '3 جولات مراجعة أثناء التنفيذ',
        'دعم فني 60 يوم بعد التسليم',
      ],
      duration: '20–35 يوم عمل',
      support: 'أولوية أعلى (حسب الاتفاق)',
    },
  ];

  const otherServices = [
    { title: 'تطبيقات الموبايل', description: 'iOS/Android (Native أو Cross-platform)', note: 'تسعير حسب التفاصيل' },
    { title: 'الأنظمة المخصصة', description: 'CRM/ERP/لوحات متابعة/بوابات عملاء', note: 'تسعير حسب النطاق' },
    { title: 'الأمن السيبراني', description: 'VAPT + مراجعة إعدادات + تقارير', note: 'حسب حجم النظام' },
    { title: 'الاستشارات التقنية', description: 'تخطيط/معمارية/مراجعة كود', note: 'جلسات مدفوعة/باقات' },
    { title: 'الصيانة والدعم', description: 'صيانة شهرية + تحديثات + مراقبة', note: 'باقات شهرية' },
    { title: 'الأتمتة والسكربتات', description: 'Automation + تكامل بين الأنظمة', note: 'حسب الهدف' },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">الأسعار</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              باقات واضحة وشفافة. هدفنا: موقع سريع + Funnel واضح + قياس قابل للتتبع.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-2xl py-4">
                <Timer className="w-5 h-5" />
                <span className="font-semibold">تسليم بموعد محدد</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-2xl py-4">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">أداء سريع</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-2xl py-4">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">أمان أساسي</span>
              </div>
            </div>

            {/* Funnel CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'pricing_hero' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'pricing_hero_whatsapp' })}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/90"
                >
                  تواصل على واتساب
                </Button>
              </a>
            </div>

            <p className="text-sm mt-5 text-white/80">
              ملاحظة: الأرقام تعكس نطاقات شائعة. التسعير النهائي يتحدد بعد تحديد النطاق (Scope).
            </p>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={[
                  'p-8 relative h-full',
                  tier.recommended ? 'ring-2 ring-primary-500 shadow-soft' : '',
                ].join(' ')}
                hover={false}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 gradient-primary text-white text-sm font-bold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    الأكثر طلباً
                  </div>
                )}

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{tier.name}</h2>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">{tier.subtitle}</p>

                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-1">{tier.price}</div>
                    <div className="text-sm text-secondary-500 dark:text-secondary-400">{tier.priceNote}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">ما يشمله:</h3>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg space-y-2">
                  <div className="flex justify-between gap-4">
                    <span className="text-secondary-600 dark:text-secondary-400">مدة التنفيذ:</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">{tier.duration}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-secondary-600 dark:text-secondary-400">الدعم الفني:</span>
                    <span className="font-semibold text-secondary-900 dark:text-white">{tier.support}</span>
                  </div>
                </div>

                {/* Funnel-only CTA: WhatsApp or /offer */}
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    to="/offer"
                    onClick={() => pushDL('nav_click', { target: '/offer', source: 'pricing_tier', tier: tier.id })}
                  >
                    <Button className="w-full" icon={ArrowLeft}>
                      ابدأ بعرض 7 أيام
                    </Button>
                  </Link>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => pushDL('lead_click', { source: 'pricing_tier_whatsapp', tier: tier.id })}
                  >
                    <Button className="w-full" variant="outline">
                      اسأل عن الباقة على واتساب
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* CUSTOM PROJECT BOX */}
          <div className="mt-16">
            <Card className="p-8 md:p-12 text-center glass">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white mb-4">
                تحتاج نطاق مختلف أو خدمة غير المواقع؟
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto">
                تطبيق موبايل / نظام مخصص / أمان / أتمتة… يتم تسعيره بعد تحديد النطاق والنتيجة المطلوبة.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-right">
                {[
                  { title: 'فاتورة سعر مفصلة', desc: 'حسب المتطلبات ونطاق التنفيذ' },
                  { title: 'جدول زمني واضح', desc: 'مراحل + تسليمات قابلة للقياس' },
                  { title: 'تفصيل تقني', desc: 'Tech stack + حدود + ضمانات' },
                ].map((x) => (
                  <div key={x.title} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-secondary-900 dark:text-white mb-1">{x.title}</h4>
                      <p className="text-sm text-secondary-600 dark:text-secondary-300">{x.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/offer" onClick={() => pushDL('nav_click', { target: '/offer', source: 'pricing_custom' })}>
                  <Button size="lg" icon={ArrowLeft}>
                    افتح عرض 7 أيام
                  </Button>
                </Link>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => pushDL('lead_click', { source: 'pricing_custom_whatsapp' })}
                >
                  <Button size="lg" variant="outline">
                    تواصل على واتساب
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">خدمات أخرى</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                لهذه الخدمات: تواصل سريع على واتساب أو ابدأ بعرض 7 أيام (لو النطاق مناسب).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service, index) => (
                <Card key={index} className="p-6" hover>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                    {service.note}
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <Link
                      to="/offer"
                      onClick={() => pushDL('nav_click', { target: '/offer', source: 'pricing_other_service', service: service.title })}
                    >
                      <Button className="w-full" icon={ArrowLeft}>
                        ابدأ بعرض 7 أيام
                      </Button>
                    </Link>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => pushDL('lead_click', { source: 'pricing_other_service_whatsapp', service: service.title })}
                    >
                      <Button className="w-full" variant="outline">
                        اسأل على واتساب
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT + GUARANTEE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 md:p-12 text-center glass">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                شروط الدفع والضمان
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                {[
                  { t: 'طريقة الدفع', d: '50% عند البدء و50% عند التسليم النهائي (أو حسب الاتفاق).' },
                  { t: 'الضمان', d: 'ضمان جودة 14–60 يوم حسب الباقة والنطاق.' },
                  { t: 'المراجعات', d: 'جولات مراجعة مجانية ضمن النطاق المتفق عليه.' },
                ].map((x) => (
                  <div key={x.t}>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{x.t}</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/terms" onClick={() => pushDL('nav_click', { target: '/terms', source: 'pricing_terms' })}>
                  <Button variant="outline" icon={ArrowLeft}>
                    الشروط والأحكام
                  </Button>
                </Link>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => pushDL('lead_click', { source: 'pricing_terms_whatsapp' })}
                >
                  <Button variant="outline">اسأل عن التفاصيل</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ الآن بدون تشتت</h2>
            <p className="text-xl mb-8 text-white/90">
              إمّا تفتح عرض 7 أيام وتبدأ بنطاق واضح، أو تراسلنا على واتساب لتحديد المتطلبات.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offer" onClick={() => pushDL('nav_click', { target: '/offer', source: 'pricing_footer' })}>
                <Button size="lg" variant="secondary" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'pricing_footer_whatsapp' })}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/90"
                >
                  تواصل على واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
