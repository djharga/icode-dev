import { Link } from 'react-router-dom';
import { Tag, Clock, TrendingUp, Sparkles, ArrowLeft, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Offers() {
  const currentOffers = [
    {
      title: 'عرض الإطلاق الخاص',
      discount: 25,
      description: 'خصم 25% على جميع مشاريع المواقع الإلكترونية للعملاء الجدد',
      terms: [
        'ينطبق على المشاريع الجديدة فقط',
        'حد أدنى لقيمة المشروع 15,000 ريال',
        'لا يمكن الجمع مع عروض أخرى',
      ],
      validUntil: '2024-12-31',
      targetAudience: 'الشركات الناشئة والأعمال الصغيرة',
      featured: true,
    },
    {
      title: 'باقة الشركات الناشئة',
      discount: 30,
      description: 'خصم 30% لمشاريع الشركات الناشئة مع دعم تقني ممتد',
      terms: [
        'يجب تقديم ما يثبت أن الشركة ناشئة',
        'يشمل 6 أشهر صيانة مجانية',
        'أولوية في الدعم الفني',
        'جلسة استشارية شهرية مجانية',
      ],
      validUntil: '2024-12-31',
      targetAudience: 'الشركات الناشئة في المراحل الأولى',
      featured: true,
    },
    {
      title: 'عرض الباقة السنوية',
      discount: 20,
      description: 'وفر 20% عند التعاقد لمدة سنة على خدمات الصيانة والتطوير',
      terms: [
        'دفعة واحدة مقدماً أو أقساط شهرية',
        'يشمل عدد ساعات محدد شهرياً',
        'أولوية في التنفيذ',
        'دعم فني على مدار الساعة',
      ],
      validUntil: 'عرض دائم',
      targetAudience: 'الشركات التي تحتاج تطويراً مستمراً',
      featured: false,
    },
  ];

  const seasonalOffers = [
    {
      title: 'عرض رمضان الكريم',
      description: 'خصم خاص بمناسبة الشهر الفضيل',
      icon: Sparkles,
      status: 'قريباً',
    },
    {
      title: 'عرض اليوم الوطني',
      description: 'احتفل بالوطن مع عروض تقنية مميزة',
      icon: TrendingUp,
      status: 'قريباً',
    },
  ];

  const benefits = [
    'جودة مضمونة دون تنازلات',
    'نفس معايير الجودة والاحترافية',
    'دعم فني كامل',
    'ضمان على جميع الأعمال',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Tag className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              العروض والخصومات
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              استفد من عروضنا الحصرية واحصل على خدمات تقنية احترافية بأسعار تنافسية
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              العروض الحالية
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              استغل هذه الفرصة قبل انتهاء العروض
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer, index) => (
              <Card
                key={index}
                className={`p-8 relative ${offer.featured ? 'ring-2 ring-accent-500 scale-105' : ''}`}
                hover={false}
              >
                {offer.featured && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 gradient-accent text-white text-sm font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    عرض مميز
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 gradient-primary text-white text-4xl font-bold rounded-2xl mb-4">
                    {offer.discount}%
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {offer.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                    شروط العرض:
                  </h4>
                  <ul className="space-y-2">
                    {offer.terms.map((term, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                    <span className="text-secondary-600 dark:text-secondary-400">
                      ساري حتى:
                    </span>
                    <span className="font-semibold text-secondary-900 dark:text-white">
                      {offer.validUntil}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    <strong>مناسب لـ:</strong> {offer.targetAudience}
                  </div>
                </div>

                <Link to="/contact" className="block">
                  <Button
                    className="w-full"
                    variant={offer.featured ? 'primary' : 'outline'}
                    icon={ArrowLeft}
                  >
                    اطلب العرض الآن
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              عروض موسمية قادمة
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              ترقب عروضنا الخاصة في المناسبات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="p-8" hover>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <offer.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-3">
                      {offer.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold">
                      {offer.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center" gradient>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                هل تؤثر الخصومات على الجودة؟
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
                أبداً! نحافظ على نفس معايير الجودة العالية في جميع مشاريعنا
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-success-500" />
                    <span className="text-lg text-secondary-700 dark:text-secondary-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              اشترك في النشرة البريدية
            </h2>
            <p className="text-xl mb-8 text-white/90">
              كن أول من يعلم بالعروض والخصومات الجديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-3 rounded-lg text-secondary-900 outline-none"
              />
              <Button variant="secondary" size="lg">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}