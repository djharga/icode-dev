// src/pages/Pricing.tsx (FULL FILE — production ready, no overflow, RTL-safe)

import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowLeft,
  Zap,
  Shield,
  Rocket,
} from 'lucide-react';
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

export function Pricing() {
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز استفسر عن الباقات.',
      '',
      'نوع المشروع:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const plans = [
    {
      id: 'starter',
      title: 'باقة البداية',
      price: 'عرض 7 أيام',
      icon: Zap,
      highlight: false,
      description: 'أفضل اختيار لو عايز موقع شغال بسرعة وبدون مخاطرة.',
      features: [
        'موقع صفحة أو صفحات بسيطة',
        'تصميم احترافي متجاوب',
        'إعداد SEO أساسي',
        'أداء وسرعة ممتازة',
        'تسليم خلال 7 أيام',
        'دعم بعد التسليم',
      ],
      cta: 'شوف عرض 7 أيام',
      link: '/offer',
    },
    {
      id: 'business',
      title: 'باقة الأعمال',
      price: 'حسب المشروع',
      icon: Rocket,
      highlight: true,
      description: 'للشركات اللي محتاجة حضور رقمي قوي وقابل للتوسع.',
      features: [
        'موقع متعدد الصفحات',
        'تصميم UI/UX مخصص',
        'SEO متقدم',
        'لوحة تحكم',
        'تكامل نماذج واتساب',
        'اختبارات جودة وأداء',
      ],
      cta: 'اطلب عرض سعر',
      link: '/contact',
    },
    {
      id: 'enterprise',
      title: 'حلول مخصصة',
      price: 'تسعير مرن',
      icon: Shield,
      highlight: false,
      description: 'أنظمة وتطبيقات مصممة خصيصًا حسب احتياجك.',
      features: [
        'تحليل كامل للاحتياج',
        'أنظمة مخصصة / SaaS',
        'أمان متقدم',
        'قابلية توسع عالية',
        'توثيق كامل',
        'دعم تقني مستمر',
      ],
      cta: 'احجز استشارة',
      link: '/consultation',
    },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              الأسعار والباقات
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              اختر الباقة المناسبة لك — أو ابدأ بعرض 7 أيام بدون مخاطرة.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { source: 'pricing_hero', target: '/offer' })}
              >
                <Button size="lg" variant="secondary" icon={ArrowLeft}>
                  شوف عرض 7 أيام
                </Button>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  pushDL('lead_click', {
                    source: 'pricing_hero',
                    channel: 'whatsapp',
                  })
                }
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  تواصل واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 relative ${
                  plan.highlight ? 'ring-2 ring-primary-500 shadow-xl' : ''
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-sm font-bold bg-primary-600 text-white rounded-full">
                    الأكثر طلبًا
                  </span>
                )}

                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                  {plan.title}
                </h2>

                <p className="text-primary-600 font-bold text-lg mb-4">
                  {plan.price}
                </p>

                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link}
                  onClick={() =>
                    pushDL('pricing_click', {
                      plan: plan.id,
                      target: plan.link,
                    })
                  }
                >
                  <Button className="w-full" icon={ArrowLeft}>
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <Card className="p-12 text-center" glass>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              محتار تختار أنهي باقة؟
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
              كلمنا وحدد احتياجك، وإحنا نرشح لك الحل الأنسب بدون التزام.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                onClick={() =>
                  pushDL('nav_click', { source: 'pricing_final', target: '/consultation' })
                }
              >
                <Button size="lg" icon={ArrowLeft}>
                  احجز استشارة
                </Button>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  pushDL('lead_click', {
                    source: 'pricing_final',
                    channel: 'whatsapp',
                  })
                }
              >
                <Button size="lg" variant="outline">
                  واتساب
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
