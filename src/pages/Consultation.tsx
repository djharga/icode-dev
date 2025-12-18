import { useState, FormEvent } from 'react';
import { CheckCircle, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

export function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: 'موقع إلكتروني',
    preferred_date: '',
    preferred_time: 'صباحاً (9-12)',
    project_description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const projectTypes = [
    { value: 'موقع إلكتروني', label: 'موقع إلكتروني' },
    { value: 'تطبيق ويب', label: 'تطبيق ويب' },
    { value: 'تطبيق موبايل', label: 'تطبيق موبايل' },
    { value: 'نظام مخصص', label: 'نظام مخصص' },
    { value: 'استشارة معمارية', label: 'استشارة معمارية' },
    { value: 'أخرى', label: 'أخرى' },
  ];

  const timeSlots = [
    { value: 'صباحاً (9-12)', label: 'صباحاً (9-12)' },
    { value: 'ظهراً (12-3)', label: 'ظهراً (12-3)' },
    { value: 'عصراً (3-6)', label: 'عصراً (3-6)' },
    { value: 'مساءً (6-9)', label: 'مساءً (6-9)' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('consultations')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project_type: 'موقع إلكتروني',
        preferred_date: '',
        preferred_time: 'صباحاً (9-12)',
        project_description: '',
      });
    } catch (err) {
      setError('حدث خطأ أثناء حجز الاستشارة. يرجى المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'فهم شامل لمتطلبات مشروعك',
    'توصيات تقنية مخصصة',
    'تقدير أولي للتكلفة والمدة',
    'إجابة على جميع أسئلتك',
    'خطة عمل واضحة',
    'بدون أي التزام مالي',
  ];

  const whoShouldBook = [
    {
      title: 'أصحاب الأفكار',
      description: 'لديك فكرة مشروع وتريد معرفة كيفية تنفيذها',
    },
    {
      title: 'الشركات الناشئة',
      description: 'تبحث عن شريك تقني موثوق لبناء منتجك',
    },
    {
      title: 'الشركات القائمة',
      description: 'تريد تطوير أو تحديث أنظمتك الحالية',
    },
    {
      title: 'المديرون التقنيون',
      description: 'تحتاج إلى استشارة في القرارات التقنية',
    },
  ];

  const preparation = [
    'حدد أهداف مشروعك بوضوح',
    'اجمع أي مستندات أو مراجع ذات صلة',
    'حدد ميزانيتك المتوقعة',
    'فكر في الجدول الزمني المطلوب',
    'جهز أسئلتك واستفساراتك',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              احجز استشارة مجانية
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              جلسة استشارية مجانية لمناقشة مشروعك والحصول على توصيات تقنية متخصصة
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                ما ستحصل عليه من الجلسة
              </h2>

              <Card className="p-8 mb-8" gradient>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-secondary-700 dark:text-secondary-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                لمن هذه الاستشارة؟
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {whoShouldBook.map((item, index) => (
                  <Card key={index} className="p-6" hover>
                    <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>

              <Card className="p-6" glass>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  <h4 className="text-lg font-bold text-secondary-900 dark:text-white">
                    مدة الجلسة
                  </h4>
                </div>
                <p className="text-secondary-600 dark:text-secondary-300">
                  45-60 دقيقة عبر مكالمة فيديو أو هاتفية
                </p>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                احجز موعدك الآن
              </h2>

              {success && (
                <div className="mb-6 p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg">
                  <p className="text-success-700 dark:text-success-400 font-semibold">
                    تم حجز استشارتك بنجاح! سنتواصل معك لتأكيد الموعد.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-400 font-semibold">
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="الاسم الكامل"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك الكامل"
                />

                <Input
                  label="البريد الإلكتروني"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                />

                <Input
                  label="رقم الهاتف (اختياري)"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+966 5X XXX XXXX"
                />

                <Select
                  label="نوع المشروع"
                  required
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  options={projectTypes}
                />

                <Input
                  label="التاريخ المفضل"
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />

                <Select
                  label="الوقت المفضل"
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  options={timeSlots}
                />

                <TextArea
                  label="وصف مختصر للمشروع"
                  required
                  value={formData.project_description}
                  onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                  placeholder="أخبرنا بإيجاز عن مشروعك..."
                  rows={5}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                  icon={ArrowLeft}
                >
                  {loading ? 'جاري الحجز...' : 'احجز الآن'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                كيف تستعد للجلسة
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300">
                للحصول على أقصى استفادة من الاستشارة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preparation.map((item, index) => (
                <Card key={index} className="p-6" hover>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-secondary-700 dark:text-secondary-300 flex-1">
                      {item}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Card className="p-12 text-center" glass>
            <Clock className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              هل تحتاج للتواصل فوراً؟
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
              للاستفسارات العاجلة، تواصل معنا مباشرة عبر واتساب
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">
                تواصل عبر واتساب
              </Button>
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
}
