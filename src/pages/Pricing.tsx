import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Pricing() {
  const pricingTiers = [
    {
      name: 'الباقة الأساسية',
      subtitle: 'للمواقع التعريفية والصفحات البسيطة',
      price: '$25',
      priceNote: 'للموقع الواحد',
      features: [
        'موقع تعريفي من 3-5 صفحات',
        'تصميم متجاوب لجميع الأجهزة',
        'تحسين محركات البحث الأساسي',
        'نموذج تواصل واحد',
        'استضافة لمدة 3 أشهر مجاناً',
        'شهادة SSL آمنة',
        'دعم فني لمدة 30 يوم',
      ],
      duration: '1-2 أسابيع',
      support: 'دعم عبر الواتساب',
      recommended: false,
    },
    {
      name: 'الباقة الاحترافية',
      subtitle: 'للشركات والأعمال المتوسطة',
      price: '$100',
      priceNote: 'للموقع الواحد',
      features: [
        'موقع كامل متعدد الصفحات',
        'عدد غير محدود من الصفحات',
        'لوحة تحكم بسيطة',
        'تحسين SEO متقدم',
        'استضافة لمدة 6 أشهر مجاناً',
        'تدريب على استخدام النظام',
        'دعم فني لمدة 60 يوم',
        'تحديثات مجانية لمدة 3 أشهر',
        'نماذج متعددة وتصميم مخصص',
      ],
      duration: '2-4 أسابيع',
      support: 'دعم سريع عبر الواتساب',
      recommended: true,
    },
    {
      name: 'الباقة المتقدمة',
      subtitle: 'للمواقع الكبيرة والمتطورة',
      price: '$150',
      priceNote: 'للموقع الواحد',
      features: [
        'موقع متكامل مع ميزات متقدمة',
        'تصميم مخصص بالكامل',
        'لوحة تحكم متقدمة',
        'تكامل مع أنظمة خارجية',
        'SEO احترافي وتحليلات متقدمة',
        'استضافة لمدة سنة مجاناً',
        'تدريب شامل ومستندات كاملة',
        'دعم فني لمدة 90 يوم',
        'تحديثات مجانية لمدة 6 أشهر',
        'نظام إدارة محتوى قوي',
      ],
      duration: '4-6 أسابيع',
      support: 'دعم أولوية على مدار الساعة',
      recommended: false,
    },
  ];

  const otherServices = [
    {
      title: 'تطبيقات الموبايل',
      description: 'تطبيقات iOS و Android أصلية أو متعددة المنصات',
      note: 'سعر حسب التفاصيل',
    },
    {
      title: 'الأنظمة المخصصة',
      description: 'أنظمة إدارة وحلول برمجية متكاملة حسب احتياجاتك',
      note: 'سعر حسب التفاصيل',
    },
    {
      title: 'الأمن السيبراني',
      description: 'اختبارات اختراق وتحليل ثغرات وحماية',
      note: 'سعر حسب التفاصيل',
    },
    {
      title: 'الاستشارات التقنية',
      description: 'توجيه تقني وخطط تنفيذ للمشاريع',
      note: 'سعر حسب التفاصيل',
    },
    {
      title: 'الصيانة والدعم',
      description: 'صيانة شهرية وتحديثات مستمرة',
      note: 'باقات شهرية مخصصة',
    },
    {
      title: 'الأتمتة والسكربتات',
      description: 'حلول أتمتة للعمليات والمهام المتكررة',
      note: 'سعر حسب التفاصيل',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أسعار تصميم المواقع
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              باقات واضحة وشفافة لتصميم المواقع الإلكترونية. الأسعار تبدأ من $25 وحتى $150 حسب حجم المشروع
            </p>
            <p className="text-lg mt-4 text-white/80">
              لباقي الخدمات (تطبيقات الموبايل، الأنظمة المخصصة، الأمن السيبراني)، احجز استشارة مجانية للحصول على عرض سعر وجدول زمني مخصص
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 relative ${tier.recommended ? 'ring-2 ring-primary-500 scale-105' : ''}`}
                hover={false}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 gradient-primary text-white text-sm font-bold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    الأكثر طلباً
                  </div>
                )}

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                    {tier.name}
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-1">
                      {tier.price}
                    </div>
                    <div className="text-sm text-secondary-500 dark:text-secondary-400">
                      {tier.priceNote}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-4">
                    ما يشمله:
                  </h3>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700 dark:text-secondary-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-secondary-400">
                      مدة التنفيذ:
                    </span>
                    <span className="font-semibold text-secondary-900 dark:text-white">
                      {tier.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-secondary-400">
                      الدعم الفني:
                    </span>
                    <span className="font-semibold text-secondary-900 dark:text-white">
                      {tier.support}
                    </span>
                  </div>
                </div>

                <Link to="/contact" className="block">
                  <Button
                    className="w-full"
                    variant={tier.recommended ? 'primary' : 'outline'}
                    icon={ArrowLeft}
                  >
                    اطلب عرض سعر
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="p-8 text-center" gradient>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                تحتاج مشروعاً خاصاً؟
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 max-w-2xl mx-auto">
                الأسعار أعلاه تنطبق على <span className="font-bold">تصميم المواقع فقط</span>.
                إذا كنت تحتاج تطبيق موبايل، نظام مخصص، أو خدمات أخرى، سنقدم لك:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-right">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary-900 dark:text-white mb-1">فاتورة سعر مفصلة</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">حسب حجم ومتطلبات مشروعك</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary-900 dark:text-white mb-1">جدول زمني واضح</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">مراحل التنفيذ والتسليم</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary-900 dark:text-white mb-1">تفصيل تقني كامل</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">التقنيات والمواصفات</p>
                  </div>
                </div>
              </div>
              <Link to="/consultation">
                <Button size="lg" icon={ArrowLeft}>
                  احجز استشارة مجانية الآن
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                خدمات أخرى
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                لهذه الخدمات، نقدم استشارة مجانية وعرض سعر مخصص بناءً على متطلبات مشروعك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service, index) => (
                <Card key={index} className="p-6" hover>
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                      {service.note}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/consultation">
                <Button size="lg" icon={ArrowLeft}>
                  احجز استشارة للحصول على عرض سعر
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center" gradient>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                شروط الدفع والضمان
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    طريقة الدفع
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    50% عند البدء و50% عند التسليم النهائي
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    الضمان
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    ضمان جودة لمدة 30-90 يوم حسب الباقة
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    المراجعات
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    جولات مراجعة مجانية خلال فترة التطوير
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/terms">
                  <Button variant="outline" icon={ArrowLeft}>
                    اطلع على الشروط والأحكام الكاملة
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              محتار في الاختيار؟
            </h2>
            <p className="text-xl mb-8 text-white/90">
              دعنا نساعدك في اختيار الباقة المناسبة. احجز استشارة مجانية لمناقشة مشروعك ومتطلباتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" variant="secondary" icon={ArrowLeft}>
                  احجز استشارة مجانية
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" icon={ArrowLeft}>
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
