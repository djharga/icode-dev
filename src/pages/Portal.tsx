// src/pages/Portal.tsx
// ENTERPRISE DEMO (Conversion-first) — "قريباً" مع متابعة بديلة الآن + Funnel WhatsApp + GTM
// - صفحة ديمو محترمة بدل صفحة "مقفولة وخلاص"
// - توضح: كيف نتابع مشروعك الآن قبل إطلاق البوابة
// - CTA واحد ذكي: WhatsApp + زر فتح عرض 7 أيام (اختياري)
// - بدون اعتماد على ملفات أخرى

import { Link } from 'react-router-dom';
import {
  Lock,
  FileText,
  MessageSquare,
  Upload,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Shield,
  Clock,
  Sparkles,
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

export function Portal() {
  // Funnel config (موحّد)
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أتابع مشروعي مع icode (قبل إطلاق بوابة العميل).',
      '',
      'اسم العميل/الشركة:',
      'اسم المشروع:',
      'مرحلة المشروع الحالية (إن وجدت):',
      'أفضل وقت للتواصل:',
      'ملاحظات/ملفات مطلوبة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const quickBenefits = [
    { icon: Shield, title: 'خصوصية + تنظيم', desc: 'بيانات مشروعك تتوثق وتتراجع بطريقة آمنة ومنظمة.' },
    { icon: Clock, title: 'وضوح في المراحل', desc: 'مراحل تسليم واضحة + موافقات قبل أي انتقال.' },
    { icon: Sparkles, title: 'تجربة “شركة”', desc: 'متابعة محترفة حتى قبل إطلاق البوابة بالكامل.' },
  ];

  const whatYouCanDoNow = [
    {
      icon: CheckCircle,
      title: 'تحديث أسبوعي ثابت',
      desc: 'ملخص تقدّم + ما تم إنجازه + ما هو قادم + نقاط تحتاج موافقتك.',
    },
    {
      icon: Calendar,
      title: 'خطة مراحل (Milestones)',
      desc: 'تقسيم المشروع لمراحل واضحة مع تاريخ تقديري لكل تسليم.',
    },
    {
      icon: FileText,
      title: 'مستند نطاق واعتمادات',
      desc: 'كل طلب يتوثق: نطاق/تغيير/موافقة — بدون فوضى أو كلام شفهي.',
    },
    {
      icon: Upload,
      title: 'تبادل ملفات منظم',
      desc: 'رفع/استلام الملفات عبر قناة محددة (واتساب أو رابط مشترك حسب الاتفاق).',
    },
    {
      icon: MessageSquare,
      title: 'قناة تواصل واحدة',
      desc: 'بدون تشتت: واتساب رسمي للمشروع + رسائل واضحة + أرشفة.',
    },
    {
      icon: Lock,
      title: 'تحضير للبوابة',
      desc: 'نجهز البيانات من الآن عشان تتحول تلقائيًا للبوابة عند الإطلاق.',
    },
  ];

  const trackingSteps = [
    {
      title: '1) فتح ملف مشروع',
      desc: 'بمجرد الاتفاق، بنفتح “ملف مشروع” فيه النطاق + البيانات الأساسية + أولوياتك.',
    },
    {
      title: '2) جدول مراحل واضح',
      desc: 'بنقسم التنفيذ لخطوات قابلة للقياس: تصميم → تطوير → اختبار → إطلاق.',
    },
    {
      title: '3) تقرير تقدم أسبوعي',
      desc: 'كل أسبوع: ماذا تم؟ ماذا بقي؟ ما المطلوب منك؟ وهل في مخاطر؟',
    },
    {
      title: '4) موافقات قبل التسليم',
      desc: 'أي مرحلة لها “اعتماد” بسيط منك قبل الانتقال للي بعدها.',
    },
    {
      title: '5) طلبات تغيير منظمة',
      desc: 'أي إضافة خارج النطاق: تقييم وقت/تكلفة ثم اعتماد كتابي.',
    },
  ];

  const faq = [
    {
      q: 'هل الصفحة دي بوابة شغالة؟',
      a: 'دي نسخة ديمو/تمهيدية. المتابعة الحالية تتم بشكل منظم عبر واتساب وتقارير مراحل، لحين إطلاق البوابة بالكامل.',
    },
    {
      q: 'هل المتابعة على واتساب كفاية؟',
      a: 'أيوه—لو متعملت صح. إحنا بنمشي بنظام: مراحل + تقارير + موافقات + توثيق طلبات التغيير.',
    },
    {
      q: 'إمتى هتشتغل البوابة؟',
      a: 'إطلاقها مرتبط بتجهيز كل خصائص الأمان والملفات والموافقات. لو أنت عميل حالي، تقدر تبدأ المتابعة فوراً بالطريقة الحالية.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Lock className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">لوحة العميل</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              تجربة متابعة “شركات” — منظمة، موثقة، وواضحة. <span className="font-semibold">النسخة الكاملة قريباً</span>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'portal_hero_whatsapp' })}
              >
                <Button size="lg" variant="secondary" icon={ArrowLeft}>
                  ابدأ المتابعة الآن على واتساب
                </Button>
              </a>

              <Link
                to="/offer"
                onClick={() => pushDL('nav_click', { target: '/offer', source: 'portal_hero' })}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/90"
                >
                  افتح عرض 7 أيام
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {quickBenefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-2xl py-4 px-4"
                >
                  <b.icon className="w-5 h-5" />
                  <div className="text-right">
                    <div className="font-semibold">{b.title}</div>
                    <div className="text-sm text-white/80">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON + ACCESS */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <Card className="p-10 md:p-12 text-center glass">
            <div className="mx-auto w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-3">منطقة محمية</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
              بوابة العميل الكاملة قيد الإطلاق. لو أنت عميل حالي، المتابعة تبدأ فوراً عبر نظام متابعة منظم.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'portal_access_whatsapp' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  اطلب تفعيل المتابعة الآن
                </Button>
              </a>

              <Link
                to="/contact"
                onClick={() => pushDL('nav_click', { target: '/contact', source: 'portal_access' })}
              >
                <Button size="lg" variant="outline">
                  ارسل رسالة رسمية
                </Button>
              </Link>
            </div>

            <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-6">
              ملاحظة: تفعيل المتابعة يتم بعد تأكيد اسم المشروع ووسيلة التواصل الرسمية.
            </p>
          </Card>
        </div>
      </section>

      {/* WHAT YOU CAN DO NOW */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              كيف نتابع مشروعك الآن (حتى قبل إطلاق البوابة)
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              الهدف: متابعة واضحة بدون تشتت — نفس عقلية البوابة، لكن عبر نظام تقارير ومراحل وموافقات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouCanDoNow.map((feature) => (
              <Card key={feature.title} className="p-7" hover>
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => pushDL('lead_click', { source: 'portal_follow_now_whatsapp' })}
            >
              <Button size="lg" variant="secondary" icon={ArrowLeft}>
                ابدأ المتابعة الآن
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              نظام المتابعة — ببساطة وبشكل “شركات”
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              خمس خطوات ثابتة تمنع العشوائية وتضمن وضوح التنفيذ.
            </p>
          </div>

          <div className="space-y-5">
            {trackingSteps.map((s, i) => (
              <Card key={s.title} className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">{s.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-10 glass">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                وقتك مهم. عشان كده المتابعة عندنا “مختصرة ومفيدة”: تقرير واضح بدل 100 رسالة متفرقة.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">أسئلة سريعة</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">إجابات مختصرة تمنع أي لبس.</p>
          </div>

          <div className="space-y-5 text-right">
            {faq.map((x) => (
              <Card key={x.q} className="p-7" hover>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">{x.q}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{x.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => pushDL('lead_click', { source: 'portal_faq_whatsapp' })}
            >
              <Button size="lg" icon={ArrowLeft}>
                تواصل الآن وابدأ المتابعة
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
