import { Card } from '../components/ui/Card';
import { FileText, Shield, CreditCard, Clock, Award, RefreshCw } from 'lucide-react';

export function Terms() {
  const sections = [
    {
      icon: FileText,
      title: '1. نطاق الخدمات',
      content: [
        'نقدم خدمات تطوير البرمجيات وفقاً للمواصفات المتفق عليها في عقد المشروع.',
        'يتم تحديد نطاق العمل بوضوح في مستند متطلبات المشروع (Project Requirements Document).',
        'أي تغييرات في النطاق بعد بدء العمل تتطلب موافقة كتابية وقد تؤثر على التكلفة والجدول الزمني.',
      ],
    },
    {
      icon: Shield,
      title: '2. حدود المسؤولية',
      content: [
        'نلتزم بتقديم خدمات احترافية وفق أفضل الممارسات البرمجية.',
        'لا نتحمل مسؤولية أي أضرار ناتجة عن سوء استخدام المنتج أو تعديلات غير مصرح بها.',
        'نوفر دعماً فنياً خلال فترة الضمان المحددة في العقد.',
        'نحتفظ بحق رفض أي مشروع لا يتوافق مع معاييرنا الأخلاقية والقانونية.',
      ],
    },
    {
      icon: Clock,
      title: '3. شروط التسليم',
      content: [
        'يتم تحديد جدول زمني واضح لمراحل التسليم في بداية المشروع.',
        'نلتزم بالجداول الزمنية المتفق عليها ما لم تحدث تغييرات في النطاق.',
        'التأخير من طرف العميل في تقديم المحتوى أو الموافقات قد يؤثر على موعد التسليم.',
        'يتم التسليم النهائي بعد اجتياز جميع مراحل الاختبار والموافقة.',
      ],
    },
    {
      icon: FileText,
      title: '4. حقوق الملكية الفكرية',
      content: [
        'بعد السداد الكامل، ينتقل كامل حق ملكية الكود المخصص للعميل.',
        'نحتفظ بحق استخدام المكونات العامة والأطر البرمجية في مشاريع أخرى.',
        'المكتبات والأدوات مفتوحة المصدر تبقى خاضعة لتراخيصها الأصلية.',
        'يحق لنا عرض المشروع في معرض أعمالنا ما لم يطلب العميل خلاف ذلك.',
      ],
    },
    {
      icon: CreditCard,
      title: '5. سياسة الدفع',
      content: [
        'يتم دفع 50% من قيمة المشروع عند التوقيع على العقد كدفعة مقدمة.',
        'يتم دفع 50% المتبقية عند التسليم النهائي واستلام المشروع.',
        'للمشاريع الكبيرة، يمكن تقسيم الدفعات على مراحل متعددة.',
        'جميع الدفعات غير قابلة للاسترداد بعد بدء العمل على المشروع.',
        'التأخر في الدفع قد يؤدي إلى تعليق العمل على المشروع.',
      ],
    },
    {
      icon: Award,
      title: '6. سياسة الضمان',
      content: [
        'نقدم ضماناً على جودة العمل لمدة 30-90 يوم حسب نوع المشروع.',
        'الضمان يشمل إصلاح الأخطاء البرمجية والمشاكل التقنية.',
        'الضمان لا يشمل التحديثات أو الميزات الجديدة غير المتفق عليها.',
        'تنتهي فترة الضمان إذا تم إجراء تعديلات على الكود من قبل طرف ثالث.',
      ],
    },
    {
      icon: RefreshCw,
      title: '7. سياسة الاسترجاع والإلغاء',
      content: [
        'يمكن إلغاء المشروع خلال 7 أيام من التوقيع مع استرداد 80% من الدفعة المقدمة.',
        'بعد بدء العمل الفعلي، لا يحق للعميل استرداد الدفعات المسددة.',
        'في حالة إلغاء العميل للمشروع بعد بدء العمل، يتم احتساب تكلفة العمل المنجز.',
        'نحتفظ بحق إلغاء المشروع في حالة عدم الالتزام بشروط العقد.',
      ],
    },
    {
      icon: Shield,
      title: '8. السرية وحماية البيانات',
      content: [
        'نلتزم بالحفاظ على سرية جميع المعلومات والبيانات الخاصة بالعميل.',
        'نطبق أفضل ممارسات الأمان لحماية بيانات المشاريع.',
        'لا نشارك معلومات العميل مع أطراف ثالثة دون إذن صريح.',
        'يمكن للعميل طلب توقيع اتفاقية سرية (NDA) إضافية عند الحاجة.',
      ],
    },
    {
      icon: FileText,
      title: '9. الدعم والصيانة',
      content: [
        'نقدم دعماً فنياً مجانياً خلال فترة الضمان المحددة.',
        'بعد انتهاء فترة الضمان، تتوفر عقود صيانة شهرية أو سنوية.',
        'الدعم يشمل المساعدة التقنية وإصلاح الأخطاء.',
        'الطلبات التطويرية الجديدة تتم معالجتها كمشاريع منفصلة.',
      ],
    },
    {
      icon: FileText,
      title: '10. التعديلات على الشروط',
      content: [
        'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت.',
        'سيتم إشعار العملاء الحاليين بأي تغييرات جوهرية.',
        'استمرار استخدام خدماتنا يعني الموافقة على الشروط المحدثة.',
        'لكل مشروع عقد منفصل يحدد الشروط الخاصة به.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              الشروط والأحكام
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              شروط تقديم الخدمات والعقود - يرجى قراءة هذه الشروط بعناية
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <Card className="p-8 mb-8" glass>
            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              هذه الشروط والأحكام تحكم العلاقة بين icode والعملاء الذين يستخدمون خدماتنا. من خلال التعاقد معنا، فإنك توافق على هذه الشروط. نوصي بقراءة هذه الوثيقة بالكامل قبل بدء أي مشروع.
            </p>
          </Card>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden" hover={false}>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <ul className="space-y-4 mr-16">
                    {section.content.map((item, i) => (
                      <li
                        key={i}
                        className="text-secondary-600 dark:text-secondary-300 leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-primary-600 font-bold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-12" gradient>
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              تحديث أخير
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              آخر تحديث لهذه الشروط: نوفمبر 2024
            </p>
            <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني contact@icode.com أو عبر صفحة التواصل.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
