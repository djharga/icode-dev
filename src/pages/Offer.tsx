// src/pages/Offer.tsx
// PHASE 2.3 — KILLER SALES PAGE
// هدف الصفحة: Lead واحد واضح → WhatsApp
// Tracking: dataLayer (GTM)

import { ArrowLeft, CheckCircle, Shield, Zap, Clock, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function pushDL(event: string, payload: Record<string, unknown> = {}) {
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ event, ...payload });
}

export function Offer() {
  // ====== CONFIG (عدّل الرقم فقط) ======
  const WHATSAPP_PHONE = '201234567890'; // ضع رقمك
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أبدأ عرض (موقع شغال خلال 7 أيام).',
      '',
      'اسم المشروع:',
      'نوع النشاط (شركة/متجر/عيادة/خدمة):',
      'الهدف (مبيعات/حجز/تعريف):',
      'عدد الصفحات:',
      'هل المحتوى جاهز؟ (نعم/جزئي/لا):',
      'موعد الإطلاق:',
      'الميزانية المتوقعة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const bullets = [
    { icon: Clock, text: 'تسليم خلال 7 أيام (لنطاق واضح)' },
    { icon: Shield, text: 'أمان أساسي + حماية النماذج' },
    { icon: Zap, text: 'أداء عالي وتجربة مستخدم محسّنة' },
    { icon: CheckCircle, text: 'ضمان واضح أو لا تدفع' },
  ];

  const packages = [
    {
      name: 'Basic',
      price: 'ابدأ من —',
      best: false,
      desc: 'موقع تعريفي سريع لبدء الظهور',
      items: [
        'صفحة رئيسية + حتى 3 صفحات',
        'تصميم RTL احترافي',
        'CTA واتساب + نموذج تواصل',
        'SEO أساسي (Title/Meta/OG)',
        'تحسين سرعة وصور',
        'تسليم 7 أيام',
      ],
    },
    {
      name: 'Pro',
      price: 'الأكثر طلبًا',
      best: true,
      desc: 'تحويل أعلى + قياس النتائج',
      items: [
        'صفحة رئيسية + حتى 6 صفحات',
        'صفحة بيع /offer مخصصة',
        'إعداد GA4/GTM (أحداث Leads)',
        'تحسين نصوص البيع (Copy)',
        'تحسين Core Web Vitals',
        'تسليم 7–10 أيام',
      ],
    },
    {
      name: 'Business',
      price: 'حسب النطاق',
      best: false,
      desc: 'قابلية توسع للشركات',
      items: [
        'حتى 12 صفحة',
        'أقسام مخصصة حسب النشاط',
        'تهيئة توسع مستقبلية',
        'تحسينات أمان إضافية',
        'دعم بعد الإطلاق',
      ],
    },
  ];

  const faq = [
    {
      q: 'هل فعلاً خلال 7 أيام؟',
      a: 'نعم إذا كان النطاق واضحًا والمحتوى متوفرًا. أي توسع خارج النطاق يؤثر على المدة.',
    },
    {
      q: 'ما معنى “أو لا تدفع شيئًا”؟',
      a: 'إذا لم نلتزم بموعد التسليم المتفق عليه لنفس النطاق المكتوب، يتم إلغاء مستحقات نفس المرحلة.',
    },
    {
      q: 'هل السعر يشمل الدومين والاستضافة؟',
      a: 'التطوير فقط. يمكننا تجهيز الدومين/الاستضافة حسب اختيارك.',
    },
    {
      q: 'هل يوجد دعم بعد الإطلاق؟',
      a: 'نعم دعم أساسي لتصحيح الأخطاء، مع خيارات صيانة شهرية.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              موقع شغال خلال <span className="text-gradient">7 أيام</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8">
              لو محتاج نتيجة حقيقية بسرعة — ده العرض المناسب.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'offer_hero_whatsapp' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  ابدأ على واتساب الآن
                </Button>
              </a>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اختر الباقة
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              نطاق واضح = تسليم سريع.
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

                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="text-3xl font-extrabold mb-2">{p.price}</div>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">{p.desc}</p>

                <ul className="space-y-3 mb-8">
                  {p.items.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => pushDL('lead_click', { source: `offer_package_${p.name}` })}
                >
                  <Button size="lg" icon={ArrowLeft}>
                    ابدأ {p.name}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE + REQUIREMENTS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-10" hover>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-7 h-7 text-primary-600" />
                <h3 className="text-2xl font-bold">الضمان</h3>
              </div>
              <p className="text-secondary-700 dark:text-secondary-200">
                لو لم نلتزم بموعد التسليم لنفس النطاق المتفق عليه، لا تدفع عن نفس المرحلة.
              </p>
            </Card>

            <Card className="p-10" hover>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-7 h-7 text-primary-600" />
                <h3 className="text-2xl font-bold">ماذا نحتاج منك؟</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'اسم النشاط والهدف',
                  'عدد الصفحات',
                  'شعار/ألوان (إن وجدت)',
                  'محتوى مبدئي',
                  '3 مواقع مرجعية',
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                    <span>{x}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أسئلة شائعة</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              إجابات مباشرة.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faq.map((f) => (
              <Card key={f.q} className="p-8" hover>
                <h3 className="text-xl font-bold mb-3">{f.q}</h3>
                <p className="text-secondary-700 dark:text-secondary-200">{f.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => pushDL('lead_click', { source: 'offer_footer_whatsapp' })}
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
