import { useState, FormEvent } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'موقع إلكتروني',
    budget: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const projectTypes = [
    { value: 'موقع إلكتروني', label: 'موقع إلكتروني' },
    { value: 'تطبيق ويب', label: 'تطبيق ويب' },
    { value: 'تطبيق موبايل', label: 'تطبيق موبايل' },
    { value: 'نظام مخصص', label: 'نظام مخصص' },
    { value: 'استشارة تقنية', label: 'استشارة تقنية' },
    { value: 'أخرى', label: 'أخرى' },
  ];

  const budgetRanges = [
    { value: '', label: 'اختر الميزانية التقريبية' },
    { value: 'أقل من 10,000 ريال', label: 'أقل من 10,000 ريال' },
    { value: '10,000 - 25,000 ريال', label: '10,000 - 25,000 ريال' },
    { value: '25,000 - 50,000 ريال', label: '25,000 - 50,000 ريال' },
    { value: '50,000 - 100,000 ريال', label: '50,000 - 100,000 ريال' },
    { value: 'أكثر من 100,000 ريال', label: 'أكثر من 100,000 ريال' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('contacts')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        project_type: 'موقع إلكتروني',
        budget: '',
        message: '',
      });
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'واتساب',
      value: '+20 150 761 9503',
      href: 'https://wa.me/201507619503',
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'القاهرة، مصر',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              نحن هنا للإجابة على أسئلتك ومساعدتك في تحويل أفكارك إلى واقع رقمي
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                أرسل لنا رسالة
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                املأ النموذج وسنتواصل معك في أقرب وقت ممكن
              </p>

              {success && (
                <div className="mb-6 p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg">
                  <p className="text-success-700 dark:text-success-400 font-semibold">
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
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

                <Select
                  label="نوع المشروع"
                  required
                  value={formData.project_type}
                  onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  options={projectTypes}
                />

                <Select
                  label="الميزانية التقريبية (اختياري)"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  options={budgetRanges}
                />

                <TextArea
                  label="رسالتك"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="أخبرنا عن مشروعك ومتطلباتك..."
                  rows={6}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                  icon={Send}
                >
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                معلومات التواصل
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                يمكنك التواصل معنا مباشرة عبر القنوات التالية
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6" hover>
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-secondary-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                  تابعنا على وسائل التواصل
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center hover:bg-primary-600 dark:hover:bg-primary-600 text-secondary-700 dark:text-secondary-300 hover:text-white transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="p-8 mt-12" glass>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  وقت الاستجابة
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  نحن نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل. للاستفسارات العاجلة، يرجى التواصل عبر واتساب.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              أسئلة شائعة
            </h2>
            <div className="space-y-6 text-right">
              {[
                {
                  q: 'كم يستغرق تنفيذ مشروع موقع إلكتروني؟',
                  a: 'يعتمد على حجم المشروع وتعقيده، عادة من 2-8 أسابيع.',
                },
                {
                  q: 'هل تقدمون خدمات الصيانة بعد التسليم؟',
                  a: 'نعم، نقدم خدمات صيانة ودعم مستمر حسب احتياجك.',
                },
                {
                  q: 'هل يمكنني رؤية أمثلة من أعمالكم؟',
                  a: 'بالتأكيد! راجع صفحة الأعمال لرؤية مشاريعنا السابقة.',
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6" hover>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
