// src/pages/Portfolio.tsx  (FULL UPDATED — "Global-grade" Portfolio)
// تحسينات حقيقية: Filters كـ pills + sticky + cards بمقاس ثابت + metrics chips + CTA واضح
// بدون تفرعات، جاهز Copy-Paste

import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Filter,
  ExternalLink,
  Sparkles,
  Shield,
  Zap,
  Building2,
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

type Project = {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  clientValue: string;
  // اختياري: لو عندك لينكات حقيقية املأها
  href?: string;
  // رقم/نتيجة “قابلة للعرض” بدل ادعاءات مبالغ فيها
  metric?: { label: string; value: string; icon?: 'zap' | 'shield' | 'growth' };
};

const pushDL = (event: string, payload: Record<string, unknown> = {}) => {
  // GTM safe
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push({ event, ...payload });
};

export function Portfolio() {
  const categories = ['الكل', 'Fintech', 'SaaS', 'E-commerce', 'أمان', 'أنظمة مخصصة', 'موبايل'];

  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [query, setQuery] = useState('');

  const projects: Project[] = [
    {
      title: 'منصة PayFlow',
      category: 'Fintech',
      description: 'منصة مدفوعات ومحافظ رقمية مع طبقة تحقق وهوية (KYC) وضوابط امتثال.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      clientValue: 'تقليل وقت تنفيذ العمليات + لوحات تقارير لحظية.',
      metric: { label: 'زمن استجابة', value: '< 250ms', icon: 'zap' },
    },
    {
      title: 'نظام ProjectHub',
      category: 'SaaS',
      description: 'إدارة مشاريع وفرق: مهام، صلاحيات، تقارير، وتتبع وقت/تكلفة.',
      techStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      clientValue: 'وضوح تنفيذ أعلى عبر تقارير أسبوعية ولوحات متابعة.',
      metric: { label: 'تحسين الإنتاجية', value: '+45%', icon: 'growth' },
    },
    {
      title: 'متجر LuxeStyle',
      category: 'E-commerce',
      description: 'متجر أزياء مع تجربة بحث/تصفح سريعة، سلة ودفع، وإدارة منتجات.',
      techStack: ['React', 'Express', 'MongoDB', 'Stripe', 'Cloudinary'],
      clientValue: 'رفع معدل التحويل عبر تحسين مسار الشراء والسرعة.',
      metric: { label: 'معدل التحويل', value: '+2.1x', icon: 'growth' },
    },
    {
      title: 'نظام SecureVault',
      category: 'أمان',
      description: 'إدارة أسرار وصلاحيات مع تشفير، سجلات تدقيق، و2FA.',
      techStack: ['Rust', 'PostgreSQL', 'React', 'WebAssembly'],
      clientValue: 'تقليل المخاطر عبر سياسات وصول واضحة وتسجيل كامل.',
      metric: { label: 'تقليل المخاطر', value: 'High', icon: 'shield' },
    },
    {
      title: 'تطبيق HealthTrack',
      category: 'موبايل',
      description: 'تطبيق تتبع صحة/لياقة مع خطط وتذكيرات وتجربة استخدام سلسة.',
      techStack: ['React Native', 'Firebase', 'TensorFlow', 'Node.js'],
      clientValue: 'واجهة بسيطة مع أداء ثابت وتجربة يومية سهلة.',
      metric: { label: 'تقييم المستخدمين', value: '4.8★', icon: 'growth' },
    },
    {
      title: 'نظام ERP للمصانع',
      category: 'أنظمة مخصصة',
      description: 'ERP لإدارة الإنتاج والمخزون والمبيعات والموارد البشرية.',
      techStack: ['Vue.js', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
      clientValue: 'توحيد العمليات وتقليل الأخطاء والتكرار في البيانات.',
      metric: { label: 'خفض التكاليف', value: '-35%', icon: 'growth' },
    },
    {
      title: 'منصة LearnPro',
      category: 'SaaS',
      description: 'منصة تعليمية: محتوى، متابعة تقدم، فصول افتراضية (اختياري).',
      techStack: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'AWS'],
      clientValue: 'تقارير تقدم + إدارة محتوى منظمة للمدرسين.',
      metric: { label: 'نشاط الطلاب', value: '+60%', icon: 'growth' },
    },
    {
      title: 'نظام SmartInventory',
      category: 'أنظمة مخصصة',
      description: 'مخزون ذكي: تنبيهات + توقّع احتياج + صلاحيات فرق.',
      techStack: ['Angular', 'Python', 'MySQL', 'TensorFlow', 'Docker'],
      clientValue: 'دقة مخزون أعلى وتقليل فاقد وتوريد أفضل.',
      metric: { label: 'دقة المخزون', value: '99%', icon: 'zap' },
    },
  ];

  const filteredProjects = useMemo(() => {
    const base = selectedCategory === 'الكل' ? projects : projects.filter((p) => p.category === selectedCategory);
    if (!query.trim()) return base;

    const q = query.trim().toLowerCase();
    return base.filter((p) => {
      const hay = [
        p.title,
        p.category,
        p.description,
        p.clientValue,
        ...p.techStack,
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [projects, query, selectedCategory]);

  const metricIcon = (m?: Project['metric']) => {
    if (!m?.icon) return Sparkles;
    if (m.icon === 'shield') return Shield;
    if (m.icon === 'zap') return Zap;
    return Sparkles;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">أعمال مختارة</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              مشاريع مصممة لتخدم هدف العمل: سرعة، أمان، وتحويل أعلى.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'portfolio_hero' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'portfolio_hero_whatsapp' })}
              >
                <Button size="lg" variant="outline">
                  تواصل سريع
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR (STICKY) */}
      <section className="pt-10 pb-6">
        <div className="container-custom">
          <div className="sticky top-20 z-20">
            <Card className="p-4 md:p-5 glass">
              <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-secondary-500 absolute right-4 top-1/2 -translate-y-1/2" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ابحث باسم المشروع أو تقنية..."
                    className="w-full bg-white/60 dark:bg-secondary-900/40 border border-secondary-200/60 dark:border-secondary-700/60 rounded-xl px-12 py-3 outline-none text-secondary-900 dark:text-white"
                  />
                </div>

                {/* Categories */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                    <Filter className="w-4 h-4" />
                    <span>تصنيف:</span>
                  </div>

                  {categories.map((category) => {
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          pushDL('portfolio_filter', { category });
                        }}
                        className={[
                          'px-4 py-2 rounded-full text-sm font-semibold border transition',
                          active
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-transparent text-secondary-700 dark:text-secondary-200 border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-800',
                        ].join(' ')}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                {/* Results count */}
                <div className="text-center text-sm text-secondary-500 dark:text-secondary-400">
                  النتائج: <span className="font-bold text-secondary-900 dark:text-white">{filteredProjects.length}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding pt-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const Icon = metricIcon(project.metric);
              return (
                <Card key={project.title} className="overflow-hidden" hover>
                  {/* Cover */}
                  <div className="h-52 relative overflow-hidden">
                    <div className="absolute inset-0 gradient-primary opacity-15" />
                    <div className="absolute inset-0 bg-noise" />

                    {/* Top chips */}
                    <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 dark:bg-secondary-900/50 backdrop-blur border border-white/30 text-secondary-800 dark:text-white text-sm font-semibold">
                        <Building2 className="w-4 h-4" />
                        {project.category}
                      </span>

                      {project.metric && (
                        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 dark:bg-secondary-900/50 backdrop-blur border border-white/30 text-secondary-800 dark:text-white text-sm font-semibold">
                          <Icon className="w-4 h-4" />
                          {project.metric.label}: {project.metric.value}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        {project.title}
                      </h3>

                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:underline"
                          onClick={() => pushDL('portfolio_open_project', { title: project.title })}
                        >
                          عرض <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <div className="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-3">
                        التقنيات:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-sm bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 border border-secondary-200/40 dark:border-secondary-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Value */}
                    <div className="pt-6 border-t border-secondary-200/70 dark:border-secondary-700/70">
                      <div className="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-2">
                        القيمة المقدمة:
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {project.clientValue}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/offer"
                        onClick={() => pushDL('nav_click', { target: '/offer', source: 'portfolio_card', project: project.title })}
                        className="flex-1"
                      >
                        <Button className="w-full" icon={ArrowLeft}>
                          ابدأ بنفس الجودة
                        </Button>
                      </Link>

                      <a
                        href="https://wa.me/201234567890"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => pushDL('lead_click', { source: 'portfolio_card_whatsapp', project: project.title })}
                        className="flex-1"
                      >
                        <Button className="w-full" variant="outline">
                          اسأل عن مشروع مشابه
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="max-w-2xl mx-auto mt-12 text-center">
              <Card className="p-10">
                <h3 className="text-2xl font-bold mb-3">لا توجد نتائج</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  غيّر التصنيف أو جرّب كلمات بحث مختلفة.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setQuery('');
                    setSelectedCategory('الكل');
                    pushDL('portfolio_reset', {});
                  }}
                >
                  تصفير الفلاتر
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* FINAL PROOF + CTA */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <Card className="p-12 md:p-16 text-center glass">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              تريد مشروع بنفس المستوى؟
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto">
              افتح عرض 7 أيام وابدأ بخطة واضحة ونطاق محدد. التنفيذ يبدأ بعد اعتماد المتطلبات.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'portfolio_footer' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>

              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'portfolio_footer_whatsapp' })}
              >
                <Button size="lg" variant="outline">
                  تواصل الآن
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
