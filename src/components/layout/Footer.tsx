// ADD THIS: Replace your current "TRUST FOOTER" Card with this Enterprise Footer block
// مميزات الفوتر:
// - 3 طبقات: Trust bar + Legal micro + Action strip
// - لغة احترافية + واضحة
// - بدون ادعاء شهادات/روابط مزورة
// - متوافق RTL + نفس Cards/Tailwind الموجود عندك

import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Shield,
  Lock,
  Scale,
  Clock,
  FileText,
  ArrowLeft,
  PhoneCall,
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

// داخل Terms() عندك: لازم يكون عندك WHATSAPP_LINK (لو مش موجود ضيفه)
// const WHATSAPP_PHONE = '201507619503';
// const WHATSAPP_PREFILL = encodeURIComponent([...].join('\n'));
// const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

{
  /* ENTERPRISE FOOTER */
}
<section className="pb-16">
  <div className="container-custom max-w-5xl">
    {/* Trust Bar */}
    <Card className="p-6 md:p-8 glass">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-right">
          <div className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-2">
            بيان التزام
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
            اتفاق شفاف. نطاق واضح. حقوق محفوظة للطرفين.
          </h3>
          <p className="mt-2 text-secondary-600 dark:text-secondary-300 leading-relaxed">
            لا وعود مطاط — كل شيء يُكتب: النطاق، المدة، القبول، الدفع، والضمان. أي تغيير يتم توثيقه كطلب تغيير
            (Change Request) قبل التنفيذ.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 min-w-[260px]">
          {[
            { icon: Shield, label: 'جودة التنفيذ' },
            { icon: Lock, label: 'سرية البيانات' },
            { icon: Scale, label: 'عدالة البنود' },
            { icon: Clock, label: 'التزام بالمراحل' },
          ].map((x) => (
            <div
              key={x.label}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-secondary-900/40 border border-secondary-200/60 dark:border-secondary-700/60"
            >
              <x.icon className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-secondary-800 dark:text-secondary-100">
                {x.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>

    {/* Legal Micro + Version */}
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="p-6" hover={false}>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
              نسخة الوثيقة
            </div>
            <div className="text-lg font-bold text-secondary-900 dark:text-white">
              آخر تحديث: {LAST_UPDATED}
            </div>
            <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
              أي مشروع قائم يخضع لبنود عقده/نطاقه وقت التوقيع، وأي تعديل يتم بموافقة كتابية من الطرفين.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6" hover={false}>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
              معيار التعامل
            </div>
            <div className="text-lg font-bold text-secondary-900 dark:text-white">
              “اكتب… ثم نفّذ”
            </div>
            <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
              الموافقات، النطاق، التسليم، والقبول تتم كتابيًا. هذا يقلل الخلافات ويضمن تنفيذ أسرع وأنظف.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6" hover={false}>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
              ملاحظة قانونية
            </div>
            <div className="text-lg font-bold text-secondary-900 dark:text-white">
              بنود عادلة للطرفين
            </div>
            <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
              هذه الشروط إطار عام. عند وجود عقد مشروع منفصل، تسود بنوده. هدفنا: حماية الحقوق وتقليل الالتباس.
            </p>
          </div>
        </div>
      </Card>
    </div>

    {/* Action Strip */}
    <Card className="mt-6 p-6 md:p-7 glass">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
        <div>
          <div className="text-sm font-semibold text-secondary-500 dark:text-secondary-400">
            جاهز تبدأ بطريقة صح؟
          </div>
          <div className="text-xl md:text-2xl font-bold text-secondary-900 dark:text-white">
            افتح عرض 7 أيام أو ابعت تفاصيلك على واتساب—ونثبت النطاق قبل التنفيذ.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link to="/offer" className="w-full md:w-auto">
            <Button className="w-full" icon={ArrowLeft}>
              افتح عرض 7 أيام
            </Button>
          </Link>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full md:w-auto">
            <Button className="w-full" variant="outline" icon={PhoneCall}>
              واتساب سريع
            </Button>
          </a>
        </div>
      </div>
    </Card>
  </div>
</section>
