// Section: "كيف نتابع مشروعك الآن" — Copy/Paste داخل Portal.tsx أو أي صفحة
// يعتمد على: Card + Button (اختياري) + lucide-react
// ملاحظة: لو ما عندك Button في الصفحة، احذف جزء الـ Button واستبدله بـ <a> عادي.

import { Link } from 'react-router-dom';
import {
  ClipboardList,
  MessageSquare,
  LayoutDashboard,
  FileText,
  CheckCircle2,
  FolderKanban,
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

export function ProjectTrackingNowSection() {
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز متابعة مشروع بشكل منظم (قبل إطلاق البوابة).',
      '',
      'اسم المشروع:',
      'نوع المشروع:',
      'الهدف:',
      'الميزانية:',
      'موعد الإطلاق:',
      'مراجع/روابط (اختياري):',
      'ملاحظات:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

  const items = [
    {
      icon: MessageSquare,
      title: 'قناة تواصل واحدة (بدون تشتيت)',
      desc: 'كل تحديث/سؤال/طلب يروح في قناة واحدة ويتسجل كمهمة أو قرار واضح.',
      points: ['رقم مرجعي لكل طلب', 'ردود مركّزة', 'بدون تضييع وقت بين منصات'],
    },
    {
      icon: LayoutDashboard,
      title: 'لوحة متابعة مؤقتة باسم مشروعك',
      desc: 'بنجهّز لك لوحة متابعة مؤقتة (Trello/Notion/ClickUp حسب ما يناسبك).',
      points: ['مراحل + مهام + حالة التنفيذ', 'نسبة إنجاز', 'تحديثات مستمرة'],
    },
    {
      icon: FileText,
      title: 'تقارير دورية قصيرة',
      desc: 'تقرير أسبوعي (أو كل 48 ساعة للمشاريع السريعة) يوضح الصورة بالكامل.',
      points: ['تم إنجازه', 'قيد التنفيذ', 'ما يحتاج موافقة منك'],
    },
    {
      icon: ClipboardList,
      title: 'موافقات واضحة قبل أي تغيير',
      desc: 'أي تعديل خارج النطاق لا يتم إلا بموافقة كتابية بعد توضيح الأثر.',
      points: ['Change Request مختصر', 'أثر وقت/تكلفة', 'اعتماد رسمي قبل التنفيذ'],
    },
    {
      icon: FolderKanban,
      title: 'ملفات وتسليمات في مكان واحد',
      desc: 'كل الملفات والتسليمات في مجلد واحد مرتب — بدون روابط مبعثرة.',
      points: ['Deliverables', 'Designs', 'Content', 'Docs', 'Release Notes'],
    },
    {
      icon: CheckCircle2,
      title: 'مراجعات مرحلية بدل مفاجأة التسليم',
      desc: 'بنشتغل بتسليمات تدريجية + رابط معاينة + فترة مراجعة واضحة.',
      points: ['Staging Preview', 'قائمة ما تم', '3–7 أيام مراجعة لكل مرحلة'],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            كيف نتابع مشروعك الآن (حتى قبل إطلاق البوابة)
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
            نفس منطق لوحة العميل لكن بشكل عملي فورًا: متابعة + تقارير + موافقات + ملفات — بشكل منظم وموثق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((x) => (
            <Card key={x.title} className="p-7" hover>
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-5">
                <x.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                {x.title}
              </h3>

              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-4">
                {x.desc}
              </p>

              <ul className="space-y-2">
                {x.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                    <span className="text-primary-600 font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Card className="p-10 text-center glass">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
              جاهز تبدأ متابعة منظمة من أول يوم؟
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              ابعت تفاصيل مشروعك على واتساب وسنرد عليك بخطة متابعة + مراحل تنفيذ + طريقة تسليم واضحة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'portal_tracking_now_whatsapp' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  ابدأ متابعة المشروع الآن (واتساب)
                </Button>
              </a>

              <Link
                to="/consultation"
                onClick={() => pushDL('nav_click', { target: '/consultation', source: 'portal_tracking_now' })}
              >
                <Button size="lg" variant="outline" icon={ArrowLeft}>
                  احجز استشارة لتحديد النطاق
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}