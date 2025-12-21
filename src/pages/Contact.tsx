// src/pages/Contact.tsx (FULL UPDATED — Funnel + GTM + WhatsApp CTA + budget EGP + no overflow)

import { useState, FormEvent } from 'react';
import { Github, Linkedin, Twitter, MapPin, Send, ArrowLeft, Phone } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/TextArea';
import { Select } from '../components/ui/Select';
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
  // ===== Funnel / WhatsApp =====
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
    { value: 'موقع إلكتروني', label: 'موقع إلكتروني' },
    { value: 'تطبيق ويب', label: 'تطبيق ويب' },
    { value: 'تطبيق موبايل', label: 'تطبيق موبايل' },
    { value: 'نظام مخصص', label: 'نظام مخصص' },
    { value: 'استشارة تقنية', label: 'استشارة تقنية' },
    { value: 'أخرى', label: 'أخرى' },
  ];

  // تحويل العملة إلى جنيه مصري (بدون "ريال")
  const budgetRanges = [
    { value: '', label: 'اختر الميزانية التقريبية (اختياري)' },
    { value: 'أقل من 10,000 جنيه', label: 'أقل من 10,000 جنيه' },
    { value: '10,000 - 25,000 جنيه', label: '10,000 - 25,000 جنيه' },
    { value: '25,000 - 50,000 جنيه', label: '25,000 - 50,000 جنيه' },
    { value: '50,000 - 100,000 جنيه', label: '50,000 - 100,000 جنيه' },
    { value: 'أكثر من 100,000 جنيه', label: 'أكثر من 100,000 جنيه' },
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

  const contactInfo = [
    {
      icon: Phone,
      label: 'واتساب',
      value: '+20 150 761 9503',
      href: WHATSAPP_LINK,
      external: true,
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'القاهرة، مصر',
      href: '#',
      external: false,
    },
  ];

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
              نحن هنا للإجابة على أسئلتك ومساعدتك في تحويل أفكارك إلى واقع رقمي
            </p>

            {/* Funnel CTA */}
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/90"
                >
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
                  <p className="text-red-700 dark:text-red-400 font-semibold">{error}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                onFocusCapture={() => pushDL('lead_form_focus', { source: 'contact_form' })}
              >
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

                <Button type="submit" size="lg" className="w-full" disabled={loading} icon={Send}>
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>

                {/* Secondary CTA (WhatsApp) */}
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
            </div>

            {/* CONTACT INFO */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">معلومات التواصل</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
                يمكنك التواصل معنا مباشرة عبر القنوات التالية
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6" hover>
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                      target={info.external ? '_blank' : undefined}
                      rel={info.external ? 'noopener noreferrer' : undefined}
                      onClick={() => pushDL('lead_click', { source: 'contact_info', channel: info.label })}
                    >
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">{info.label}</p>
                        <p className="text-lg font-semibold text-secondary-900 dark:text-white">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* SOCIAL */}
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
                      onClick={() => pushDL('social_click', { platform: social.label, source: 'contact' })}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* RESPONSE TIME */}
              <Card className="p-8 mt-12" glass>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">وقت الاستجابة</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل. للاستفسارات العاجلة، تواصل عبر واتساب.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => pushDL('lead_click', { source: 'contact_response_card_whatsapp' })}
                    className="flex-1"
                  >
                    <Button className="w-full" icon={ArrowLeft}>
                      واتساب الآن
                    </Button>
                  </a>
                  <Link
                    to="/offer"
                    onClick={() => pushDL('nav_click', { target: '/offer', source: 'contact_response_card' })}
                    className="flex-1"
                  >
                    <Button className="w-full" variant="outline">
                      شوف عرض 7 أيام
                    </Button>
                  </Link>
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
                  a: 'يعتمد على حجم المشروع وتعقيده، عادة من 2-8 أسابيع. ويمكن تنفيذ نسخة سريعة بعرض 7 أيام حسب النطاق.',
                },
                {
                  q: 'هل تقدمون خدمات الصيانة بعد التسليم؟',
                  a: 'نعم، نقدم صيانة ودعم حسب احتياجك وخطة المشروع.',
                },
                {
                  q: 'هل يمكنني رؤية أمثلة من أعمالكم؟',
                  a: 'نعم، راجع صفحة الأعمال لرؤية مشاريع مختارة.',
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

            {/* Final CTA */}
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
