// src/pages/Home.tsx (FULL UPDATED — zero hallucination, your structure kept, fixes are surgical)
// إصلاحات إلزامية:
// 1) WHATSAPP_PHONE كان placeholder غلط -> نفس رقمك الحقيقي 201507619503
// 2) animation-delay-100 / -150 مش موجودين في index.css -> استبدالها بـ 200/400 (الموجودين فقط)
// 3) إزالة import غير مستخدم (Shield كان مستخدم، تمام) + ترتيب
// 4) تحسين events بأسماء ثابتة + payload واضح
// 5) تحسين تحميل صورة البانر: decoding + fetchpriority + sizes
// 6) لا تغيير في الفانل: Home -> WhatsApp OR /offer فقط

import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code2,
  Smartphone,
  Server,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
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

export function Home() {
  // ====== CONFIG (REAL) ======
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أبدأ عرض (موقع شغال خلال 7 أيام).',
      '',
      'اسم المشروع:',
      'نوع المشروع (شركة/متجر/عيادة/شخصي):',
      'الهدف (مبيعات/تعريف/حجز):',
      'الصفحات المطلوبة:',
      'هل لديك دومين/استضافة؟',
      'الميزانية المتوقعة:',
      'موعد الإطلاق:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const services = [
    { icon: Code2, title: 'تطوير المواقع', description: 'مواقع حديثة وسريعة بتقنيات متقدمة' },
    { icon: Smartphone, title: 'تطبيقات الموبايل', description: 'تطبيقات أصلية ومتعددة المنصات' },
    { icon: Server, title: 'الأنظمة المخصصة', description: 'حلول برمجية تناسب احتياجاتك' },
    { icon: Shield, title: 'الأمن السيبراني', description: 'اختبارات اختراق وتحليل ثغرات' },
    { icon: Zap, title: 'الأتمتة', description: 'سكربتات وحلول لأتمتة الأعمال' },
    { icon: Users, title: 'استشارات تقنية', description: 'توجيه تقني واستشارات متخصصة' },
  ];

  const projects = [
    {
      title: 'منصة Fintech',
      category: 'التقنية المالية',
      description: 'منصة مالية متكاملة لإدارة المدفوعات والمحافظ الرقمية',
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'نظام إدارة المحتوى',
      category: 'SaaS',
      description: 'نظام CMS متقدم مع لوحة تحكم قوية وإدارة محتوى ديناميكية',
      tech: ['Next.js', 'Supabase', 'TypeScript'],
    },
    {
      title: 'متجر إلكتروني',
      category: 'E-commerce',
      description: 'منصة تجارة إلكترونية كاملة مع نظام دفع آمن',
      tech: ['React', 'Express', 'MongoDB'],
    },
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مدير تقني',
      company: 'TechStart',
      content: 'فريق icode قدم لنا حلولاً تقنية متقدمة فاقت توقعاتنا. الاحترافية والجودة واضحة في كل تفصيل.',
      rating: 5,
    },
    {
      name: 'سارة العلي',
      role: 'مؤسسة',
      company: 'Digital Solutions',
      content: 'تجربة رائعة من البداية للنهاية. التواصل ممتاز والتسليم في الوقت المحدد.',
      rating: 5,
    },
    {
      name: 'خالد السعيد',
      role: 'صاحب شركة',
      company: 'E-Shop Pro',
      content: 'بنوا لنا متجراً إلكترونياً احترافياً ساهم في زيادة مبيعاتنا بنسبة 300%.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '150+', label: 'مشروع منجز' },
    { value: '100+', label: 'عميل راضٍ' },
    { value: '5+', label: 'سنوات خبرة' },
    { value: '98%', label: 'نسبة الرضا' },
  ];

  const workProcess = [
    { number: '01', title: 'التواصل والفهم', description: 'نستمع لمتطلباتك ونفهم أهدافك بدقة' },
    { number: '02', title: 'التخطيط والتصميم', description: 'نضع خطة محكمة ونصمم الحل الأمثل' },
    { number: '03', title: 'التطوير والاختبار', description: 'نبني المنتج بأعلى معايير الجودة' },
    { number: '04', title: 'الإطلاق والدعم', description: 'نطلق المشروع ونقدم دعماً مستمراً' },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-primary opacity-10 bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-secondary-900/50 dark:to-secondary-900" />

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 animate-fade-in">
                  نبني <span className="text-gradient">الحلول البرمجية</span>
                  <br />
                  التي تصنع الفارق
                </h1>

                <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed animate-slide-up">
                  نحوّل فكرتك لموقع شغال خلال 7 أيام — أو لا تدفع شيئًا.
                </p>
                <p className="text-base md:text-lg text-secondary-500 dark:text-secondary-400 mb-8 animate-slide-up animation-delay-200">
                  مناسب للشركات الناشئة، المتاجر، العيادات، والمشاريع اللي محتاجة نتائج سريعة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 animate-slide-up animation-delay-400">
                  {[
                    { icon: CheckCircle, text: 'تسليم بموعد واضح + خطة عمل' },
                    { icon: Shield, text: 'أمان أساسي + إعدادات حماية' },
                    { icon: Zap, text: 'سرعة عالية وتجربة مستخدم محسّنة' },
                    { icon: Award, text: 'كود نظيف ومعايير صناعية' },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 justify-center lg:justify-start text-secondary-700 dark:text-secondary-200"
                    >
                      <b.icon className="w-5 h-5 text-primary-600" />
                      <span className="text-sm md:text-base">{b.text}</span>
                    </div>
                  ))}
                </div>

                {/* PHASE 3 CTA: WhatsApp + /offer only */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      pushDL('lead_click', {
                        channel: 'whatsapp',
                        source: 'home_hero',
                        target: 'wa',
                      })
                    }
                  >
                    <Button size="lg" icon={ArrowLeft}>
                      ابدأ على واتساب الآن
                    </Button>
                  </a>

                  <Link
                    to="/offer"
                    onClick={() =>
                      pushDL('nav_click', {
                        source: 'home_hero',
                        target: '/offer',
                      })
                    }
                  >
                    <Button size="lg" variant="outline">
                      شوف عرض 7 أيام
                    </Button>
                  </Link>
                </div>

                <p className="mt-5 text-sm text-secondary-500 dark:text-secondary-400">
                  ملاحظة: قبل البدء بنحدد النطاق والميزانية بوضوح لتجنب إهدار الوقت.
                </p>
              </div>

              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-2xl animate-fade-in animation-delay-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl rounded-full" />
                  <img
                    src="/banar.png"
                    alt="icode - واجهتك قدام العالم"
                    className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              لماذا <span className="text-gradient">icode</span>؟
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
              نجمع بين الخبرة التقنية العميقة والفهم الشامل لاحتياجات الأعمال لنقدم حلولاً برمجية تتجاوز التوقعات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'جودة عالية', desc: 'كود نظيف ومعايير صناعية' },
              { icon: Zap, title: 'تسليم سريع', desc: 'نلتزم بالمواعيد المحددة' },
              { icon: Shield, title: 'أمان متقدم', desc: 'حماية بيانات على أعلى مستوى' },
              { icon: Users, title: 'دعم مستمر', desc: 'نكون معك بعد الإطلاق' },
              { icon: TrendingUp, title: 'قابلية التوسع', desc: 'حلول تنمو مع عملك' },
              { icon: CheckCircle, title: 'ضمان الجودة', desc: 'نضمن رضاك الكامل' },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center" hover>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">{item.desc}</p>
              </Card>
            ))}
          </div>

          {/* MID CTA (route to offer) */}
          <div className="text-center mt-12">
            <Link
              to="/offer"
              onClick={() => pushDL('nav_click', { target: '/offer', source: 'home_whyus' })}
            >
              <Button size="lg" variant="outline" icon={ArrowLeft}>
                افتح عرض 7 أيام
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              حلول شاملة تغطي كل احتياجاتك التقنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8" hover>
                <service.icon className="w-12 h-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              onClick={() =>
                pushDL('nav_click', { target: '/services', source: 'home_services' })
              }
            >
              <Button size="lg" variant="outline" icon={ArrowLeft}>
                عرض جميع الخدمات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">طريقة عملنا</h2>
            <p className="text-xl text-secondary-300">منهجية واضحة وشفافة في كل مرحلة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-secondary-300">{step.description}</p>
              </div>
            ))}
          </div>

          {/* PROCESS CTA */}
          <div className="text-center mt-12">
            <Link
              to="/offer"
              onClick={() => pushDL('nav_click', { target: '/offer', source: 'home_process' })}
            >
              <Button size="lg" variant="secondary" icon={ArrowLeft}>
                ابدأ بعرض 7 أيام
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              مشاريع مختارة
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              نماذج من أعمالنا الناجحة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden" hover>
                <div className="h-48 gradient-primary opacity-20" />
                <div className="p-8">
                  <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              onClick={() =>
                pushDL('nav_click', { target: '/portfolio', source: 'home_projects' })
              }
            >
              <Button size="lg" variant="outline" icon={ArrowLeft}>
                عرض جميع الأعمال
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              آراء عملائنا
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              ثقة عملائنا هي أكبر إنجازاتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8" hover>
                <div className="flex gap-1 mb-6" aria-label={`تقييم ${testimonial.rating} من 5`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-accent-500" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-secondary-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* TESTIMONIAL CTA */}
          <div className="text-center mt-12">
            <Link
              to="/offer"
              onClick={() => pushDL('nav_click', { target: '/offer', source: 'home_testimonials' })}
            >
              <Button size="lg" variant="outline" icon={ArrowLeft}>
                خُد العرض الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (PHASE 3) */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="p-12 md:p-16 text-center" glass>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto">
              ابدأ فورًا بعرض 7 أيام أو افتح واتساب وحدد النطاق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  pushDL('lead_click', {
                    channel: 'whatsapp',
                    source: 'home_footer',
                    target: 'wa',
                  })
                }
              >
                <Button size="lg" icon={ArrowLeft}>
                  ابدأ على واتساب الآن
                </Button>
              </a>
              <Link
                to="/offer"
                onClick={() =>
                  pushDL('nav_click', {
                    source: 'home_footer',
                    target: '/offer',
                  })
                }
              >
                <Button size="lg" variant="outline">
                  شوف عرض 7 أيام
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
