// src/pages/Contact.tsx (SAFE VERSION — no custom Input/Select/TextArea, no Button className, no break)
// Copy-Paste as-is

import { useState, FormEvent } from 'react';
import { Phone, MapPin, Send, ArrowLeft, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function pushDL(event: string, payload: Record<string, unknown> = {}) {
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ event, ...payload });
}

export function Contact() {
  const WHATSAPP_PHONE = '201507619503';
  const WHATSAPP_PREFILL = encodeURIComponent(
    [
      'عايز أبدأ مشروع.',
      '',
      'نوع المشروع:',
      'الميزانية:',
      'موعد الإطلاق:',
      'تفاصيل مختصرة:',
    ].join('\n')
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_PREFILL}`;

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
    'موقع إلكتروني',
    'تطبيق ويب',
    'تطبيق موبايل',
    'نظام مخصص',
    'استشارة تقنية',
    'أخرى',
  ];

  const budgetRanges = [
    '',
    'أقل من 10,000 جنيه',
    '10,000 - 25,000 جنيه',
    '25,000 - 50,000 جنيه',
    '50,000 - 100,000 جنيه',
    'أكثر من 100,000 جنيه',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    pushDL('lead_submit', { source: 'contact_form', project_type: formData.project_type });

    try {
      const { error: submitError } = await supabase.from('contacts').insert([formData]);
      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        project_type: 'موقع إلكتروني',
        budget: '',
        message: '',
      });

      pushDL('lead_success', { source: 'contact_form' });
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      pushDL('lead_error', { source: 'contact_form' });
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              ارسل تفاصيل مشروعك وسنرد خلال 24 ساعة. للعاجل: واتساب.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushDL('lead_click', { source: 'contact_hero_whatsapp' })}
              >
                <Button size="lg" icon={ArrowLeft}>
                  ابدأ على واتساب الآن
                </Button>
              </a>

              <a
                href="#contact-form"
                onClick={() => pushDL('nav_click', { target: '#contact-form', source: 'contact_hero' })}
              >
                <Button size="lg" variant="outline">
                  ارسل رسالة
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <div id="contact-form">
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">أرسل لنا رسالة</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                املأ النموذج وسنعود لك بأقرب وقت.
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
                  <p className="text-red-700 dark:text-red-400 font-semibold">{error}</p>
                </div>
              )}

              <Card className="p-8" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 dark:text-white mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="أدخل اسمك الكامل"
                      className="w-full rounded-xl px-4 py-3 bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 outline-none text-secondary-900 dark:text-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 dark:text-white mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full rounded-xl px-4 py-3 bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 outline-none text-secondary-900 dark:text-white"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 dark:text-white mb-2">
                      نوع المشروع
                    </label>
                    <select
                      required
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 outline-none text-secondary-900 dark:text-white"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 dark:text-white mb-2">
                      الميزانية التقريبية (اختياري)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 outline-none text-secondary-900 dark:text-white"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b || 'none'} value={b}>
                          {b || 'اختر الميزانية التقريبية'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-secondary-900 dark:text-white mb-2">
                      رسالتك
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="أخبرنا عن مشروعك ومتطلباتك..."
                      className="w-full rounded-xl px-4 py-3 bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 outline-none text-secondary-900 dark:text-white resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading} icon={Send}>
                    {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </Button>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    onClick={() => pushDL('lead_click', { source: 'contact_form_whatsapp' })}
                  >
                    <Button className="w-full" variant="outline" size="lg">
                      بدلاً من ذلك: افتح واتساب وحدد النطاق
                    </Button>
                  </a>
                </form>
              </Card>
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">معلومات التواصل</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                تواصل مباشر — أسرع قناة هي واتساب.
              </p>

              <div className="space-y-6 mb-12">
                <Card className="p-6" hover>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                    onClick={() => pushDL('lead_click', { source: 'contact_info', channel: 'واتساب' })}
                  >
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">واتساب</p>
                      <p className="text-lg font-semibold text-secondary-900 dark:text-white" dir="ltr">
                        +20 150 761 9503
                      </p>
                    </div>
                  </a>
                </Card>

                <Card className="p-6" hover>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">الموقع</p>
                      <p className="text-lg font-semibold text-secondary-900 dark:text-white">القاهرة، مصر</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">تابعنا</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center hover:bg-primary-600 dark:hover:bg-primary-600 text-secondary-700 dark:text-secondary-300 hover:text-white transition-all hover:scale-110"
                      aria-label={social.label}
                      onClick={() => pushDL('social_click', { platform: social.label, source: 'contact' })}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="p-8 mt-12" glass>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">وقت الاستجابة</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  نرد خلال 24 ساعة في أيام العمل. للعاجل: واتساب.
                </p>

                <div className="mt-6">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => pushDL('lead_click', { source: 'contact_response_card_whatsapp' })}
                  >
                    <Button className="w-full" icon={ArrowLeft}>
                      واتساب الآن
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">أسئلة شائعة</h2>

            <div className="space-y-6 text-right">
              {[
                {
                  q: 'كم يستغرق تنفيذ مشروع موقع إلكتروني؟',
                  a: 'حسب النطاق، عادة 2-8 أسابيع. ويمكن تنفيذ نسخة سريعة بعرض 7 أيام حسب المتطلبات.',
                },
                {
                  q: 'هل تقدمون صيانة بعد التسليم؟',
                  a: 'نعم، نقدم صيانة ودعم حسب خطة المشروع.',
                },
                {
                  q: 'هل يمكن رؤية أمثلة من الأعمال؟',
                  a: 'نعم، افتح صفحة الأعمال لرؤية مشاريع مختارة.',
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6" hover>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">{faq.q}</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">{faq.a}</p>

                  {index === 2 && (
                    <div className="mt-5">
                      <Link
                        to="/portfolio"
                        onClick={() => pushDL('nav_click', { target: '/portfolio', source: 'contact_faq' })}
                      >
                        <Button variant="outline" icon={ArrowLeft}>
                          افتح الأعمال
                        </Button>
                      </Link>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/offer" onClick={() => pushDL('nav_click', { target: '/offer', source: 'contact_footer' })}>
                <Button size="lg" icon={ArrowLeft}>
                  افتح عرض 7 أيام
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
