// src/pages/About.tsx (FULL UPDATED — Funnel + GTM + WhatsApp unified + no overflow)

import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Code2,
  Shield,
  Zap,
  Users,
  TrendingUp,
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

export function About() {
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أعرف تفاصيل أكتر عن خدماتكم.',
      '',
      'نوع المشروع:',
      'الهدف:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const values = [
    {
      icon: Heart,
      title: 'الشغف بالتميز',
      description: 'نسعى دائماً لتقديم أفضل ما لدينا في كل مشروع',
    },
    {
      icon: Shield,
      title: 'الأمانة والشفافية',
      description: 'نلتزم بالوضوح الكامل في التواصل والتعاملات',
    },
    {
      icon: Users,
      title: 'التركيز على العميل',
      description: 'نجاح عملائنا هو نجاحنا، ونضع احتياجاتهم في المقام الأول',
    },
    {
      icon: Zap,
      title: 'الابتكار المستمر',
      description: 'نواكب أحدث التقنيات ونطبق أفضل الممارسات',
    },
    {
      icon: TrendingUp,
      title: 'التطوير المستمر',
      description: 'نستثمر في تطوير مهاراتنا ومعرفتنا باستمرار',
    },
    {
      icon: Code2,
      title: 'الجودة قبل السرعة',
      description: 'لا نساوم على جودة الكود أو المنتج النهائي',
    },
  ];

  const techStacks = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Python', 'Django', 'Express', 'NestJS', 'FastAPI'],
    mobile: ['React Native', 'Flutter', 'Expo', 'iOS Native', 'Android Native'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'GitHub Actions'],
    other: ['GraphQL', 'WebSocket', 'REST API', 'Microservices', 'TensorFlow', 'WebRTC'],
  };

  const methodology = [
    {
      phase: 'التحليل والفهم',
      description: 'نبدأ بفهم عميق لأهداف المشروع واحتياجات العمل',
    },
    {
      phase: 'التخطيط والتصميم',
      description: 'نضع خطة تفصيلية ونصمم المعمارية والواجهات',
    },
    {
      phase: 'التطوير المرن',
      description: 'نطبق منهجية Agile مع تسليمات تدريجية',
    },
    {
      phase: 'الاختبار الشامل',
      description: 'نختبر كل جزء لضمان الجودة والأداء',
    },
    {
      phase: 'الإطلاق والمتابعة',
      description: 'نطلق المشروع ونقدم دعماً مستمراً',
    },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">من نحن</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              نحن فريق من المطورين المتخصصين الذين يؤمنون بقوة التكنولوجيا في تحويل الأفكار إلى واقع رقمي ناجح
            </p>

            {/* CTA (funnel) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'about_hero' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'about_hero_whatsapp' })}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/90"
                >
                  تواصل سريع
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-6">رسالتنا</h2>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    تمكين الأعمال من خلال حلول برمجية مبتكرة وعالية الجودة تساعدها على النمو والتميز في العصر الرقمي.
                    نلتزم بتقديم قيمة حقيقية لعملائنا من خلال فهم عميق لاحتياجاتهم وتحويلها إلى منتجات تقنية متفوقة.
                  </p>
                </div>
              </div>

              {/* Small CTA */}
              <Link
                to="/services"
                onClick={() => pushDL('nav_click', { target: '/services', source: 'about_mission' })}
              >
                <Button variant="outline" icon={ArrowLeft}>
                  عرض خدماتنا
                </Button>
              </Link>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-6">رؤيتنا</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    أن نكون الخيار الأول للشركات والمؤسسات في المنطقة عندما يتعلق الأمر بالحلول البرمجية المتقدمة.
                    نطمح لبناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والنتائج الملموسة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              لماذا icode مختلف؟
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              نجمع بين الخبرة التقنية العميقة والفهم الشامل لاحتياجات الأعمال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'خبرة تقنية متعمقة',
                description: 'فريقنا يتمتع بخبرة واسعة في أحدث التقنيات وأفضل الممارسات البرمجية',
              },
              {
                title: 'فهم احتياجات الأعمال',
                description: 'لا نبني تقنية من أجل التقنية، بل نبني حلولاً تخدم أهداف عملك',
              },
              {
                title: 'التزام بالمواعيد',
                description: 'نحترم وقتك ونلتزم بالجداول الزمنية المتفق عليها',
              },
              {
                title: 'كود نظيف وموثق',
                description: 'نكتب كوداً عالي الجودة سهل الصيانة والتطوير مستقبلاً',
              },
              {
                title: 'دعم مستمر',
                description: 'علاقتنا بعملائنا لا تنتهي بتسليم المشروع، نقدم دعماً مستمراً',
              },
              {
                title: 'أسعار شفافة',
                description: 'لا توجد تكاليف مخفية، كل شيء واضح ومتفق عليه من البداية',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8" hover>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="text-center mt-12">
            <Link
              to="/offer"
              onClick={() => pushDL('nav_click', { target: '/offer', source: 'about_why' })}
            >
              <Button size="lg" variant="outline" icon={ArrowLeft}>
                افتح عرض 7 أيام
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-6">قيمنا الأساسية</h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">المبادئ التي توجه عملنا اليومي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center" hover>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">طريقة عملنا</h2>
            <p className="text-xl text-secondary-300">منهجية Agile مع التركيز على الجودة والتواصل</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {methodology.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
                >
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.phase}</h3>
                    <p className="text-secondary-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Method CTA */}
            <div className="text-center mt-12">
              <Link
                to="/consultation"
                onClick={() =>
                  pushDL('nav_click', { target: '/consultation', source: 'about_methodology' })
                }
              >
                <Button size="lg" variant="secondary" icon={ArrowLeft}>
                  احجز استشارة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACKS */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              التقنيات التي نعمل بها
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              نستخدم أحدث وأفضل التقنيات لبناء حلول قوية وقابلة للتوسع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStacks).map(([category, techs]) => (
              <Card key={category} className="p-8" hover>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 capitalize">
                  {category === 'frontend' && 'Frontend'}
                  {category === 'backend' && 'Backend'}
                  {category === 'mobile' && 'Mobile'}
                  {category === 'database' && 'Databases'}
                  {category === 'devops' && 'DevOps'}
                  {category === 'other' && 'أخرى'}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="text-center mt-12">
            <Link
              to="/offer"
              onClick={() => pushDL('nav_click', { target: '/offer', source: 'about_footer' })}
            >
              <Button size="lg" icon={ArrowLeft}>
                افتح عرض 7 أيام
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
