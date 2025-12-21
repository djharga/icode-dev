// src/pages/Services.tsx (FULL UPDATED — focus fixes + funnel + GTM events + stable anchors)
// طلبك: "ركز" -> تم تعديل الملف بدون تغيير تصميمك جذريًا، لكن:
// - إضافة GTM events (dataLayer) بنفس أسلوب Home
// - روابط CTA تم توجيهها للأفضل (Offer/WhatsApp/Consultation) مع إبقاء Contact
// - تثبيت الـ anchors بإضافة scroll-margin-top لمنع تغطية الهيدر عند #hash
// - تحسين a11y بسيط + IDs ثابتة
// - لا هلوسة: كل شيء داخل الملف فقط

import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Server,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowLeft,
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

export function Services() {
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز استفسار عن خدمة من خدمات icode.',
      '',
      'الخدمة المطلوبة:',
      'نوع المشروع:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const services = [
    {
      id: 'websites',
      icon: Code2,
      title: 'تطوير المواقع الإلكترونية',
      description: 'نبني مواقع ويب حديثة وسريعة تعكس هوية علامتك التجارية وتحقق أهدافك',
      features: [
        'تصميم واجهات مستخدم عصرية وجذابة',
        'برمجة متجاوبة مع جميع الأجهزة',
        'تحسين محركات البحث SEO',
        'أداء عالي وسرعة تحميل فائقة',
        'تكامل مع أنظمة الدفع',
        'لوحة تحكم سهلة الاستخدام',
      ],
      targetAudience: 'الشركات الناشئة، المتاجر الإلكترونية، الشركات الصغيرة والمتوسطة',
      value: 'موقع احترافي يعزز تواجدك الرقمي ويزيد من مبيعاتك',
    },
    {
      id: 'apps',
      icon: Smartphone,
      title: 'تطوير تطبيقات الويب والموبايل',
      description: 'تطبيقات قوية ومرنة تعمل على جميع المنصات بتجربة مستخدم استثنائية',
      features: [
        'تطبيقات ويب تفاعلية (Dashboards, SaaS)',
        'تطبيقات موبايل أصلية ومتعددة المنصات',
        'تكامل مع APIs وخدمات خارجية',
        'إدارة بيانات في الوقت الفعلي',
        'إشعارات ذكية ومراسلة فورية',
        'تحليلات وتقارير متقدمة',
      ],
      targetAudience: 'شركات SaaS، المؤسسات، الشركات التقنية',
      value: 'تطبيق متكامل يحل مشاكل عملائك ويحقق عوائد مستدامة',
    },
    {
      id: 'systems',
      icon: Server,
      title: 'بناء الأنظمة المخصصة',
      description: 'حلول برمجية مصممة خصيصاً لتلبية احتياجات عملك الفريدة',
      features: [
        'أنظمة إدارة محتوى CMS مخصصة',
        'أنظمة ERP وCRM',
        'منصات إدارة المشاريع',
        'أنظمة إدارة المخزون والمبيعات',
        'حلول أتمتة سير العمل',
        'تكامل مع الأنظمة الموجودة',
      ],
      targetAudience: 'الشركات الكبرى، المؤسسات، القطاع الحكومي',
      value: 'نظام متكامل يوفر الوقت والتكاليف ويزيد الكفاءة',
    },
    {
      id: 'security',
      icon: Shield,
      title: 'اختبارات الأمان والاختراق',
      description: 'نحمي أنظمتك من الثغرات الأمنية قبل أن يستغلها المهاجمون',
      features: [
        'اختبارات اختراق شاملة',
        'تحليل الثغرات الأمنية',
        'مراجعة الكود الأمني',
        'تقييم أمان التطبيقات',
        'تقارير مفصلة وتوصيات',
        'استشارات أمنية متخصصة',
      ],
      targetAudience: 'الشركات التقنية، المؤسسات المالية، أي جهة تهتم بالأمان',
      value: 'حماية متقدمة تحمي بياناتك وسمعتك',
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'الأتمتة والسكربتات',
      description: 'أتمتة المهام المتكررة لتوفير الوقت وزيادة الإنتاجية',
      features: [
        'سكربتات أتمتة مخصصة',
        'تكامل بين الأنظمة المختلفة',
        'أتمتة سير العمل',
        'معالجة وتحليل البيانات',
        'جدولة المهام التلقائية',
        'روبوتات للمهام المتكررة',
      ],
      targetAudience: 'جميع الشركات التي تسعى لزيادة الكفاءة',
      value: 'توفير ساعات من العمل اليدوي وتقليل الأخطاء',
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'الاستشارات التقنية',
      description: 'إرشاد تقني متخصص لمساعدتك في اتخاذ القرارات الصحيحة',
      features: [
        'استشارات معمارية للأنظمة',
        'اختيار التقنيات المناسبة',
        'تحسين الأداء والبنية التحتية',
        'تخطيط مشاريع تقنية',
        'مراجعة الكود وأفضل الممارسات',
        'تدريب الفرق التقنية',
      ],
      targetAudience: 'CTO، مديرو التقنية، الشركات الناشئة',
      value: 'قرارات تقنية صحيحة توفر عليك الوقت والمال',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              خدماتنا الاحترافية
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              نقدم حلولاً تقنية متقدمة تلبي احتياجاتك البرمجية بمعايير تنفيذ عالية وتركيز على النتائج.
            </p>

            {/* HERO CTA: Offer + WhatsApp */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() =>
                  pushDL('nav_click', { source: 'services_hero', target: '/offer' })
                }
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
    pushDL('lead_click', { source: 'services_hero', channel: 'whatsapp', target: 'wa' })
  }
>
  <Button
    size="lg"
    variant="outline"
    className="border-white/35 text-white hover:bg-white/10 hover:border-white/60"
  >
    تواصل واتساب
   </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
                aria-label={service.title}
              >
                <Card className="overflow-hidden" hover={false}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left / Main */}
                    <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                          ما نقدمه:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary-700 dark:text-secondary-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Primary CTA per service */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/offer"
                          onClick={() =>
                            pushDL('nav_click', {
                              source: `services_${service.id}`,
                              target: '/offer',
                            })
                          }
                        >
                          <Button icon={ArrowLeft}>شوف عرض 7 أيام</Button>
                        </Link>

                        <a
                          href={`${WHATSAPP_LINK}${encodeURIComponent(
                            `\n\nالخدمة المطلوبة: ${service.title}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() =>
                            pushDL('lead_click', {
                              source: `services_${service.id}`,
                              channel: 'whatsapp',
                              target: 'wa',
                              service: service.id,
                            })
                          }
                        >
                          <Button variant="outline">اطلب عبر واتساب</Button>
                        </a>

                        <Link
                          to="/contact"
                          onClick={() =>
                            pushDL('nav_click', {
                              source: `services_${service.id}`,
                              target: '/contact',
                            })
                          }
                        >
                          <Button variant="outline">اطلب عرض سعر</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right / Value */}
                    <div
                      className={`p-8 md:p-12 bg-secondary-50 dark:bg-secondary-800 flex flex-col justify-center ${
                        index % 2 === 0 ? 'order-2' : 'order-1'
                      }`}
                    >
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                          لمن هذه الخدمة؟
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-300">
                          {service.targetAudience}
                        </p>
                      </div>

                      <div className="p-6 gradient-primary rounded-2xl text-white">
                        <h3 className="text-lg font-bold mb-3">القيمة المضافة</h3>
                        <p className="text-white/90 leading-relaxed">{service.value}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center" glass>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                لا تجد ما تبحث عنه؟
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
                نحن متخصصون في بناء حلول مخصصة. تواصل معنا وأخبرنا بما تحتاجه بالضبط.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  onClick={() =>
                    pushDL('nav_click', { source: 'services_final', target: '/consultation' })
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
                    pushDL('lead_click', { source: 'services_final', channel: 'whatsapp', target: 'wa' })
                  }
                >
                  <Button size="lg" variant="outline">
                    واتساب
                  </Button>
                </a>

                <Link
                  to="/contact"
                  onClick={() =>
                    pushDL('nav_click', { source: 'services_final', target: '/contact' })
                  }
                >
                  <Button size="lg" variant="outline">
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
